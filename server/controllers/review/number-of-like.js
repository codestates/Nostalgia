const {review_like} = require('../../models');
const Sequelize = require('sequelize'); 

module.exports= async(req,res)=>{
    const data = await review_like.findOne({
        where:{'review_id': req.body.review_id},
        attributes:[ [Sequelize.fn('COUNT', Sequelize.col('review_id')) , 'number_review_likes' ] ],
        //group:['review_id']
    })

    if(!data){
        res.status(400).json({'data':null, 'message':'Wrong perfume id' });
    }
    else{
        res.status(200).json({'data':data, 'message':'get review success' });
    }
}