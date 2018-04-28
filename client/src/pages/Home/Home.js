import React, { Component } from "react";
import DeleteBtn from "../../components/DeleteBtn";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import RaisedButton from 'material-ui/RaisedButton';
import { CardMedia, CardTitle } from 'material-ui/Card';
import Dialog from 'material-ui/Dialog';
import FlatButton from 'material-ui/FlatButton';
import {RadioButton, RadioButtonGroup} from 'material-ui/RadioButton';

import Avatar from 'material-ui/Avatar';
import Paper from 'material-ui/Paper';


import {
  blue900,
  red900,
  grey50,
  fullWhite,
  black,
} from 'material-ui/styles/colors';



class Home extends Component {

  state = {
    books: [],
    title: "",
    author: "",
    synopsis: "",
    open: false,
  };

  handleOpen = () => {
    this.setState({open: true});
  };

  handleClose = () => {
    this.setState({open: false});
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

    const styles = {
      radioButton: {
        marginTop: 16,
      },
    };

    // const aviStyle = {margin: 5};


    const actions = [
      <FlatButton
        label="Cancel"
        primary={true}
        onClick={this.handleClose}
      />,
      <FlatButton
        label="Submit"
        primary={true}
        keyboardFocused={true}
        onClick={this.handleClose}
      />,
    ];

    const radios = [];
    const plans = [ "Daily ($10)", "Monthly ($100)", "Annual ($499) Best Deal!"  ]
    for (let i = 0; i < plans.length; i++) {
      radios.push(
        <RadioButton
          key={i}
          value={`value${i + 1}`}
          label={`Option ${plans[i]}`}
          style={styles.radioButton}
        />
      );
    }

    
    return (
      <MuiThemeProvider>
      <Container fluid>
        <Row>
          <Col size="md-12">
          <Link to={"/archive"}>
          <CardMedia style={{ marginTop: 75 }}
            overlay={<CardTitle title="It's Kentucky Derby Time" subtitle="Are You Ready For The Run For The Roses? Click here to find out" />}
    >
            <img src={ require("./hero_racing.jpg") } alt="" />
            </CardMedia></Link>
          </Col>
        </Row>
        <Row>
        <Col size="lg-4">
        <Paper zDepth={1} style={{ marginTop: 40, padding: 10, display: 'grid' }} >
              <h1>Latest Horse Picks</h1>
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
            )}          
            </Paper>
            </Col>

        <Col size="lg-4">
        <Paper zDepth={1} style={{ marginTop: 40, padding: 10, display: 'grid' }} >
              <h1>Latest Horse Notes</h1>
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
            )}
            </Paper>          

            </Col>

        <Col size="lg-4">
        {/* <CardText> */}
        <Paper zDepth={1} style={{ marginTop: 40, padding: 10, display: 'grid' }} >
        <h1>3 Reasons To Subscribe</h1>
          <p>
        <Avatar
          color={fullWhite}
          backgroundColor={red900}
          size={50}
          style={{ 
            margin: 5,
            border: '1px solid #000000',
          }}
        >
          1
        </Avatar>
            Lorem ipsum dolor sit amet</p>
            <p>
        <Avatar
          color={black}
          backgroundColor={grey50}
          size={50}
          style={{ 
            margin: 5,
            border: '1px solid #000000',
          }}
        >
          2
        </Avatar>
            Lorem ipsum dolor sit amet</p>

                    <p>
        <Avatar
          color={grey50}
          backgroundColor={blue900}
          size={50}
          style={{ 
            margin: 5,
            border: '1px solid #000000',
          }}
        >
          3
        </Avatar>
            Lorem ipsum dolor sit amet</p>


        <RaisedButton label="Subscribe" onClick={this.handleOpen} primary={true} style={{ float: 'right' }} />
        <Dialog
          title="Subscription Options"
          actions={actions}
          modal={false}
          open={this.state.open}
          onRequestClose={this.handleClose}
          autoScrollBodyContent={true}
        >
          <RadioButtonGroup name="shipSpeed" defaultSelected="not_light">
            {radios}
          </RadioButtonGroup>
        </Dialog>


        </Paper>



        </Col>



      </Row>
       </Container>
      </MuiThemeProvider>
    );
  }
}

export default Home;
