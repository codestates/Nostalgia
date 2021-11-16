const {review,user}=require('../../models');

module.exports= async(req,res)=>{
    const data = await review.findOne({
        where:{'user_id':req.body.user_id, 'perfume_id':req.body.perfume_id}
    })

    if(!data){
       
        res.status(200).json({"data":null ,"message":"get review successully"})
    }

    else{
        res.status(400).json({"data":null ,"message": "fail to get review"})
    }
}


//!수정필요., POST 로 바꾸셈