require("babel-polyfill");
import React from "react";
import ReactDOM from "react-dom";
import App from '../containers/App';

window.React = React;

ReactDOM.render(
  <App />,
  document.getElementById("root")
);
