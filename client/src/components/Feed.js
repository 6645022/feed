import React from 'react';
import Form from './Form'
import List from './List'
import Filter from './Filter'
import {Comments} from '../services/Comments'
import { Well } from "react-bootstrap";

class Feed extends React.Component{
    constructor(props){
        super(props);
        this.commentsService = new Comments();
        // Set initial state
        this.state = {
            data:[]
        }
    }
     async componentDidMount(){
         await this.getComments()
    };

    async getComments(){
        try {
            const res = await this.commentsService.getComments();
            this.setState({data:res.data});
        }catch(e) {
            console.log('error',e)
        }
    }

     addComment = async(comment)=>{
         try {
            const res = await this.commentsService.addComment(comment);
            this.state.data.unshift(res.data);
            this.setState({data: this.state.data});

        }catch(e) {
            console.log('error',e)
        }
    };

    filter = async(filter)=>{
        try {
            if(filter.length){
                const res = await this.commentsService.filter(filter);
                this.setState({data:res.data});
            }else{
                await this.getComments()
            }
        }catch(e) {
            console.log('error',e)
        }
    }
    render(){
        return (
            <div>
                <Well>
                    <Form onSubmit={this.addComment}/>
                </Well>

                <Filter filter={this.filter}/>
                <List items={this.state.data}/>
            </div>
        );
    }
}
export default Feed;