import React, { Component } from "react";
import Modal from 'react-modal';
const customStyles = {
    content : {
        top                   : '50%',
        left                  : '50%',
        right                 : 'auto',
        bottom                : 'auto',
        marginRight           : '-50%',
        transform             : 'translate(-50%, -50%)'
    }
};
Modal.setAppElement('#container')

export default class WindowModel extends Component {
    constructor(props) {
        super(props);

        this.state = {
            modalIsOpen: false
        };
    }
    componentWillReceiveProps(nextProps){
        if (this.props.item !== nextProps.item) {
            this.setState({
                modalIsOpen: Object.keys(nextProps.item).length !== 0
            });
        }

    }
    openModal = ()=>{
        this.setState({modalIsOpen: true});
    }
    closeModal = ()=>{
        this.setState({modalIsOpen: false});
    }
    render() {
            const {avatar,email,createdDate} = this.props.item;
            const lastActivity = new Date(`${createdDate}`).toLocaleString();
            return (
                <div>
                    <Modal
                        isOpen={this.state.modalIsOpen}
                        onRequestClose={this.closeModal}
                        style={customStyles}>
                        <div className="media padding-top">
                            <img className="mr-2 rounded" src={avatar} alt=""/>
                            <div className="media-body">
                                <h6 className="mt-0">{email}</h6>
                                <span className="text-muted"><small>Last Activity:{lastActivity}</small></span>
                            </div>
                        </div>
                    </Modal>
                </div>
            );

    }
}