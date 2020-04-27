import React /* , { useEffect, useContext } */ from "react";
//import ReactDOM from "react-dom";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
//import Admin from "layouts/Admin.js";
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

import { withAuthenticator } from "aws-amplify-react";

import AuthContextProvider from "../src/context/authContext";
const hist = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <AuthContextProvider>
        <Router history={hist}>
          <Switch>
            {/*         <Route path="/admin" component={Admin} />*/}
            <Route path="/rtl" component={RTL} />
            <Redirect from="/" to="/rtl/dashboard" />
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}
export default withAuthenticator(App, { includeGreetings: true });

//export default App;
