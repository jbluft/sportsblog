import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import { CardMedia, CardTitle } from 'material-ui/Card';
import AllNotes from "../../components/AllNotes";
import Subscribe from "../../components/Subscribe";
import AllPicks from "../../components/AllPicks";

class Home extends Component {


    
  render() {

  

    return (
      <MuiThemeProvider>
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Link to={"/archive"}>
          <CardMedia style={{ marginBottom: 10 }}
            overlay={<CardTitle title="It's Kentucky Derby Time" subtitle="Are You Ready For The Run For The Roses? Click here to find out" />}
    >
            <img src={ require("./startinggateCD.jpg") } alt="" />
            </CardMedia></Link>

          </Col>
        </Row>
        <Row>
        <Col size="lg-4">

          <AllPicks />

        </Col>

        <Col size="lg-4">
          <AllNotes />
        </Col>

        <Col size="lg-4">
          <Subscribe />
        </Col>

      </Row>
       </Container>
      </MuiThemeProvider>
    );
  }
}

export default Home;
