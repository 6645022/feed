import React, { Component } from "react";

const Item = (props) => {
    return (
        <div class="media padding-top">
            <img class="mr-2 rounded" src={props.item.avatar} alt=""/>
                <div class="media-body">
                    <h6 class="mt-0">{props.item.email}</h6>
                    <span class="text-muted">{props.item.message}</span>
                </div>
        </div>
    )
};

const ListItems = (props) => {
    const lists = props.items.map((item,index) => {
        return (<Item key={index} item={item}/>)
    });
    return (
       <div>  { lists.length ? lists : <p>No Result</p> }</div>
    );
};

export default class List extends Component {
    render() {
        return (
          <ListItems items={this.props.items} />
        );
    }
}