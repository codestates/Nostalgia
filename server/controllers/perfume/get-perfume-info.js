//avg_rating 따로 계산해서 응답에 같이 주기
const { perfume_info,brand, review,note_info } = require('../../models');
const Sequelize = require('sequelize');

module.exports = async(req,res)=>{
    const data = await perfume_info.findOne({
        where:{id : req.body.perfume_id}, 
        attributes:['id','perfume_name','comment','perfume_img'],
        include:[
            {model:note_info, as:'top', required: true, attributes:[ ['note_name','top_note_name'] ]},
            {model:note_info, as:'middle', required: true, attributes:[ ['note_name','middle_note_name'] ]},
            {model:note_info, as:'base', required: true, attributes:[ ['note_name','base_note_name'] ]},
            {model:brand, required: true, attributes:['brand_name', 'country']}
        ]
    })

    const  avg_rating = await review.findOne({
        where:{perfume_id:req.body.perfume_id},
        attributes:  [ 'perfume_id' ,[Sequelize.fn('ROUND', Sequelize.fn('AVG', Sequelize.col('rating'))) , 'avg_rating' ] ],
    })

    if(!data){
        res.status(400).json({"data":null, "message": "Wrong perfume name" });
    }
    else{
        res.status(200).json({"data":data, "avg_rating": avg_rating, "message": "get perfume info successfully"}); 
    }
};
/*
SELECT perfume_infos.id,perfume_infos.perfume_name,avg(rating) as avg_rating , top.note_name AS top_note_name , middle.note_name AS middle_note_name,base.note_name AS base_note_name , brands.brand_name,brands.country,brands.country_img
FROM perfume_infos 
INNER JOIN brands ON perfume_infos.brand_id = brands.id
INNER JOIN note_infos AS top ON perfume_infos.top_note_id = top.id 
INNER JOIN note_infos AS middle ON perfume_infos.middle_note_id = middle.id 
INNER JOIN note_infos AS base ON perfume_infos.base_note_id = base.id
INNER JOIN reviews ON perfume_infos.id = reviews.perfume_id 
GROUP BY perfume_infos.id;
 */

