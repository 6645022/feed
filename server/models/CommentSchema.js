"use strict";
import Mongoose  from '../modules/mongoose'

const mongoose = require('mongoose');
class CommentSchema extends Mongoose{
    constructor(){
        super();
        let schema = new mongoose.Schema({
                email     : {type:String,required:true,index:true},
                message   : {type:String,required:true},
                avatar : {type:String,required:true}
        });
        return mongoose.model('Comments',schema)
    };
};
export let commentSchema = new CommentSchema();