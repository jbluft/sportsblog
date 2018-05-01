import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';


class TrackNotes extends Component {
  state = {
    notes: [],
    horse: "",
    author: "",
    synopsis: "",
    track: ""
  };

  componentWillMount() {
    this.loadNotes();
  }


loadNotes = () => {
    API.getTrackNotes(this.props.track)
      .then(res =>
        this.setState({ notes: res.data, horse: "", author: "", synopsis: "", track: "" })
      )
      .catch(err => console.log(err));
  };


  render() {
  
  return (
    <MuiThemeProvider>

<Container fluid>
    <Row>
      <Paper zDepth={1} style={{ padding: 10, display: 'grid' }} >
        {this.state.notes.length ? (
          <List>
            {this.state.notes.map(note => (
              <ListItem key={note._id}>
                <h1>{note.horse}</h1>
                <Link to={"/notes/" + note._id} target="_blank">
                  <strong>
                    By {note.author} ({note.track})
                  </strong>
                  <br />
                  {note.synopsis}
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
 export default TrackNotes;