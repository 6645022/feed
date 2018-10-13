import React, { Component } from "react";
import {FormGroup, FormControl } from "react-bootstrap";

export default class Filter extends Component {
    constructor(props){
        super(props);
        this.timeout =  0;
    }
    validateForm() {
        return this.state.query.length > 0;
    }
    handleChange(evt){
        var searchText = evt.target.value;
        if(this.timeout) clearTimeout(this.timeout);
        this.timeout = setTimeout(() => {
           this.props.filter(searchText);
        }, 300);
    }

    render() {
        return (
            <div className="form">
                <form>
                    <FormGroup controlId="filter" bsSize="large">
                        <FormControl
                            componentClass="textarea"
                            placeholder="Filter"
                            onChange={event => this.handleChange(event)}
                        />

                    </FormGroup>
                </form>
            </div>
        );
    }
}