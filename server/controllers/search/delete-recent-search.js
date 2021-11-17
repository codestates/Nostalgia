const {recent_search} = require('../../models');

module.exports= async(req,res)=>{
    const data = await recent_search.destroy({
        where:{'user_id':req.body.user_id,'search_word':req.body.search_word}
    })

    if(!data){
        res.status(400).json({'data':null, 'message':'fail to delete recent search word' });
    }
    else{
        res.status(200).json({'data':data, 'message':'delete recent search word successfully' });
    }
}

