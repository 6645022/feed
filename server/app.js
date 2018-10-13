"use strict";
const express = require('express'),
      bodyParser = require('body-parser'),
      app = express();
import {routes}  from './routes/index';



app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

// **** routes ****
new routes(app);

app.use((req, res, next) => {
    let err= {
        status : 404,
        message : 'Not Found'
    };
    next(err);
});

app.use((err, req, res, next) => {
    err.status =  err.status || 500;
    return res.status(err.status || 500).json({status:err.status ,message : err.message || 'Error'})
});

module.exports = app;