//avg_rating 따로 계산해서 응답에 같이 주기
const {favorite,user,review}=require('../../models')
const Sequelize = require('sequelize');

module.exports= async(req,res)=>{
    
    console.log(req.params)
    const data= await favorite.findAll({
        attributes:['perfume_name','brand_name','createdAt'],
        where:{user_id:req.body.user_id}
        //include:[ {model:user , required:true , attributes:['user_name'] ,where:{email: req.params.email} } ],
    })
    //일단 rating은 전체보내주는걸로
    const avg_rating = await review.findAll({
        attributes:  [ 'perfume_id' ,[Sequelize.fn('ROUND', Sequelize.fn('AVG', Sequelize.col('rating'))) , 'avg_rating' ] ],
        group: ['perfume_id']
    })

    if(!data) {
        res.status(400).json({"data":null , "message": "fail to get favorite list"});
    }
    else{
    res.status(200).json({"data":data, avg_rating, "message":"get favorite list successfully"});
    }
    
}

//! params 로 GET 요청