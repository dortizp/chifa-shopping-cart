const express = require("express");

const models = require("./models");

const server = express();

server.use(express.json());

server.listen(3001, () => {
  console.log("This is the app");
});

server.get("/products", async (req, res) => {
  const products = await models.Product.findAll().catch((e) => {
    console.log("Error: ", e.message);
  });
  res.json({ products });
});
