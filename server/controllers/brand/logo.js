const {brand}=require('../../models');

module.exports = async(req,res)=>{
    const data = await brand.findAll({
        attributes:['logo_img']
    });
   
    if(!data) {
        res.status(400).json({"data":null , "message": "fail to get all brand logos"});
    }
    else{
    res.status(200).json({"data":data , "message":"get all brand logos"});
    }
};