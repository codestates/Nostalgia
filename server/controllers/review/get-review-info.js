const { user,review} = require('../../models')

module.exports= async(req,res)=>{
    const data=await review.findAll({
        where:{perfume_id:req.body.perfume_id},
        attributes:['comment' , 'rating', 'createdAt'],
        include:{
            model:user,
            attributes:['user_name','email','profile_img']
        },
    })
    
    if(!data){
        res.status(400).json({'data':null, 'message':'Wrong perfume id' });
    }
    else{
        res.status(200).json({'data':data, 'message':'get review success' });
    }
    


    
}