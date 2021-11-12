'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class review extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      review.hasMany(models.review_like,{foreignKey:'review_id', sourceKey:'id'});
      review.belongsTo(models.user, {foreignKey:'user_id', targetKey:'id',onDelete: 'CASCADE'})
      review.belongsTo(models.perfume_info, {foreignKey:'perfume_id', targetKey:'id'})
    }
  };
  review.init({
    user_id: DataTypes.INTEGER,
    perfume_id: DataTypes.INTEGER,
    comment: DataTypes.STRING,
    rating: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'review',
  });
  return review;
};

