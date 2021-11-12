'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class user extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      user.hasMany(models.favorite,{ foreignKey:'user_id', sourceKey: 'id'})
      user.hasMany(models.recent_search,{ foreignKey:'user_id', sourceKey: 'id'})
      user.hasMany(models.review_like,{ foreignKey:'user_id', sourceKey: 'id'})
      user.hasMany(models.review,{ foreignKey:'user_id', sourceKey: 'id'})
    }
  };
  user.init({
    user_name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING,
    profile_img: DataTypes.BLOB,
  }, {
    sequelize,
    modelName: 'user',
  });
  return user;
};