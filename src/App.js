import React from "react";
import { Provider } from "react-redux";
import { createBrowserHistory } from "history";
import { Router, Route, Switch, Redirect } from "react-router-dom";

// core components
import RTL from "layouts/RTL.js";

import "assets/css/material-dashboard-react.css?v=1.8.0";

import { withAuthenticator } from "aws-amplify-react";

import AuthContextProvider from "../src/context/authContext";
import tacticsStore from "./reducer/reducers";

const hist = createBrowserHistory();

function App() {
  return (
    <div className="App">
      <Provider store={tacticsStore}>
        <AuthContextProvider>
          <Router history={hist}>
            <Switch>
              <Route path="/rtl" component={RTL} />
              <Redirect from="/" to="/rtl/dashboard" />
            </Switch>
          </Router>
        </AuthContextProvider>
      </Provider>
    </div>
  );
}
export default withAuthenticator(App);

//export default App;
