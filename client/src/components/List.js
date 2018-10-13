import React, { Component } from "react";
import { Image,Media } from "react-bootstrap";

const Item = (props) => {
    return (
        <Media>
            <Media.Left>
                <Image width={64} height={64} src={props.item.avatar} rounded alt="thumbnail" />
            </Media.Left>
            <Media.Body >
                <Media.Heading componentClass="h6">{props.item.email}</Media.Heading>
                <p>
                    {props.item.message}
                </p>
            </Media.Body>
        </Media>
    );
};

const ListItems = (props) => {
    const lists = props.items.map((item,index) => {
        return (<Item key={index} item={item}/>)
    });
    return (<div style={{marginTop:'70px'}}>{lists}</div>);
};
export default class List extends Component {
    render() {
        return (
           <ListItems items={this.props.items} />
        );
    }
}