//avg_rating 따로 계산해서 응답에 같이 주기
const {favorite}=require('../../models')
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../../models')
const { isAuthorized } = require('../tokenFunctions');

module.exports= async(req,res)=>{
    const accessTokenData = isAuthorized(req);
    const { id } = accessTokenData;

    const data= await favorite.findAll({
        attributes:['perfume_name','brand_name','createdAt','perfume_img'],
        where:{user_id:id}
    })

    for(let i=0;i<data.length;i++){
        const query = `SELECT ROUND(AVG(reviews.rating)) AS avg_rating FROM reviews INNER JOIN perfume_infos 
                    ON reviews.perfume_id = perfume_infos.id 
                    WHERE perfume_infos.perfume_name= '${data[i].dataValues.perfume_name}'
                    GROUP BY (perfume_infos.perfume_name)`;
        
        const avg_rating_data = await sequelize.query(query,{type: QueryTypes.SELECT});
        if(avg_rating_data.length===0){
            data[i].dataValues.avg_rating = '0';
        }
        else{
        data[i].dataValues.avg_rating = avg_rating_data[0].avg_rating;
        }
    }

    if(!data) {
        res.status(400).json({"data":null , "message": "fail to get favorite list"});
    }
    else{
    res.status(200).json({"data":data, "message":"get favorite list successfully"});
    }
}

// select ROUND(AVG(reviews.rating)) AS avg from reviews INNER JOIN perfume_infos 
// ON reviews.perfume_id = perfume_infos.id 
// where perfume_infos.perfume_name= 'CHANEL CHANCE' 
// GROUP BY (perfume_infos.perfume_name);

