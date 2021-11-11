const {user}=require('../../models')
module.exports = async(req,res)=>{
    const data = await user.findOne({
        where: {user_name : req.body.user_name}
    });

    if(!data) res.status(200).json({message:'사용가능한 이름'});
    
    res.status(400).json({message:"중복된 이름 존재"});
}