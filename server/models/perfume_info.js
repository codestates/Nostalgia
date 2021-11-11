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
      this.perfume_info.belongsTo(models.brand,{foreignKey:'brand_id', targetKey:'id'});
    }
  };
  
  perfume_info.init({
    perfume_name: DataTypes.STRING,
    perfume_img: DataTypes.BLOB,
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