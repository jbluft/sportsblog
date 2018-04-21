import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { FormBtn } from "../../components/Form";
import Hero from "../../components/Hero";


class Home extends Component {

  state = {
    books: [],
    title: "",
    author: "",
    synopsis: ""
  };

  componentDidMount() {
    this.loadBooks();
  }

  loadBooks = () => {
    API.getBooks()
      .then(res =>
        this.setState({ books: res.data, title: "", author: "", synopsis: "" })
      )
      .catch(err => console.log(err));
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => this.loadBooks())
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
    if (this.state.title && this.state.author) {
      API.saveBook({
        title: this.state.title,
        author: this.state.author,
        synopsis: this.state.synopsis
      })
        .then(res => this.loadBooks())
        .catch(err => console.log(err));
    }
  };


  render() {
    return (
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Hero backgroundImage="https://www.belterrapark.com/globalassets/bpc/race/1200x450_racing.jpg">
              <h1>... And They're Off!</h1>
              <h2>Handicapping Horses with Jacob Luft</h2>
          </Hero>
          </Col>
        </Row>
        <Row>
        <Col size="md-8">
        <h1>It's Kentucky Derby Time</h1>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc aliquet diam tortor, id
            consequat mauris ullamcorper eu. Orci varius natoque penatibus et magnis dis parturient
            montes, nascetur ridiculus mus. Pellentesque et dui id justo finibus sollicitudin at et
            metus. Ut feugiat tellus nec metus commodo, sed suscipit nisi gravida. Duis eget
            vestibulum quam, ut porttitor sem. Donec sagittis mi sollicitudin turpis semper, et
            interdum risus lobortis. Vestibulum suscipit nunc non egestas tristique. Proin hendrerit
            efficitur malesuada. Mauris lorem urna, sodales accumsan quam non, tristique tempor
            erat. Nullam non sem facilisis, tempus tortor sit amet, volutpat nisl. Ut et turpis non
            nunc maximus mollis a vitae tortor. Pellentesque mattis risus ac quam laoreet cursus.
            Praesent suscipit orci neque, vestibulum tincidunt augue tincidunt non. Duis consequat
            mattis tortor vitae mattis.
          </p>
          <p>
            Phasellus at rutrum nisl. Praesent sed massa ut ipsum bibendum porttitor. Sed malesuada
            molestie velit ac viverra. Quisque a ullamcorper purus. Curabitur luctus mi ac mi
            hendrerit semper. Nulla tincidunt accumsan lobortis. Mauris convallis sapien non nibh
            porta accumsan. Nunc volutpat tempus porttitor. Nunc congue dictum egestas. Aliquam
            blandit mi eu urna scelerisque, vitae volutpat ligula ultricies. Maecenas vel porta
            augue. Fusce mauris ex, dignissim et lacinia ut, tempus eget nibh.
          </p>
          <p>
            Etiam ut massa efficitur, gravida sapien non, condimentum sapien. Suspendisse massa
            tortor, facilisis in neque sit amet, scelerisque elementum tortor. Nullam eget nibh sit
            amet odio lobortis ullamcorper. Nulla bibendum magna nec sem pulvinar lobortis. Mauris
            et imperdiet urna, vitae lobortis dui. Nunc elementum elit mi, non mattis enim congue
            at. Proin mi lectus, ullamcorper id hendrerit eu, ultricies vitae lacus. Nunc vehicula,
            erat eget laoreet condimentum, felis ante malesuada leo, nec efficitur diam nisi eget
            nisi. Cras arcu lacus, tristique in bibendum vitae, elementum eget lorem. Maecenas
            vestibulum volutpat orci eu pharetra. Praesent vel blandit ante, nec faucibus libero.
            Sed ultrices lorem ex, eu facilisis libero convallis ac. Vivamus id dapibus eros. Nullam
            tempor sem rhoncus porta semper. Proin bibendum vulputate nisl, fringilla interdum elit
            pulvinar eu. Quisque vitae quam dapibus, vestibulum mauris quis, laoreet massa.
          </p>
          <Link to={"/"}>
              <FormBtn>
                Subscribe Today
              </FormBtn>
            </Link>

        </Col>
        <Col size="md-4">
            <Jumbotron>
              <p>Latest Horse Picks</p>
            </Jumbotron>
            {this.state.books.length ? (
              <List>
                {this.state.books.map(book => (
                  <ListItem key={book._id}>
                    <Link to={"/books/" + book._id}>
                      <strong>
                        {book.title} by {book.author}
                      </strong>
                    </Link>
                    <DeleteBtn onClick={() => this.deleteBook(book._id)} />
                  </ListItem>
                ))}
              </List>
            ) : (
              <h3>No Results to Display</h3>
            )}          </Col>

      </Row>

      </Container>
    );
  }
}

export default Home;
