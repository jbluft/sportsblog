import React from "react";
// import "./Jumbotron.css";


const Jumbotron = ({ children }) => (
  <div style={{ height: 50, clear: "both", marginTop: 75 }} className="jumbotron">
    {children}
  </div>
);

export default Jumbotron;
