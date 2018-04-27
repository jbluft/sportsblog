import React, { Component } from "react";
// import DeleteBtn from "../../components/DeleteBtn";
// import Jumbotron from "../../components/Jumbotron";
import API from "../../utils/API";
// import { Link } from "react-router-dom";
import { Col, Row, Container } from "../../components/Grid";
// import { List, ListItem } from "../../components/List";
import { Input, FormBtn } from "../../components/Form";
// import Books from "../Books/Books";


class Users extends Component {
    state = {

        username: "",
        password: ""
    };
    handleFormSubmit = event => {
        event.preventDefault();
        if (this.state.username && this.state.password) {
            API.saveUser({
                username: this.state.username,
                password: this.state.password
            })
                // .then(res => this.loadBooks())
                .catch(err => console.log(err));
        }
    };
    render() {
        return (
            <Container fluid>
        <Row>
        <Col size="md-6">
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
        </Col>

        </Row>
        </Container>

        );
    }
}
export default Users; 