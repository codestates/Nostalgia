//avg_rating 따로 계산해서 응답에 같이 주기
const { perfume_info,brand,note_info,review} = require('../../models');
const Sequelize = require('sequelize');

module.exports = async(req,res)=>{
    
    const data = await perfume_info.findAll({ 
        attributes:['id','perfume_name','perfume_img','comment'],
        include:[
            {model:note_info, as:'top', required: true, attributes:[ ['note_name','top_note_name'] ]},
            {model:note_info, as:'middle', required: true, attributes:[ ['note_name','middle_note_name'] ]},
            {model:note_info, as:'base', required: true, attributes:[ ['note_name','base_note_name'] ]},
            {model:brand, required: true, attributes:['brand_name', 'country', 'country_img', 'logo_img']},
            //{
            //    model:review, required: true, 
            //    attributes: [ [Sequelize.fn('avg', Sequelize.col('rating')),'avg_rating']],
            //}
        ],
        //group: ['perfume_infos.id']
    })

    //select perfume_id,perfume_name,avg(rating) as avg_rating from reviews group by perfume_id;

    // select perfume_infos.id, perfume_infos.perfume_name ,avg(rating) as avg_rating from perfume_infos 
    // INNER JOIN reviews ON perfume_infos.id = reviews.perfume_id group by perfume_infos.id;


    const avg_rating = await review.findAll({
        attributes: [ 'perfume_id',[Sequelize.fn('avg', Sequelize.col('rating')),'avg_rating']],
        group: ['perfume_id']
    })

    
    console.log(avg_rating);

   
    if(!data) {
        res.status(400).json({"data":null , "message": "fail to get all perfumes infos"});
    }
    else{
    res.status(200).json({"data":data,"avg_rating":avg_rating , "message":"get all perfume infos successfully"});
    }
};
