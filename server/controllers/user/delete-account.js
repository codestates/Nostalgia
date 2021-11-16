const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions')

module.exports = async (req, res) => {
    const accessTokenData = isAuthorized(req);

  if(!accessTokenData){
    return res.status(401).json({ message: 'Invalid user' });
  }
  const{ email } = accessTokenData;
  const data = await user.findOne({ where: { email } })
 
    const find_password = await user.findOne({ where: { password: req.body.password } })

    if(!data) { return res.status(401).json({ message: "Wrong email" })}
  console.log(find_password)
    if( find_password.password === req.body.password ){
        await user.destroy({ where: { email: data.dataValues.email }})
      return res.json({message: 'delete account seccessfully'})
    }
    res.status(401).json({ message: "Wrong password" })
  };
  

