import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";

import Simulator from "../pages/Simulator";
import Simulation from "../pages/Simulation";

import history from "./history";

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Simulator} />
      <Route path="/simulation" component={Simulation} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;