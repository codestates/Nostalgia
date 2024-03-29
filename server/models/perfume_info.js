'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class perfume_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      perfume_info.belongsTo(models.brand,{foreignKey:'brand_id', targetKey:'id'});
      perfume_info.belongsTo(models.note_info,{foreignKey:'top_note_id', targetKey:'id',as:'top'});
      perfume_info.belongsTo(models.note_info,{foreignKey:'middle_note_id', targetKey:'id',as:'middle'});
      perfume_info.belongsTo(models.note_info,{foreignKey:'base_note_id', targetKey:'id',as:'base'});
      perfume_info.hasMany(models.review,{foreignKey:'perfume_id', sourceKey:'id'});
    }
  };
  
  perfume_info.init({
    perfume_name: DataTypes.STRING,
    perfume_img: DataTypes.STRING,
    comment: DataTypes.STRING,
    top_note_id: DataTypes.INTEGER,
    middle_note_id: DataTypes.INTEGER,
    base_note_id: DataTypes.INTEGER,
    brand_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'perfume_info',
  });
  return perfume_info;
};



/*reviews.belongsTo(models.users, {
  foreignKey: 'users_id',
  targetKey: 'id',
  as: 'useremail', //as로 정의된 이름이 target모델(여기선 users 모델)의 이름으로 사용된다. 
  onUpdate: 'cascade',
  onDelete: 'set null',
});*/