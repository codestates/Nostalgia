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
