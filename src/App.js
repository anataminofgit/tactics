import React from "react";
//import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

import { withAuthenticator } from "aws-amplify-react";
//import { useEffect } from "react";
//import { Hub } from "aws-amplify";

//import AuthContextProvider from "../src/context/authContext";

/* function checkUser() {
  Auth.currentAuthenticatedUser()
    .then(user => console.log({ user }))
    .catch(err => console.log(err));
} */

//import { BrowserRouter, Switch , Route} from "react-router-dom";
const hist = createBrowserHistory();

function App() {
  /*      useEffect(() => {
    Hub.listen("auth", data => {
      const { payload } = data;
      console.log("A new auth event has happened: ", data);
      if (payload.event === "signIn") {
        console.log("a user has signed in!");
      }
      if (payload.event === "signOut") {
        console.log("a user has signed out!");
      }
    });
  }, []); 
 */
  return (
    <div className="App">
      <Router history={hist}>
        <Switch>
          <Route path="/admin" component={Admin} />
          <Route path="/rtl" component={RTL} />
          <Redirect from="/" to="/rtl/dashboard" />
        </Switch>
      </Router>
    </div>
  );
}
export default withAuthenticator(App, { includeGreetings: true });
//      <AuthContextProvider>

//export default App;
