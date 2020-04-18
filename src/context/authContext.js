import React, { createContext, useReducer /* useEffect */ } from "react";
import { authReducer } from "../reducer/authreducer";
//import { Hub } from "aws-amplify";
//import { Auth } from "aws-amplify";

export const AuthContext = createContext();

/* async function getAuth() {
  // try {
  //  const user = await Auth.currentAuthenticatedUser();
  return { user: "anat.aminof.test@gmail.com", group: "teacher" };
  //console.log("user:", user);
  // } catch (error) {
  //    console.log("error", error);
  //  }
} */

const AuthContextProvider = props => {
  const [authInfo, dispatch] = useReducer(authReducer, {
    user: "anat.aminof.test@gmail.com",
    group: "teacher"
  });
  console.log("props.children", props.children);

  return (
    <AuthContext.Provider value={{ authInfo, dispatch }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;

//console.log("this", this.props.children, "props", props);
/* useEffect(() => {
    console.log("hiiii");
    Hub.listen("auth", data => {
      const { payload } = data;
      console.log("A new auth event has happened: ", data);
      if (payload.event === "signIn") {
        console.log("a user has signed in!");
        dispatch({
          type: "LOGIN",
          user: payload.data.attributes.email,
          group: payload.data.attributes.group
        });
      }
      if (payload.event === "signOut") {
        console.log("a user has signed out!");
        dispatch({ type: "LOGOUT", user: payload.data, group: payload.data });
      }
    });
  }, [authInfo]);
 */
