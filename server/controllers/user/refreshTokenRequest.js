const {
    checkRefeshToken,
    generateAccessToken,
    resendAccessToken,
  } = require('../tokenFunctions');
  const { user } = require('../../models');
  
  module.exports = async (req, res) => {
    const refreshToken = req.cookies.refreshToken;
  
    if (!refreshToken) {
      return res.json({ message: 'refresh token not exists' });
    }
  
    const refreshTokenData = checkRefeshToken(refreshToken);
    if (!refreshTokenData) {
      return res.json({
        message: 'invalid refresh token, please log in again',
      });
    }
  
    const { email } = refreshTokenData;
    const data = user.findOne({ where: { email } })
      
        if (!data) {
          return res.json({
            message: 'refresh token has been tempered',
          });
        }
        delete data.dataValues.password;
  
        const newAccessToken = generateAccessToken(data.dataValues);
        res.json({ data: { newAccessToken, email: data.dataValues }, message: "ok" });
  };
  