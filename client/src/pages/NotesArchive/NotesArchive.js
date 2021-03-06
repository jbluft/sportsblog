import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import AllNotes from "../../components/AllNotes";
import TrackNotes from "../../components/TrackNotes";
import Subscribe from "../../components/Subscribe";
import MuiThemeProvider from "material-ui/styles/MuiThemeProvider";

class NotesArchive extends Component {
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



  render() {
    return (
      <Container fluid>
        <Row>
            <Col size="md-8">


          <AllNotes />

            </Col>

            <Col size="md-4">
            <MuiThemeProvider>
            <Subscribe />
            </MuiThemeProvider>
            <br />
            <TrackNotes track="Gulfstream"/>
            <TrackNotes track="Churchill"/>
            <TrackNotes track="Belmont"/>
            <TrackNotes track="SantaAnita"/>





          </Col>



        </Row>
      </Container>
    );
  }
}

export default NotesArchive;
