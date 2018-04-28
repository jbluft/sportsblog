import React, { Component } from "react";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, TextArea, FormBtn } from "../../components/Form";


class Notes extends Component {
  state = {
    notes: [],
    horse: "",
    author: "",
    synopsis: "",
    track: ""
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    API.getNotes()
      .then(res =>
        this.setState({ notes: res.data, horse: "", author: "", synopsis: "", track: "" })
      )
      .catch(err => console.log(err));
  };

  deleteNote = id => {
    API.deleteNote(id)
      .then(res => this.loadNotes())
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.horse && this.state.author) {
      API.saveNote({
        horse: this.state.horse,
        author: this.state.author,
        synopsis: this.state.synopsis,
        track: this.state.track
      })
        .then(res => this.loadNotes())
        .catch(err => console.log(err));
    }
  };

  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-6">
          <h1>Submit Horse Note</h1>
            <form>
              <Input
                value={this.state.horse}
                onChange={this.handleInputChange}
                name="horse"
                placeholder="horse (required)"
              />
              <Input
                value={this.state.author}
                onChange={this.handleInputChange}
                name="author"
                placeholder="Author (required)"
              />
              <Input
                value={this.state.track}
                onChange={this.handleInputChange}
                name="track"
                placeholder="Track"
              />
              <TextArea
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.horse)}
                onClick={this.handleFormSubmit}
              >
                Submit Note
              </FormBtn>
            </form>
          </Col>
          <Col size="md-6 sm-12">
            <Jumbotron>
              <h1>Horse Notes</h1>
            </Jumbotron>
            {this.state.notes.length ? (
              <List>
                {this.state.notes.map(note => (
                  <ListItem key={note._id}>
                    <Link to={"/notes/" + note._id}>
                      <strong>
                        {note.horse} by {note.author} ({note.track})
                      </strong>
                    </Link>
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}
          </Col>

        </Row>
      </Container>
    );
  }
}

export default Notes;
