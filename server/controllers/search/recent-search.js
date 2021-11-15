const {recent_search} = require('../../models');


module.exports= async(req,res)=>{
    const data = await recent_search.findAll({
        where:{'user_id':req.body.user_id}
    })

    if(!data){
        res.status(400).json({'data':null, 'message':'fail to get recent search list' });
    }
    else{
        res.status(200).json({'data':data, 'message':'get recent search list success' });
    }
}