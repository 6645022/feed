import React, { Component } from "react";

const Item = (props) => {
    return (
        <div className="media padding-top">
            <img className="mr-2 rounded" src={props.item.avatar} alt=""/>
                <div className="media-body">
                    <h6 className="mt-0">{props.item.email}</h6>
                    <span className="text-muted">{props.item.message}</span>
                </div>
        </div>
    )
};

const ListItems = (props) => {
    const lists = props.items.map((item,index) => {
        return (<Item key={index} item={item}/>)
    });
    return (
       <div>  { lists.length ? lists : <b>No Result</b> }</div>
    );
};

export default class List extends Component {
    render() {
        return (
          <ListItems items={this.props.items} />
        );
    }
}