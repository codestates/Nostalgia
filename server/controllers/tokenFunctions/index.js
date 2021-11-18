require('dotenv').config();
const { sign, verify } = require('jsonwebtoken');


module.exports = {
  generateAccessToken: (data) => {
    return sign(data, process.env.ACCESS_SECRET, { expiresIn: "3600s" });
  },
  generateRefreshToken: (data) => {
    return sign(data, process.env.REFRESH_SECRET, { expiresIn: "30d" });
  },

  isAuthorized: (req) => {
      const authorization = req.headers['cookie'];
      //console.log(req.headers)

      if (!authorization) {
        return null;
      }
      const token = authorization.split('=')[1];
      //console.log(':::::::::::::::::::::::::',token)
      
      try {
        return verify(token, process.env.ACCESS_SECRET);
      } catch (err) {
        return null;
      }
  },
  checkRefeshToken: (refreshToken) => {
    try {
      return verify(refreshToken, process.env.REFRESH_SECRET);
    } catch (err) {
      // return null if refresh token is not valid
      return null;
    }
  },
};
