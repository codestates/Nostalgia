//!한명이 중복해서 좋아요 못누름 중복확인할것
const { isAuthorized } = require('../tokenFunctions');
const {review_like}=require('../../models');

module.exports= async(req,res)=>{
    const accessTokenData = isAuthorized(req);
    const { user_id } = accessTokenData;

    const data = await review_like.findOne({
        where:{'user_id':user_id, 'review_id':req.body.review_id}
    })

    if(!data){
        await review_like.create({
            user_id:req.body.user_id,
            review_id:req.body.review_id
        })
        res.status(201).json({"data":null ,"message":"review like success"})
    }

    else{
        res.status(400).json({"data":null ,"message": "fail to like review"})
    }
}