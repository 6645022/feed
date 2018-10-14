import React, { Component } from "react";
export default class Item extends Component {
    render() {
        const {avatar,email,message} = this.props.item;
        return (
            <div className="media padding-top">
                <img className="mr-2 rounded" src={avatar} alt=""/>
                <div className="media-body">
                    <h6 className="mt-0">{email}</h6>
                    <span className="text-muted">{message}</span>
                </div>
            </div>
        )
    }
}