const { user }=require('../../models');
const { isAuthorized } = require('../tokenFunctions');
const fs = require('fs');

module.exports = {
    uploadProfile: async (req, res) => {
        const accessTokenData = isAuthorized(req);
        const util = {
            success: (status, message, data) => {
                return { 
                    status: status,
                    success: true,
                    message: message,
                    data: data
                }
            },
            fail: (status, message) => {
                return {
                    status: status,
                    success: false,
                    message: message
                }
            }
        }
      if(!accessTokenData){
      return res.status(401).json({ message: 'fail to get user info' });
    }
    
      const { email } = accessTokenData;
      const data = await user.findOne({ where: { email } })
      if (!data){
        return res.status(401).json({ message: 'fail to get user info' })
      }
        const images = req.file.path;
        if (images === undefined){
            return res.status(400).send(utill.fail(400, 'fail'));
        };
        await user.update({
            profile_img: images },
          {
              where: {
              profile_img: data.dataValues.profile_img,
              email: data.dataValues.email
            }
          });
          // fs.readFile(images, function(err, data){
          //   res.writeHead(200, {'Content-Type': 'image/png'});
          //   res.write(data);
          //   res.end();
          // })
      }
}