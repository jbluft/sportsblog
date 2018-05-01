import React, { Component } from "react";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import TrackStories from "../../components/TrackStories";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import AllPicks from "../../components/AllPicks";
import Subscribe from "../../components/Subscribe";

class Archive extends Component {
  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    track: ""
  };


  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "", track: "" })
      )
      .catch(err => console.log(err));
  };



  render() {
  
    return (
    <MuiThemeProvider>
    <Container fluid>
        <Row>
          <Col size="md-8">

          <AllPicks />
          
            </Col>
            <Col size="md-4">

            <MuiThemeProvider>
            <Subscribe />
            </MuiThemeProvider>
            <br />


            <TrackStories track="Gulfstream"/>
            <TrackStories track="Churchill"/>
            <TrackStories track="Belmont"/>
            <TrackStories track="SantaAnita"/>
            </Col>


        </Row>
      </Container>
      </MuiThemeProvider>

    );
  }
}

export default Archive;
