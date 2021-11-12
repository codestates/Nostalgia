'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class note_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      note_info.hasMany(models.perfume_info,{foreignKey:'top_note_id', sourceKey:'id'});
      note_info.hasMany(models.perfume_info,{foreignKey:'middle_note_id', sourceKey:'id'});
      note_info.hasMany(models.perfume_info,{foreignKey:'base_note_id', sourceKey:'id'});
    }
  };
  note_info.init({
    note_name: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'note_info',
  });
  return note_info;
};