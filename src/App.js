import React from "react";
import "./App.css";
import { Route, Switch } from "react-router-dom";

import { NavBar, Home, Rooms, SingleRoom, Error } from "./components";

const App = () => {
  return (
    <>
    <NavBar/>
      <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/rooms" component={Rooms}></Route>
        <Route exact path="/rooms/:type" component={SingleRoom}></Route>
        <Route component={Error}></Route>
      </Switch>
    </>
  );
};

export default App;
