import React, { Component } from "react";
import { Button, FormGroup, FormControl } from "react-bootstrap";

export default class Form extends Component {
    constructor() {
        super();
        this.state = {
            email: "",
            message: ""
        };
    }

    validateForm() {
        return this.state.email.length > 0 && this.state.message.length > 0;
    }

    handleChange = event => {
        this.setState({
            [event.target.id]: event.target.value
        });
    }

    handleSubmit = event => {
        event.preventDefault();
        this.props.onSubmit(this.state);
    }

    render() {
        return (
            <div className="form">
                <form onSubmit={this.handleSubmit}>
                    <FormGroup controlId="email" bsSize="large">
                        <FormControl
                            autoFocus
                            type="text"
                            value={this.state.email}
                            placeholder="Email"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <FormGroup controlId="message" bsSize="large">
                        <FormControl
                            componentClass="textarea"
                            value={this.state.message}
                            placeholder="Message"
                            onChange={this.handleChange}
                        />
                    </FormGroup>
                    <Button
                        className="float-right"
                        bsStyle="primary"
                        disabled={!this.validateForm()}
                        type="submit"
                    >
                        Submit
                    </Button>
                </form>
            </div>
        );
    }
}