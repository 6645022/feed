import React, { Component } from "react";

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
            <form role="form">
                <div class="form-group">
                    <input class="form-control"
                           autoFocus
                           type="text"
                           placeholder="Filter"
                           onChange={event => this.handleChange(event)}
                    />
                </div>
            </form>
        );
    }
}