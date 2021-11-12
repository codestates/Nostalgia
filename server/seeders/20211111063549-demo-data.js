"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("users",[
        {
          user_name: "test1",
          email: "test1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
      { returning: ["id"] }
    );
    
    await queryInterface.bulkInsert("review_likes", [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 2,
      },
    ]);

    await queryInterface.bulkInsert("reviews", [
      {
        comment: 'test1',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 2,
      },
    ]);

    await queryInterface.bulkInsert("recent_searches", [
      {
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 2,
      },
    ]);

    await queryInterface.bulkInsert("favorites", [
      {
        perfume_name: 'test1',
        createdAt: new Date(),
        updatedAt: new Date(),
        user_id: 2,
      },
    ]);
  },

  down: async (queryInterface, Sequelize) => {

    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};
