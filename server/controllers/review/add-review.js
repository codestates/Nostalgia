//!유저 한명당 리뷰하나만 작성가능 중복확인할것

const {review,user}=require('../../models');

module.exports= async(req,res)=>{
    const accessTokenData = isAuthorized(req);
    const { user_id } = accessTokenData;

    const data = await review.findOne({
        where:{'user_id':user_id, 'perfume_id':req.body.perfume_id}
    })

    if(!data){
        await review.create({
            user_id:req.body.user_id,
            perfume_id:req.body.perfume_id,
            rating:req.body.rating,
            comment:req.body.comment
        })
        res.status(201).json({"data":null ,"message":"add review success"})
    }

    else{
        res.status(400).json({"data":null ,"message": "fail to add review"})
    }
}