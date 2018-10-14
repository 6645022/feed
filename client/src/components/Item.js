import React, { Component } from "react";
export default class Item extends Component {

    handleClick = (email)=> {
        this.props.handleItemClick(email)
    }
    render() {
        const {avatar,email,message} = this.props.item;
        return (
            <div className="media padding-top">
                <a href="#">
                    <img className="mr-2 rounded" src={avatar} alt="" onClick={() => this.handleClick(email)}/>
                </a>
                <div className="media-body">
                <h6 className="mt-0">{email}</h6>
                <span className="text-muted">{message}</span>
                </div>
            </div>
        )
    }
}