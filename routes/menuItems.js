const {MenuItem, validateMenuItem} = require("../models/menuItem");
const express = require("express");
const auth = require("../middlewares/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const menuItems = await MenuItem.find();
  return res.send(menuItems);
});

module.exports = router;
