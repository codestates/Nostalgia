"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("brands", [
        {
          brand_name: "Jo malone",
          country: "UK",
          country_img:'2',
          logo_img:'1',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand_name: "Chanel",
          country: "France",
          country_img:'2',
          logo_img:'2',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand_name: "Calvin Klein",
          country: "US",
          country_img:'3',
          logo_img:'3',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
    
    await queryInterface.bulkInsert("note_infos", [
      {
        note_name:'cotton',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'ravender',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'wood',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'vanila',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'citrus',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);

    await queryInterface.bulkInsert("perfume_infos", [
      {
        perfume_name:"Wood Sage & Sea Salt",
        comment: "test1",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 1,
        top_note_id: 1,
        middle_note_id: 2,
        base_note_id: 3
      },
      {
        perfume_name:"NO.5",
        comment: "test2",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 2,
        top_note_id: 2,
        middle_note_id: 3,
        base_note_id: 4
      },
      {
        perfume_name:"One",
        comment: "test3",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 3,
        top_note_id: 3,
        middle_note_id: 4,
        base_note_id: 5
      },
    ]);

    await queryInterface.bulkInsert("users",[
      {
        user_name: "test1",
        email: "email1",
        password:"password1",
        profile_img:"2",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_name: "test2",
        email: "email2",
        password:"password2",
        profile_img:"1",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_name: "test3",
        email: "email3",
        password:"password3",
        profile_img:"3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
  );
  
  await queryInterface.bulkInsert("review_likes", [
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
    },
  ]);

  await queryInterface.bulkInsert("reviews", [
    {
      comment: 'test1',
      rating: 5,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      perfume_id: 1
    },
    {
      comment: 'test2',
      rating: 6,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 2,
      perfume_id: 1
    },
    {
      comment: 'test3',
      rating: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 3,
      perfume_id: 1
    },
    {
      comment: 'test4',
      rating: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      perfume_id: 2
    },
    {
      comment: 'test5',
      rating: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      perfume_id: 3
    },
  ]);

  await queryInterface.bulkInsert("recent_searches", [
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      search_word: "One"
    },
  ]);

  await queryInterface.bulkInsert("favorites", [
    {
      perfume_name: 'test1',
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
    },
  ]);

  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("brands", null, {});
    await queryInterface.bulkDelete("perfume_infos", null, {});
    await queryInterface.bulkDelete("reviews", null, {});
    await queryInterface.bulkDelete("reviews_likes", null, {});
    await queryInterface.bulkDelete("note_infos", null, {});
    await queryInterface.bulkDelete("recent_searches", null, {});
    await queryInterface.bulkDelete("favorites", null, {});
    await queryInterface.bulkDelete("users", null, {});
  },
};