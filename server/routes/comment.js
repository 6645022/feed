"use strict";
import CommentService from '../services/CommentService'
const express  = require('express'),
      router   = express.Router();

router.get('/',async(req,res)=>{
    try{
        const queryString = req.query.query || '';
        const data = await CommentService.get(queryString);
        res.status(200).json(data);
    }catch (err){
        res.status(400).json({message:err});
    }
});

router.get('/last-comment/:email',async(req,res)=>{
    try{
        const data = await CommentService.getLastComment(req.params);
        res.status(200).json(data);
     }catch (err){
         res.status(400).json({message:err});
     }
});
router.post('/',async (req,res)=>{
    try{
        const data = await CommentService.set(req.body);
        res.status(200).json(data);
    }catch (err){
        res.status(400).json({message:err});
    }
});
export {router as commentRouter};