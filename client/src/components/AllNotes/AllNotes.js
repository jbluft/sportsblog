import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
// import { Input, TextArea, FormBtn } from "../../components/Form";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';
import { black } from "material-ui/styles/colors";


class AllNotes extends Component {
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
          <MuiThemeProvider>
          <Paper zDepth={1} style={{ padding: 10, display: 'grid' }} >
          <Link to={"/notesarchive/"} target="_blank"><h1>Horse Notes</h1></Link>
            {this.state.notes.length ? (
              <List>
                {this.state.notes.map(note => (
                  <ListItem key={note._id}>
                    <Link to={"/notes/" + note._id} target="_blank">
                      <strong>
                        {note.horse}
                       </strong>
                       </Link>
                       <br />
                       Track: <strong>{note.track}</strong>
                       <br />
                       {note.synopsis}... <Link to={"/notes/" + note._id} target="_blank">
(Click here for full story)</Link>
                  </ListItem>
                ))}<br />
                <Link to={"/notesarchive/"} target="_blank" style={{ color: black }}> See All Notes</Link>


              </List>

            ) : (
              <h3>No Results to Display</h3>
            )}

            </Paper>
            </MuiThemeProvider>

         </Row>
      </Container>
    );
  }
}

export default AllNotes;
