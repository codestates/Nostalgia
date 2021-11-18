//avg_rating 따로 계산해서 응답에 같이 주기
const { perfume_info,brand,review} = require('../../models');
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../../models')

module.exports = async(req,res)=>{
    
    const data = await perfume_info.findAll({ 
        attributes:['id','perfume_name','comment','perfume_img'],
        include:[
            {model:brand, required: true, attributes:['brand_name']},
        ],
    })
    
    for(let i=0;i<data.length;i++){
        const query = `SELECT ROUND(AVG(reviews.rating)) AS avg_rating FROM reviews INNER JOIN perfume_infos 
                    ON reviews.perfume_id = perfume_infos.id 
                    WHERE perfume_infos.perfume_name= '${data[i].dataValues.perfume_name}'
                    GROUP BY (perfume_infos.perfume_name)`;
        
        const avg_rating_data = await sequelize.query(query,{type: QueryTypes.SELECT});
        if(avg_rating_data.length===0){
            data[i].dataValues.avg_rating = 0;
        }
        else{
        data[i].dataValues.avg_rating = Number(avg_rating_data[0].avg_rating);
        }
    }

    for(let i=0;i<data.length;i++){
        const query = `SELECT COUNT(reviews.perfume_id) AS number_reviews  FROM reviews  WHERE reviews.perfume_id = '${data[i].dataValues.id}'`;
        
        const number_review_data = await sequelize.query(query,{type: QueryTypes.SELECT});
        if(number_review_data.length===0){
            data[i].dataValues.number_review = 0;
        }
        else{
        data[i].dataValues.number_review = number_review_data[0].number_reviews;
        }
    }
   
    if(!data) {
        res.status(400).json({"data":null , "message": "fail to get all perfumes infos"});
    }
    else{
    res.status(200).json({"data":data , "message":"get all perfume infos successfully"});
    }
};

