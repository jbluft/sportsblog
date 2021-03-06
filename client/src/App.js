import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "./pages/Home";
import Books from "./pages/Books";
import Detail from "./pages/Detail";
import Archive from "./pages/Archive";
import NoMatch from "./pages/NoMatch";
import Nav from "./components/Nav";
import Footer from "./components/Footer";

import Notes from "./pages/Notes";
import NotesDetail from "./pages/NotesDetail";
import NotesArchive from "./pages/NotesArchive";

//adding import to users
import Register from "./pages/Users";

const App = () => (
<Router>
    <div>
      <Nav />
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/archive" component={Archive} />
        <Route exact path="/books" component={Books} />
        <Route exact path="/books/:id" component={Detail} />
        <Route exact path="/register" component={Register} />
        <Route exact path="/notes" component={Notes} />
        <Route exact path="/notes/:id" component={NotesDetail} />
        <Route exact path="/notesarchive" component={NotesArchive} />


        <Route component={NoMatch} />
      </Switch>
      <Footer />
    </div>
  </Router>

  );


export default App;
