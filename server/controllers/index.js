module.exports = {
    userinfo: require('./user/userinfo'),
    signup: require('./user/signup'),
    login: require('./user/login'),
    signout: require('./user/signout'),
    changepassword: require('./user/change-password'),
    changeusername: require('./user/change-username'),
    changeimage: require('./user/change-image'),
    checkusername: require('./user/check-username'),
    deleteaccount: require('./user/delete-account'),

    
    addfavorite: require('./favorite/add-favorite'),
    getfavorite: require('./favorite/get-favorite'),

    getperfumeinfo: require('./perfume/get-perfume-info'),
    getperfumeinfoall: require('./perfume/get-perfume-info-all'),

    addreview: require('./review/add-review'),
    getreviewinfo: require('./review/get-review-info'),
    likereview: require('./review/like-review'),
    numberoflike: require('./review/number-of-like'),
    myreview: require('./review/myreview'),

    getrecentsearch: require('./search/recent-search'),
    logo: require('./brand/logo'),
 
  };
  