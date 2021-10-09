const express = require("express");

const users = require("../routes/users");
const auth = require("../routes/auth");
const menuItems = require("../routes/menuItems");
const orders = require("../routes/orders");

const error = require("../middlewares/error");

module.exports = function (app) {
  app.use(express.json());

  app.use("/asdf", (req, res) => {
    res.send("Hello world");
  });

  app.use("/api/v1/users", users);
  app.use("/api/v1/auth", auth);
  app.use("/api/v1/menuItems", menuItems);
  app.use("/api/v1/orders", orders);

  app.use(error);
};
