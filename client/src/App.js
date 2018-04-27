import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Users from "./pages/Users";
import Detail from "./pages/Detail";
import Archive from "./pages/Archive";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

//adding import to users
import Users from "./pages/Users";



const App = () => (
<Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/archive" component={Archive} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/register" component={Users} />
        <Route component={NoMatch} />
        {/* adding new route */}
        <Route exact path="/register" component={Users} />
      </Switch>
      <Footer />
    </div>
  </Router>

  );


export default App;
