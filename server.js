const express = require("express");

const server = express();

server.listen(3001, () => {
  console.log("This is the app");
});

server.get("/", (req, res) => {
  res.send("hello world");
});
