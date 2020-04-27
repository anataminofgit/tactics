import React, { createContext, useEffect } from "react";
import PropTypes from "prop-types";

import { Auth } from "aws-amplify";

export const AuthContext = createContext();

const AuthContextProvider = props => {
  const [userInfo, setUserInfo] = React.useState({
    authUser: null,
    authGroup: []
  });

  const updateAuthInfo = (user, group) => {
    setUserInfo({ authUser: user, authGroup: group });
  };

  async function getAuth() {
    try {
      const user = await Auth.currentAuthenticatedUser();
      // console.log("user:", user);
      const groups = user.signInUserSession.idToken.payload["cognito:groups"];
      const { email } = user.signInUserSession.idToken.payload;

      console.log("user groups:", email, groups);

      return { email: email, authGroup: groups };
    } catch (error) {
      console.log("error", error);
    }
  }

  useEffect(() => {
    getAuth().then(value => {
      if (value) updateAuthInfo(value.email, value.authGroup);
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
