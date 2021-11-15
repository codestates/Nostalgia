const { user }=require('../../models');
const { isAuthorized } = require('../tokenFunctions');

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
            profile_img: req.file.path },
          {
              where: {
              profile_img: data.dataValues.profile_img,
              email: data.dataValues.email
            }
          });
        res.status(200).send(util.success(200, 'true', images));
      }
}