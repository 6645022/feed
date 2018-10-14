import React, { Component } from "react";
import ListItems from "./ListItems";

export default class List extends Component {
    render() {
        return (
          <ListItems items={this.props.items} />
        );
    }
}