import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import { HashRouter as Router } from "react-router-dom";
import "./style/reset.scss"
import App from "./App";

ReactDOM.render(
    <Router>
      <App />
    </Router>,
  document.getElementById("root")
);
serviceWorker.unregister();
