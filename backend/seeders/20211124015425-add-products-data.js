"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    queryInterface.bulkInsert(
      "Products",
      [
        {
          name: "Arroz Chaufa con Pollo",
          image:
            "https://cdn-images-chwk-prod.s3.amazonaws.com/media/catalog/product/a/r/arroz-chaufa-indiv.jpg",
          price: 12.9,
        },
        {
          name: "Arroz Chaufa de Langostinos individual",
          image:
            "https://cdn-images-chwk-prod.s3.amazonaws.com/media/catalog/product/c/h/chaufa_langostino_individual-china-wok.jpg",
          price: 12.9,
        },
        {
          name: "Tallarín Criollo Individual",
          image:
            "https://cdn-images-chwk-prod.s3.amazonaws.com/media/catalog/product/t/a/tallarin-criollo-indiv.jpg",
          price: 14.9,
        },
        {
          name: "Arroz Chaufa Cecina Individual",
          image:
            "https://cdn-images-chwk-prod.s3.amazonaws.com/media/catalog/product/a/r/arroz-chaufa-de-cecina-indiv.jpg",
          price: 14.9,
        },
        {
          name: "Tallarín Taypa Individual",
          image:
            "https://cdn-images-chwk-prod.s3.amazonaws.com/media/catalog/product/t/a/tallarin-taypa-indiv.jpg",
          price: 15.9,
        },
        {
          name: "Tallarín Saltado Individual",
          image:
            "https://cdn-images-chwk-prod.s3.amazonaws.com/media/catalog/product/t/a/tallarin-saltado-indiv.jpg",
          price: 15.9,
        },
      ],
      {}
    );
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Products", null, {});
  },
};
