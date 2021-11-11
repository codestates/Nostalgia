'use strict';
const {
  Model, STRING
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class favorite extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here

    }
  };
  favorite.init({
    user_id: DataTypes.INTEGER,
    perfume_name: DataTypes.STIRNG,
    perfume_img: DataTypes.BLOB,
    brand_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'favorite',
  });
  return favorite;
};