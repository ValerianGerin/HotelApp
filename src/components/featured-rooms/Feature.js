import React, { Component, useContext } from "react";
import { RoomContext } from "../../Context";

const Feature = () => {
  const context = useContext(RoomContext);
  console.log(context);
  return <div>Hello from feature</div>;
};

export default Feature;
