import React from 'react';
import Form from './Form'
import List from './List'
import Filter from './Filter'
import WindowModel from './WindowModel'

import {Comments} from '../services/Comments'

class Feed extends React.Component{
    constructor(props){
        super(props);

        this.commentsService = new Comments();
        this.state = {
            data:[],
            commentLastActivity:{}
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
    handleItemClick =async(email)=>{
        try {
            const res = await this.commentsService.getLastActivity(email);
            this.setState({commentLastActivity:res.data});
            }catch(e) {
                console.log('error',e)
        }
    }

    render(){
        return (
            <div id="feed">
                <div className="card">
                    <div className="card-body">
                        <Form onSubmit={this.addComment}/>
                    </div>
                    <div className="card-body list-container">
                        <Filter filter={this.filter}/>
                        <List items={this.state.data} handleItemClick={this.handleItemClick}/>
                    </div>
                </div>
                 <WindowModel item={this.state.commentLastActivity}/>

            </div>
    );
    }
}
export default Feed;