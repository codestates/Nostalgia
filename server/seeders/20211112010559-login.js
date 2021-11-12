"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    const postId = await queryInterface.bulkInsert(
      "users",
      [
        {
          user_name:'test1',
          email: "test1",
          password: "test1",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_name:'test1',
          email: "test2",
          password: "test2",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          user_name:'test1',
          email: "test3",
          password: "test3",
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("users", null, {});
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  },
};