//avg_rating 따로 계산해서 응답에 같이 주기
const {favorite}=require('../../models')
const { QueryTypes } = require('sequelize');
const { sequelize } = require('../../models')

module.exports= async(req,res)=>{

    const data= await favorite.findAll({
<<<<<<< HEAD
        attributes:['perfume_name','brand_name','createdAt','perfume_img'],
=======

        attributes:['perfume_name','brand_name','createdAt','perfume_img'],

>>>>>>> c6f153a21d5556bf2746482fe53e9b9ca20f4924
        where:{user_id:req.body.user_id}
    })
 

    for(let i=0;i<data.length;i++){
        const query = `SELECT ROUND(AVG(reviews.rating)) AS avg_rating FROM reviews INNER JOIN perfume_infos 
                    ON reviews.perfume_id = perfume_infos.id 
                    WHERE perfume_infos.perfume_name= '${data[i].dataValues.perfume_name}'
                    GROUP BY (perfume_infos.perfume_name)`;

        const avg_rating_data = await sequelize.query(query,{type: QueryTypes.SELECT});
        data[i].dataValues.avg_rating=avg_rating_data[0].avg_rating;
    }

    if(!data) {
        res.status(400).json({"data":null , "message": "fail to get favorite list"});
    }
    else{
    res.status(200).json({"data":data, "message":"get favorite list successfully"});
    }
<<<<<<< HEAD
}
=======
    
}



>>>>>>> c6f153a21d5556bf2746482fe53e9b9ca20f4924
