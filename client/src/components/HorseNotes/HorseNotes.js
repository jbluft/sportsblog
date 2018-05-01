import React, { Component } from "react";
import API from "../../utils/API";
import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";

import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';


class HorseNotes extends Component {
  state = {
    notes: [],
    note: "",
    horse: "",
    author: "",
    synopsis: "",
    track: ""
  };

  // componentWillMount() {
  //   this.loadNotes();
  // }


// loadNotes = () => {
//     API.getHorseNotes(this.props.horse)
//       .then(res =>
//         this.setState({ notes: res.data, horse: "", author: "", synopsis: "", track: "" })
//       )
//       .catch(err => console.log(err));
//   };


  handleInputChange = event => {
    const { name, value } = event.target;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    if (this.state.horse) {
      API.getHorseNotes({
        horse: this.state.horse
      })
        .then(res =>
          this.setState({ notes: res.data, horse: "", author: "", synopsis: "", track: "" }))
        .catch(err => console.log(err));
    }
  };




  render() {
  
  return (
<Container fluid>
    <Row>

          <h1>Submit Picks</h1>
            <form>
              <Input
                value={this.state.horse}
                onChange={this.handleInputChange}
                name="horse"
                placeholder="horse (required)"
              />

              <FormBtn
                disabled={!(this.state.horse)}
                onClick={this.handleFormSubmit}
              >
                Search Horse
              </FormBtn>
            </form>
    </Row>

        <Row>
          <Col size="md-8">
            <article>
              <h1>{this.state.horse}</h1>
              <p>
                Track: <strong>{this.state.track}</strong>

              </p>

              <p>
                By {this.state.author}
              </p>
              <p>
                {this.state.fullSynopsis}
              </p>
            </article>

            <br />


          </Col>
          </Row>
          </Container>

    );
  }


}
 export default HorseNotes;