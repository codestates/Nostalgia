const { user } = require('../../models');
const { generateAccessToken } = require('../tokenFunctions');

module.exports = {

 login: async (req, res) => {
  const { email, password, user_name } = req.body;
  if(email === '' ||  password === '' ||  user_name === ''){
    return res.status(422).send('insufficient parameters supplied')
  }
  if(email === undefined || password === undefined || user_name === undefined){

    return res.status(422).send('insufficient parameters supplied')
  }

  const data = await user.findOne({
    where: {
      email
    },
  })

    if(data) { return res.status(409).send('email exists'); }
  
    if(!data && req.file !== undefined){
      const el = await user.create({ email, password, user_name, profile_img: req.file.path })
        const accessToken = generateAccessToken(el.dataValues);

        res.cookie("jwt",accessToken , { 
          httpOnly: true
        })

        return res.status(201).json( { message: 'Sign up successfully' } ) 
    }
    const el = await user.create({ email, password, user_name })
        const accessToken = generateAccessToken(el.dataValues);
        res.cookie("jwt",accessToken , { 
          httpOnly: true
        })
        res.status(201).json( { message: 'Sign up successfully' } ) 
},

  Oauthlogin: async (req, res) => {
    console.log(req.body)
    const { email, user_name } = req.body;

    const data = await user.findOne({
      where: {
        email
      },
    });

    if(!data){
      const el = await user.create({ email, user_name })
      const accessToken = generateAccessToken(el.dataValues);
      
      res.cookie("jwt",accessToken , { 
      httpOnly: true
      })
     return res.status(201).json( { message: 'Sign up successfully' } ) 
    }

    const accessToken = generateAccessToken(data.dataValues);
    res.cookie("jwt",accessToken , { 
      httpOnly: true
    })
    res.status(201).json( { message: 'Sign up successfully' } ) 
}

 }
  