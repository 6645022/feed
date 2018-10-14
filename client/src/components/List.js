import React, { Component } from "react";
import ListItems from "./ListItems";

export default class List extends Component {
    handleItemClick = (email)=> {
        this.props.handleItemClick(email)
    }
    render() {
        return (
          <ListItems items={this.props.items} handleItemClick={this.handleItemClick} />
        );
    }
}