'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await [
      
      queryInterface.addColumn('perfume_infos', 'brand_id', {
        type: Sequelize.INTEGER,
        references: {
          model: 'brands',
          key: 'id'
        } 
      }),
      queryInterface.addColumn('perfume_infos', 'top_note_id', {
        type: Sequelize.INTEGER,
        references: {
          model: 'note_infos',
          key: 'id'
        } 
      }),
      queryInterface.addColumn('perfume_infos', 'middle_note_id', {
        type: Sequelize.INTEGER,
        references: {
          model: 'note_infos',
          key: 'id'
        } 
      }),
      queryInterface.addColumn('perfume_infos', 'base_note_id', {
        type: Sequelize.INTEGER,
        references: {
          model: 'note_infos',
          key: 'id'
        } 
      })    
    ]

  },

  down: async (queryInterface, Sequelize) => {
    await [
      queryInterface.removeColumn('perfume_infos','brand_id'),
      queryInterface.removeColumn('perfume_infos','top_note_id'),
      queryInterface.removeColumn('perfume_infos','middle_note_id'),
      queryInterface.removeColumn('perfume_infos','base_note_id')
    ]
  }

};
