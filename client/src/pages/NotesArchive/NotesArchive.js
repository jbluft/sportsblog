import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import AllNotes from "../../components/AllNotes";
import TrackNotes from "../../components/TrackNotes";

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


            <TrackNotes track="gulfstream"/>
            <TrackNotes track="churchill"/>
            <TrackNotes track="belmont"/>
            <TrackNotes track="keeneland"/>
            <TrackNotes track="santaanita"/>





          </Col>



        </Row>
      </Container>
    );
  }
}

export default NotesArchive;
