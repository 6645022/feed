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

            <div role="form" className="form">
                <form onSubmit={this.handleSubmit}>


                    <div class="form-group has-feedback">
                        <input class="form-control"
                               autoFocus
                               type="email"
                               value={this.state.email}
                               placeholder="Email"
                               onChange={this.handleChange}
                        />
                    </div>
                    <div class="form-group has-feedback">
                        <textarea class="form-control"
                               autoFocus
                               value={this.state.message}
                               placeholder="Message"
                               onChange={this.handleChange}
                        />
                    </div>
                    <button type="submit" class="btn btn-primary float-right" disabled={!this.validateForm()}>Submit</button>
                </form>
            </div>
        );
    }
}