'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review_like extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      review_like.belongsTo(models.user, {foreignKey:'user_id', targetKey:'id',onDelete: 'CASCADE'})
      review_like.belongsTo(models.review, {foreignKey:'review_id', targetKey:'id'})
    }
  };
  review_like.init({
    user_id: DataTypes.INTEGER,
    review_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'review_like',
  });
  return review_like;
};