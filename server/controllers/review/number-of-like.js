const review_like = require('../../models');

module.exports= async(req,res)=>{
    const data = await review_like.count({where:{'review_id': req.body.review_id}})
    res.send(data);
}