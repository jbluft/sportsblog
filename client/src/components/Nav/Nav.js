import React from "react";
import "./Nav.css";
import { Link } from "react-router-dom";


const Nav = () => (



  <nav className="navbar navbar-default">
  <div className="navbar-header">
    <Link className="navbar-brand" to="/">Picking Winners</Link>
  </div>
  <ul className="nav navbar-nav">

    <li>
     <Link to="/archive">Latest Picks</Link>
    </li>
    <li>
     <Link to="/notesarchive">Horse Notes</Link>
    </li>
  </ul>
  <ul className="nav navbar-nav navbar-right">
    <li><button className="btn btn-info log">Log In</button></li>
    <li><button className="btn btn-danger log"><a href="/register">Register</a></button></li>
  </ul>
</nav>


);

export default Nav;