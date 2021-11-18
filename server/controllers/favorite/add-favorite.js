//! 한번만 누를 수 있음
const {favorite,user}=require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports= async(req,res)=>{
    const accessTokenData = isAuthorized(req);
    const { id } = accessTokenData;

    const data = await favorite.findOne({
        where:{'user_id':id, 'perfume_name':req.body.perfume_name}
    })
    if(!data){
        await favorite.create({
            user_id:id,
            perfume_name:req.body.perfume_name,
            perfume_img:req.body.perfume_img,
            brand_name:req.body.brand_name
        })
        res.status(201).json({"data":null ,"message":"add favorite success"})
    }

    else{
        res.status(400).json({"data":null ,"message":"fail to add favorite"})
    }
}