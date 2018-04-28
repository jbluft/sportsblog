import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';


import Paper from 'material-ui/Paper';



class Archive extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    track: ""
  };


  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "", track: "" })
      )
      .catch(err => console.log(err));
  };



  render() {
  
    return (
    <MuiThemeProvider>
    <Container fluid>
        <Row>
          <Col size="md-6">
       <Paper zDepth={1} style={{ marginTop: 75, padding: 10, display: 'grid' }} >
       <p>Latest Horse Picks</p>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author} ({book.track})
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Paper>
            </Col>
            <Col size="md-6">
       <Paper zDepth={1} style={{ marginTop: 75, padding: 10, display: 'grid' }} >
       <p>Latest Horse Picks</p>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Paper>
            </Col>

        </Row>
      </Container>
      </MuiThemeProvider>

    );
  }
}

export default Archive;
