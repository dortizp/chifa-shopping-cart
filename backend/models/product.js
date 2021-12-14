const Product = (sequelize, Sequelize) => {
  const model = sequelize.define(
    "Product",
    {
      id: {
        autoIncrement: true,
        type: Sequelize.INTEGER,
        primaryKey: true,
      },
      name: Sequelize.STRING,
      image: Sequelize.STRING,
      price: Sequelize.DECIMAL(10, 2),
    },
    {
      timestamps: false,
    }
  );
  return model;
};

module.exports = Product;
