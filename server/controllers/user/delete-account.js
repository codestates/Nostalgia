const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions')

module.exports = async (req, res) => {
    const accessTokenData = isAuthorized(req);

  if(!accessTokenData){
    return res.status(401).json({ message: 'Invalid user' });
  }
  const { email } = accessTokenData;
 
    const find_email = await user.findOne({ where: { email } })

    if(!find_email) { return res.status(401).json({ message: "Wrong email" })}

    if(email === req.body.email){
        await user.destroy({ where: { email: req.body.email }})
      return res.json({message: 'delete account seccessfully'})
    }
  };
  