import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { List, ListItem } from "../../components/List";
import DeleteBtn from "../../components/DeleteBtn";

class NotesDetail extends Component {
    state = {
        note: {},
        notes: [],
        horse: "",
        author: "",
        synopsis: "",
        track: ""
      };
    

  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadNotes();
    API.getNote(this.props.match.params.id)
      .then(res => this.setState({ note: res.data }))
      .catch(err => console.log(err));
  }

  loadNotes = () => {
    API.getNotes()
      .then(res =>
        this.setState({ notes: res.data, horse: "", author: "", synopsis: "", track: "" })
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
            <Jumbotron>
              <h1>
                {this.state.note.horse} by {this.state.note.author}
              </h1>
            </Jumbotron>
          </Col>
        </Row>
        <Row>
          <Col size="md-8">
            <article>
              <h1>{this.state.note.horse}</h1>
              <p>
                By {this.state.note.author} ({ this.state.note.date })
              </p>
              <p>
                {this.state.note.synopsis}
              </p>
            </article>
          </Col>
          <Col size="md-4">
            <Jumbotron>
              <p>Latest Horse Picks</p>
            </Jumbotron>
            {this.state.notes.length ? (
              <List>
                {this.state.notes.map(note => (
                  <ListItem key={note._id}>
                    <Link to={"/notes/" + note._id} target="_blank">
                      <strong>
                        {note.horse} by {note.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteNote(note._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
            </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Link to="/">← Back to Authors</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default NotesDetail;
