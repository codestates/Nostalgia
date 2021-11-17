const {review,user}=require('../../models');

module.exports= async(req,res)=>{
    const data = await review.findAll({
        where:{'perfume_id':req.body.perfume_id}, 
        attributes:['id','perfume_id','comment','rating','createdAt'],
        include:[
            {model:user, required: true, attributes:['user_name', 'profile_img']}
        ]
    })
    if(!data){
        res.status(400).json({"data":null ,"message":"fail to get review"})
    }

    else{
        res.status(200).json({"data":data ,"message": "get review successully"})
    }
}

//perfume_id, user_name, profile_img 'id','perfume_id','comment','rating','createdAt'