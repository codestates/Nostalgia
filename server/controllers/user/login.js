const { user } = require('../../models');
const { generateAccessToken, generateRefreshToken } = require('../tokenFunctions');

module.exports = async (req,res)=>{
    const { email, password } = req.body;
    const data = await user.findOne({
        where: {
            email,
            password
        }
    });

    if(!data) { return res.status(401).json({ message: 'login fail' }) };
    
    const accessToken = generateAccessToken(data.dataValues);
    const refreshToken = generateRefreshToken(data.dataValues);
    res.cookie("jwt", refreshToken , { 
        data: { accessToken },
        httpOnly: true,
      });
      res.json({ message: 'login suceessfully'})
}