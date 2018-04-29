import React, { Component } from "react";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { Input, TextArea, FormBtn } from "../../components/Form";
import AllNotes from "../../components/AllNotes"

class Notes extends Component {
  state = {
    notes: [],
    horse: "",
    author: "",
    synopsis: "",
    fullSynopsis: "",
    track: ""
  };

  componentDidMount() {
    this.loadNotes();
  }

  loadNotes = () => {
    API.getNotes()
      .then(res =>
        this.setState({ notes: res.data, horse: "", author: "", synopsis: "", fullSynopsis: "", track: "" })
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
        fullSynopsis: this.state.fullSynopsis,
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
              <Input
                value={this.state.synopsis}
                onChange={this.handleInputChange}
                name="synopsis"
                placeholder="Synopsis (Optional)"
              />
                <TextArea
                value={this.state.fullSynopsis}
                onChange={this.handleInputChange}
                name="fullSynopsis"
                placeholder="fullSynopsis (Optional)"
              />
              <FormBtn
                disabled={!(this.state.horse)}
                onClick={this.handleFormSubmit}
              >
                Submit Note
              </FormBtn>
            </form>

          <br />
          <br />
          <br />

          <AllNotes />

         </Col>


        </Row>
      </Container>
    );
  }
}

export default Notes;
