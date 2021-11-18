const { user }=require('../../models');
const { isAuthorized } = require('../tokenFunctions');

module.exports = async (req, res) => {
    const accessTokenData = isAuthorized(req);
    if(!accessTokenData){
      return res.status(401).json({ message: 'fail to get user info' });
    }
    const { email } = accessTokenData;
    const data = await user.findOne({ where: { email } })
    

      if (!data){
        return res.status(401).json({ message: 'invalid user' })
      }
        await user.update({
            password: req.body.password
        }, {
            where: {
                email: data.dataValues.email,
                password: data.dataValues.password
            }} )
        return res.json({ message: "change password successfully" });
  };