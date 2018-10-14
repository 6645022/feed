import React, { Component } from "react";
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
            <div role="form" >
                <form onSubmit={this.handleSubmit} className="form">
                    <div className="form-group">
                        <input className="form-control"
                               id="email"
                               type="email"
                               value={this.state.email}
                               placeholder="Email"
                               onChange={this.handleChange}
                        />
                    </div>
                    <div className="form-group">
                        <textarea className="form-control"
                              id="message"
                              value={this.state.message}
                              placeholder="Message"
                              onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" className="btn btn-primary float-right" disabled={!this.validateForm()}>Submit</button>
                </form>
            </div>
        );
    }
}