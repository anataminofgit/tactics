import React  from "react";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
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
            <Route path="/rtl" component={RTL} />
            <Redirect from="/" to="/rtl/dashboard" />
          </Switch>
        </Router>
      </AuthContextProvider>
    </div>
  );
}
export default withAuthenticator(App);

//export default App;
