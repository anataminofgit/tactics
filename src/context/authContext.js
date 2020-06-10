import React, { createContext, useEffect } from "react";
import PropTypes from "prop-types";
import { studentsByEmail } from "../graphql/queries2";

import { Auth } from "aws-amplify";
import { API, graphqlOperation } from "aws-amplify";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [userInfo, setUserInfo] = React.useState({
    email: "",
    authGroup: [],
    id: null,
    name: "",
    address: "",
    phone: "",
    courseID: null
  });

  const updateAuthInfo = userInfo => {
    setUserInfo(userInfo);
  };

  async function getAuth() {
    return Auth.currentAuthenticatedUser()
      .then(async user => {
        const groups = user.signInUserSession.idToken.payload["cognito:groups"];
        const { email } = user.signInUserSession.idToken.payload;

        try {
          const response = await API.graphql(
            graphqlOperation(studentsByEmail, {
              queryName: "Student",
              email: { eq: email }
            })
          );

          if (!response) console.log("error - User not exsist in the DB");
          const data = response.data.studentsByEmail.items[0];
          const nextToken = response.data.studentsByEmail.nextToken;
          if (nextToken !== null)
            console.log("error - duplicate studentsByEmail", nextToken);
          return {
            email: email,
            authGroup: groups,
            studentID: data.id,
            courseID: data.courseID,
            name: data.name,
            address: data.address,
            phone: data.phone
          };
        } catch (error) {
          console.log("error - getAuth", error);
          return { email: "", authGroup: [] };
        }
      })
      .catch(err => {
        console.log("currentAuthenticatedUser", err);
      });
  }

  useEffect(() => {
    getAuth()
      .then(value => {
        if (value) updateAuthInfo(value);
      })
      .catch(err => {
        console.log("err - getAuth", err);
      });

    return () => {
      // cleanup
    };
  }, []);

  return (
    <AuthContext.Provider value={{ userInfo, updateAuthInfo }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

AuthContextProvider.propTypes = {
  children: PropTypes.any
};
