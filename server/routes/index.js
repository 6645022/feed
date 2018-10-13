"use strict";
import {commentRouter} from './comment';

export class routes{
    constructor(app){
        const CrossOriginMiddleware = (req, res, next)=>{
            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE');
            res.header('Access-Control-Allow-Headers', 'Content-Type');
            next();
        };

        app.use(CrossOriginMiddleware);
        app.use('/comment',commentRouter);
    };
};