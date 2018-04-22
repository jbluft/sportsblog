import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Archive from "./pages/Archive";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";

const App = () => (
  <Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/archive" component={Archive} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        {/* route to /new/:id  */}
        <Route component={NoMatch} />
      </Switch>
    </div>
  </Router>
);

export default App;
