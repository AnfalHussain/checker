import React from "react";

import { Switch, Route, Redirect, withRouter } from "react-router-dom";
import { connect } from "react-redux";
//Components

import Homepage from "./components/Homepage";
function App() {
  return (
    <>
      <div>
        <Homepage />
      </div>
    </>
  );
}

export default App;
