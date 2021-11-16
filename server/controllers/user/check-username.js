const { user }=require('../../models')

module.exports = async(req, res)=>{
    const data = await user.findOne({
      where: { user_name : req.body.user_name }
    });
    
    if(!data) {
      return res.status(200).json({'data': true });
    } else {
      res.status(409).json({ 'data': false} );  
    }
    
    

}