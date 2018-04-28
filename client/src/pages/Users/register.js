import React, { Component } from "react";
import API from "../../utils/API";
import { Col, Row, Container } from "../../components/Grid";
import { Input, FormBtn } from "../../components/Form";
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import Paper from 'material-ui/Paper';


class Register extends Component {
    state = {
        username: "",
        password: ""
    };

    handleInputChange = event => {
        const { name, value } = event.target;
        this.setState({
          [name]: value
        });
      };

    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.saveUser({
                username: this.state.username,
                password: this.state.password
            })
              

                .catch(err => console.log(err));
        }
    };
    render() {
        return (
        <MuiThemeProvider>
            <Container fluid>
        <Row>
        <Col size="md-6">
        <Paper zDepth={1} style={{ marginTop: 75, padding: 10, display: 'grid' }} >
        <h1>Register</h1>
        <form>
        <Input
        value={this.state.username}
        onChange={this.handleInputChange}
        name="username"
        placeholder="Username (required)"
            />
            <Input
        value={this.state.password}
        onChange={this.handleInputChange}
        name="password"
        placeholder="Password (required)"
            />

            <FormBtn
        disabled={!(this.state.username && this.state.password)}
        onClick={this.handleFormSubmit}
    >
        Submit User
        </FormBtn>
        </form>
        </Paper>
        </Col>

        </Row>
        </Container>
        </MuiThemeProvider>

        );
    }
}
export default Register; 

