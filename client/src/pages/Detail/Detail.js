import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import API from "../../utils/API";
import AllPicks from "../../components/AllPicks";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Subscribe from "../../components/Subscribe";

class Detail extends Component {
  state = {
    book: {},
    books: [],
    title: "",
    author: "",
    fullSynopsis: "",
    track: ""
  };


  // When this component mounts, grab the book with the _id of this.props.match.params.id
  // e.g. localhost:3000/books/599dcb67f0f16317844583fc
  componentDidMount() {
    this.loadBooks();
    API.getBook(this.props.match.params.id)
      .then(res => this.setState({ book: res.data }))
      .catch(err => console.log(err));
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", fullSynopsis: "", track: "" })
      )
      .catch(err => console.log(err));
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-8">
            <article>
              <h1>{this.state.book.title}</h1>
              <p>
                Track: <strong>{this.state.book.track}</strong>

              </p>
              <p>
                By {this.state.book.author}
              </p>
              <p>
                {this.state.book.synopsis}
              </p>
            </article>
          </Col>
          <Col size="md-4">


            <MuiThemeProvider>
            <Subscribe />
            </MuiThemeProvider>
            <br />

          <AllPicks />

            </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <Link to="/archive">← Back to Picks</Link>
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Detail;
