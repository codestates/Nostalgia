//avg_rating 따로 계산해서 응답에 같이 주기
const { perfume_info,brand,note_info,review} = require('../../models');
const Sequelize = require('sequelize');

module.exports = async(req,res)=>{
    
    const data = await perfume_info.findAll({ 
        attributes:['id','perfume_name','comment','perfume_img'],
        include:[
            {model:brand, required: true, attributes:['brand_name']},
        ],
    })
    
    const avg_rating = await review.findAll({
        attributes:  [ 'perfume_id' ,[Sequelize.fn('ROUND', Sequelize.fn('AVG', Sequelize.col('rating'))) , 'avg_rating' ] ],
        group: ['perfume_id']
    })

    const number_review = await review.findAll({
        attributes: [ 'perfume_id', [Sequelize.fn('count', Sequelize.col('perfume_id')),'number_reviews']],
        group: ['perfume_id']
    })
    

   
    if(!data) {
        res.status(400).json({"data":null , "message": "fail to get all perfumes infos"});
    }
    else{
    res.status(200).json({"data":data, avg_rating, number_review  , "message":"get all perfume infos successfully"});
    }
};
