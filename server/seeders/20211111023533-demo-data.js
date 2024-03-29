"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert("brands", [
        {
          brand_name: "Jo malone",
          country: "UK",
          logo_img:'/brand_logo/jo-malone-logo.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand_name: "CHANEL",
          country: "FRANCE",
          logo_img:'/brand_logo/chanel-logo.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand_name: "Calvin Klein",
          country: "US",
          logo_img:'/brand_logo/ck-logo.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand_name: "DAVIDOFF",
          country: "SWISS",
          logo_img:'/brand_logo/davidoff-logo-vector.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand_name: "VERSACE",
          country: "ITALIA",
          logo_img:'/brand_logo/versace-logo.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
        {
          brand_name: "GUERLAIN",
          country: "FRANCE",
          logo_img:'/brand_logo/guerlain-logo-vector.jpeg',
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      ],
    );
    
    await queryInterface.bulkInsert("note_infos", [
      {
        note_name:'Cotton',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Ravender',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Wood',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Vanila',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Citrus',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Jasmin',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Amber',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Sea Salt',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Sage',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Rose',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Lime',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Water Lily',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Pineapple',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Musk',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Tonka Bean',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Black Berry',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'bay leaf',
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        note_name:'Vetiver',
        createdAt: new Date(),
        updatedAt: new Date(),
      },

      
    ]);

    await queryInterface.bulkInsert("perfume_infos", [
      {
        perfume_name:"CHANEL CHANCE",
        comment: "대조적인 플로럴 향. 핑크 페퍼, 자스민, 앰버 패츌리가 조화롭게 어우러져 관능적이고 스파이시한 어코드를 담은 플로럴 계열의 향. 열정을 채색하고 낙관의 향으로 안내해주는 향수.",
        perfume_img:"/perfume_img/CHANEL CHANCE.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 2,
        top_note_id: 5,
        middle_note_id: 6,
        base_note_id: 7
      },
      {
        perfume_name:"CHANEL COCO NOIR",
        comment: "강렬한 개성과 신비한 우아함을 동시에 지닌 이 컬러는 뜻밖의 모습을 이끌어 냅니다. 깊고 블랙으로부터 향기로운 황홀함이 느껴집니다.빛을 발하는 오리엔탈향, 활기차고 세련미가 느껴지는 탑노트, 매혹적인 관능미가 느껴지는 은은한 미들노트. 매력적이고 감싸안는 듯한 잔향.",
        perfume_img:"/perfume_img/CHANEL COCO NOIR.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 2,
        top_note_id: 2,
        middle_note_id: 7,
        base_note_id: 1
      },
      {
        perfume_name:"CHANEL No.5 EAU PREMIERE",
        comment: "부드럽고 조화로운 향을 지닌 오 프르미에르는 전설적인 향수인 N°5의 부드럽고 섬세한 면을 잘 보여줍니다. 미니멀한 디자인의 아이코닉한 N°5 보틀을 만나보세요.",
        perfume_img:"/perfume_img/CHANEL No5 EAU PREMIERE.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 2,
        top_note_id: 4,
        middle_note_id: 8,
        base_note_id: 9
      },
      {
        perfume_name:"CHANEL No.5 EAU DE PARFUM",
        comment: "클래식한 플로럴 계열 향수로 장미와 재스민을 중심으로 포근한 바닐라가 독특하고 감각적인 향을 제공합니다.",
        perfume_img:"/perfume_img/CHANEL No5.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 2,
        top_note_id: 10,
        middle_note_id: 6,
        base_note_id: 4
      },
      {
        perfume_name:"CK one elecrtric",
        comment: "Ck One Electric by Calvin Klein은 여성과 남성을 위한 시트러스 아로마틱 향수입니다.",
        perfume_img:"/perfume_img/CK one elecrtric.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 3,
        top_note_id: 10,
        middle_note_id: 11,
        base_note_id: 7
      },
      {
        perfume_name:"CK one summer",
        comment: "여전히 뜨거울 여름을 위한 최적의 향수 새로운 유니섹스 텐저린 아로마 향기.",
        perfume_img:"/perfume_img/CK one summer.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 3,
        top_note_id: 9,
        middle_note_id: 10,
        base_note_id: 7
      },
      {
        perfume_name:"CK one",
        comment: "CK one 향수는 편안한 향, 발랄함과 센슈얼리티의 완벽한 균형으로 이루어진 플루트 플로랄 계열의 남녀 공용 향수입니다.",
        perfume_img:"/perfume_img/CK one.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 3,
        top_note_id: 12,
        middle_note_id: 8,
        base_note_id: 7
      },
      {
        perfume_name:"DAVIDOFF Cool Water for WOMAN",
        comment: "풀입 끝에 맺힌 새벽 이슬의 신선함, 파도 끝 포말의 생동감, 하얀 물보라의 소용돌이로 상징되는, 따분한 일상에서 벗어나 새로운 활력을 주는 향수입니다.",
        perfume_img:"/perfume_img/DAVIDOFF Cool Water for WOMAN.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 4,
        top_note_id: 5,
        middle_note_id: 10,
        base_note_id: 13
      },
      {
        perfume_name:"DAVIDOFF Cool Water",
        comment: "20여년 넘게 사랑받아 온 남자 향수, DAVIDOFF Cool Water 향수입니다.",
        perfume_img:"/perfume_img/DAVIDOFF Cool Water.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 4,
        top_note_id: 2,
        middle_note_id: 9,
        base_note_id: 14
      },
      {
        perfume_name:"GUERLAIN SHALIMAR ",
        comment: "1925년에 자끄 겔랑으로부터 탄생한 향수, 살리마 오 드 퍼퓸. 최초의 오리엔탈 계열의 향수이자 최초의 사파이어 블루의 스토퍼를 사용한 매우 관능적이고 여성스러운 향수입니다.",
        perfume_img:"/perfume_img/GUERLAIN SHALIMAR .jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 6,
        top_note_id: 5,
        middle_note_id: 4,
        base_note_id: 15
      },
      {
        perfume_name:"JO MALONE London BLACKBERRY & BAY",
        comment: "순수의 향. 블랙베리를 따던 어린 시절의 추억. 블랙베리로 물든 입술과 손이 떠오르는 제품.이제 막 수확한 월계수 잎과 브램블리 우드의 신선함에 진하고 톡 쏘는 느낌의 블랙베리 과즙을 가미하였습니다. 생기 넘치고 활발한 느낌의 향수입니다.",
        perfume_img:"/perfume_img/JO MALONE London BLACKBERRY & BAY.png",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 1,
        top_note_id: 16,
        middle_note_id: 17,
        base_note_id: 18
      },
      {
        perfume_name:"VERSACE BRIGHT CRYSTAL",
        comment: "부드러운 핑크가 전해주는 화사함, 장인이 정성스럽게 세공한 듯한 다이아몬드 같은 바틀, 향기로 나의 하루가 설레어지는 기쁜 느낌, 나의 향기가 상대방의 기분읗 좋아지게 하는 힘 모두를 갖추고 이제 매력적인 모습을 드러낸다.",
        perfume_img:"/perfume_img/VERSACE BRIGHT CRYSTAL.jpeg",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 5,
        top_note_id: 11,
        middle_note_id: 8,
        base_note_id: 14
      },
      {
        perfume_name:"VERSACE EROS",
        comment: "에로스는 강한 남성, 열정적인 남성, 자신의 인생을 스스로 개척하고 지배하는 남성을 위한 향수입니다.",
        perfume_img:"/perfume_img/VERSACE EROS.jpg",
        createdAt: new Date(),
        updatedAt: new Date(),
        brand_id: 5,
        top_note_id: 15,
        middle_note_id: 11,
        base_note_id: 3
      },
    ]);

    await queryInterface.bulkInsert("users",[
      {
        user_name: "SH",
        email: "SH@codestates.com",
        password:"password1!",
        profile_img:"uploads/5df7b4821d0f15cd9daa69ecec3662e3",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_name: "SON",
        email: "SON@codestates.com",
        password:"password2!",
        profile_img:"uploads/9bdf397138fd968d3427fe5745d96648",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_name: "Zeenii",
        email: "Zeenii@codestates.com",
        password:"password3!",
        profile_img:"uploads/0101c9a6ae062869df724a4456812877",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        user_name: "Luka",
        email: "Luka@codestates.com",
        password:"password4!",
        profile_img:"uploads/263ffe7434d605b8999ebbb89a50a748",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]
  );

  await queryInterface.bulkInsert("reviews", [
    {
      comment: '정말 좋아요!',
      rating: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      perfume_id: 1
    },
    {
      comment: '향이 너무 좋아서 놀랐습니다!',
      rating: 7,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 2,
      perfume_id: 1
    },
    {
      comment: '추천하고 싶은 향수!!',
      rating: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 3,
      perfume_id: 1
    },
    {
      comment: '누구에게나 어울릴법한 향이에요~',
      rating: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 4,
      perfume_id: 1
    },
    {
      comment: '정말 좋아요!',
      rating: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      perfume_id: 2
    },
    {
      comment: '추천해요!!',
      rating: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      perfume_id: 3
    },
    {
      comment: '좋아요!',
      rating: 10,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      perfume_id: 4
    },
    {
      comment: '정말 좋아요!',
      rating: 9,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      perfume_id: 11
    },
    {
      comment: '정말 좋아요!',
      rating: 8,
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      perfume_id: 13
    },
  ]);

  await queryInterface.bulkInsert("review_likes", [
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      review_id:2
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      review_id:3
    },
    {
      createdAt: new Date(),
      updatedAt: new Date(),
      user_id: 1,
      review_id:4
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
      user_id:1,
      perfume_img:"/perfume_img/CHANEL CHANCE.jpg",
      brand_name:'CHANEL',
      perfume_name: 'CHANEL CHANCE',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id:1,
      perfume_img:"/perfume_img/CHANEL COCO NOIR.jpg",
      brand_name:'CHANEL',
      perfume_name: 'CHANEL COCO NOIR',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id:1,
      perfume_img:"/perfume_img/JO MALONE London BLACKBERRY & BAY.png",
      brand_name:'Jo malone',
      perfume_name: 'JO MALONE London BLACKBERRY & BAY',
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    {
      user_id:1,
      perfume_img:"/perfume_img/VERSACE EROS.jpg",
      brand_name:'VERSACE',
      perfume_name: 'VERSACE EROS',
      createdAt: new Date(),
      updatedAt: new Date(),
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