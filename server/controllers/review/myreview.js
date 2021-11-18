const {review,perfume_info} = require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports= async(req,res)=>{
    const accessTokenData = isAuthorized(req);
    const { id } = accessTokenData;

    const data = await review.findAll({
        attributes:['comment','createdAt'],
        include:[{model:perfume_info, require:true, attributes:['perfume_name']}],
        where:{'user_id':id}
    })

    if(!data){
        res.status(400).json({'data':null, 'message':'fail to get my review list' });
    }
    else{
        res.status(200).json({'data':data, 'message':'get my review list success' });
    }
}