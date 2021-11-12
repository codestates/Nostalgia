const { user } = require('../../models');
const { generateAccessToken } = require('../tokenFunctions');

module.exports = async (req, res) => {
  const { email, password, user_name } = req.body; 
  if(email === '' || password === '' || user_name === ''){
    return res.status(422).send('insufficient parameters supplied')
  }

  const data = await user.findOne({
    where: {
      email
    },
  })
    if(!data){
      const el = await user.create({ email, password, user_name })
        const accessToken = generateAccessToken(el.dataValues);
      
        res.cookie("jwt",accessToken , { 
          httpOnly: true
        });
        res.status(201).json( { message: 'Sign up successfully' } )
    }

    if(data) { return res.status(409).send('email exists'); }
    
}