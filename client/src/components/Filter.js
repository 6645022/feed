import React, { Component } from "react";

export default class Filter extends Component {
    constructor(props){
        super(props);
        this.timeout =  0;
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
            <form>
                <div className="form-group">
                    <input className="form-control"
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