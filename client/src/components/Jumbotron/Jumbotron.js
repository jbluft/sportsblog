import React from "react";
import "./Jumbotron.css";


const Jumbotron = ({ children }) => (
  <div style={{ height: 100, clear: "both" }} className="jumbotron">
    {children}
  </div>
);

export default Jumbotron;
