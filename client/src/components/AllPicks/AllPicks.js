import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';



class AllPicks extends Component {

  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    fullSynopsis: "",
    track: "",
    open: false,
  };


  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "", fullSynopsis: "", track: "" })
      )
      .catch(err => console.log(err));
  };


    
  render() {

    
    return (
      <MuiThemeProvider>
      <Container fluid>
        <Row>
        <Paper zDepth={1} style={{ padding: 10, display: 'grid' }} >
              <h1>Horse Racing Picks</h1>
              {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title}
                      </strong><br />
                      </Link>
                      Track: <strong>{book.track}</strong>
                      <br />
                      {book.synopsis}... <Link to={"/books/" + book._id} target="_blank">
(Click here for full story)</Link>

                  </ListItem>
                ))}                <br />
                <Link to={"/archive/"} target="_blank"> See All Picks</Link>
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}          
            </Paper>


      </Row>
       </Container>
      </MuiThemeProvider>
    );
  }
}

export default AllPicks;
