"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const brand_id = await queryInterface.bulkInsert("brands", [
        {
          brand_name: "test1",
          country: "test1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand_name: "test2",
          country: "test2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand_name: "test3",
          country: "test3",
          country_img:'',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] }
    );
    await queryInterface.bulkInsert("perfume_infos", [
      {
        comment: "test1",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 1,
      },
      {
        comment: "test2",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 2,
      },
      {
        comment: "test3",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 3,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("brands", null, {});
    await queryInterface.bulkDelete("perfume_infos", null, {});
  },
};