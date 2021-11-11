'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class resent_search extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  };
  resent_search.init({
    user_id: DataTypes.INTEGER,
    search_word: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'resent_search',
  });
  return resent_search;
};