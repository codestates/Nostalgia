const { user }=require('../../models')

module.exports = async(req, res)=>{
    const data = await user.findOne({
      where: { user_name : req.body.user_name }
    });
    
    if(!data) {
      return res.status(200).json({'data':1, 'message':'possible to use this username' });
    }
    
    res.status(400).json({ 'data':0, 'message':'this user name already exist'} );

}