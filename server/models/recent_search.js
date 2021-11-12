'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class recent_search extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      recent_search.belongsTo(models.user, {foreignKey:'user_id', targetKey:'id',onDelete: 'CASCADE'})
    }
  };
  recent_search.init({
    user_id: DataTypes.INTEGER,
    search_word: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'recent_search',
  });
  return recent_search;
};