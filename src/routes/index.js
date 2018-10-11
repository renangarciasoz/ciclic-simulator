import React from "react";
import { Switch, Route } from "react-router-dom";
import { ConnectedRouter } from "connected-react-router";
import { injectGlobal } from 'styled-components';
import Simulator from "../components/pages/Simulator";
import Simulation from "../components/pages/Simulation";
import VerifySimulation from "../utils/requireSimulation";
import history from "./history";

injectGlobal`
  body {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
      font-family: Rubik;
      font-size: 18px;
      background-image: linear-gradient(-270deg,rgba(125,60,255,.68),rgba(255,55,149,.68));
  }
`;

const Routes = () => (
  <ConnectedRouter history={history}>
    <Switch>
      <Route exact path="/" component={Simulator} />
      <Route path="/simulation" component={VerifySimulation(Simulation)} />
    </Switch>
  </ConnectedRouter>
);

export default Routes;