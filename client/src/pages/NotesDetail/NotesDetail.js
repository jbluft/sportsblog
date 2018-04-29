import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import AllNotes from "../../components/AllNotes";

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
          <Col size="md-8">
            <article>
              <h1>{this.state.note.horse}</h1>
              <p>
                Track: <strong>{this.state.note.track}</strong>

              </p>

              <p>
                By {this.state.note.author}
              </p>
              <p>
                {this.state.note.synopsis}
              </p>
            </article>
          </Col>
          <Col size="md-4">

          <AllNotes />


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
