const mongoose = require('mongoose');
import {db} from '../config/config'

export default class Mongoose{
   constructor(){
       const options = {
           useCreateIndex: true,
           useNewUrlParser: true
       };
       return mongoose.connect(db,options);
   }
};
