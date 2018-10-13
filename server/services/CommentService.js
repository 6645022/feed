"use strict";
import {commentSchema} from '../models/CommentSchema';
import {gravatarUrl} from '../config/config';
const md5 = require('md5');

class CommentService{

    async get(queryString){
        let query = {};
        if(queryString.length){
             query  ={ 'email' : { '$regex' : queryString, '$options' : 'i' } }
        }
        try {
            const res = await commentSchema.find(query).sort({'createdDate': 'desc'}).exec();
            return res;
        }
        catch (e){
            throw e
        }
    }
     async set(data){
         try {
            let commentModel =  commentSchema();
            commentModel.email = data.email;
            commentModel.message = data.message;
            commentModel.avatar = `${gravatarUrl}/${md5(data.email)}`;

            const res = await commentModel.save();
            return res;

        }catch (e){
            throw e
        };
    }
}
export default new CommentService();