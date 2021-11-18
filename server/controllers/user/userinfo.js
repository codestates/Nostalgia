const { user } = require('../../models');
const { isAuthorized } = require('../tokenFunctions');
const fs = require('fs');

module.exports = {
  userimage: async(req, res) => {
    const accessTokenData = isAuthorized(req);
    console.log(accessTokenData)
    if(!accessTokenData){
      return res.status(401).json({ message: 'fail to get user info' });
    }
    const { email, profile_img } = accessTokenData;
    console.log(profile_img)
    const data = await user.findOne({ where: { email } })
      if (!data || profile_img === null){
        return res.status(401).json({ message: 'fail to get user info' })
      }
      delete data.dataValues.password;
      if(profile_img !== null){
        fs.readFile(data.dataValues.profile_img, function (err, file) {
          res.writeHead(200, {'Content-type': 'image/png'});
          res.write(file);
          res.end();
        })
      }

  },
  userdata: async(req, res) => {
    const accessTokenData = isAuthorized(req);
    console.log(accessTokenData)

    if(!accessTokenData){
      return res.status(401).json({ message: 'fail to get user info' });
    }
    const { email } = accessTokenData;

    const data = await user.findOne({ where: { email } })
      if (!data){
        return res.status(401).json({ message: 'fail to get user info' })
      }
      delete data.dataValues.password;
      res.json({ data: data.dataValues, message: 'get user info successfully' });
  }
};

