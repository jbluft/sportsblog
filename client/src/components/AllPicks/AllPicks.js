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
    open: false,
  };


  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };


    
  render() {

    
    return (
      <MuiThemeProvider>
      <Container fluid>
        <Row>
        <Paper zDepth={1} style={{ padding: 10, display: 'grid' }} >
              <h1>Latest Horse Picks</h1>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id} target="_blank">
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                  </ListItem>
                ))}
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
