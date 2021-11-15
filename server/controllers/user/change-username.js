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
        return res.status(401).json({ message: 'Invalid user' })
      }
      const first_username = await user.findOne({ where: { email: req.body.email } })
      if(!first_username){
        await user.update({ email: req.body.email }, { where: { email: data.dataValues.email }} )
        return res.json({ message: "change username successfully" });
      }
      res.status(401).json({ message: ' invaild user '})
  };