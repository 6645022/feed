import React, { Component } from "react";
import Item from './Item';

export default class ListItems extends Component {
    handleItemClick = (email)=> {
        this.props.handleItemClick(email)
    }

    render() {
        const lists = this.props.items.map((item,index) => {
            return (<Item key={index} item={item} handleItemClick={this.handleItemClick}/>)
        });
        return (
           <div>  { lists.length ? lists : <b>No Result</b> }</div>
        );
    }
}