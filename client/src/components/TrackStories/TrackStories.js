import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';


class TrackStories extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    fullSynopsis: "",
    track: ""
  };

  componentWillMount() {
    this.loadBooks();
  }


loadBooks = () => {
    API.getTrackStories(this.props.track)
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
        {this.state.books.length ? (
          <List>
            {this.state.books.map(book => (
              <ListItem key={book._id}>
                <h1>{book.track} Stories</h1>
                <Link to={"/books/" + book._id} target="_blank">
                  <strong>
                    {book.title}
                     </strong>
                </Link>
                <br />
                by {book.author}<br />
                {book.synopsis} <Link to={"/books/" + book._id} target="_blank">(Click for full story)</Link>
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
 export default TrackStories;