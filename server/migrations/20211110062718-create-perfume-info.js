'use strict';
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable('perfume_info', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      perfume_name: {
        type: Sequelize.STRING
      },
      perfume_img: {
        type: Sequelize.BLOB
      },
      comment: {
        type: Sequelize.STRING
      },
      top_note_id: {
        type: Sequelize.INTEGER
      },
      middle_note_id: {
        type: Sequelize.INTEGER
      },
      base_note_id: {
        type: Sequelize.INTEGER
      },
      brand_id: {
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable('perfume_infos');
  }
};