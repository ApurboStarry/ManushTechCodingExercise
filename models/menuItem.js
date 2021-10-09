const Joi = require("joi");
const mongoose = require("mongoose");

const menuItemSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    min: 3,
    max: 255
  },
  description: {
    type: String,
    required: true,
    min: 5,
    max: 500
  },
  price: {
    type: Number,
    required: true,
    min: 1,
    max: 10000
  },
  restaurantName: {
    type: String,
    required: true,
    min: 3,
    max: 255
  }
});

const MenuItem = mongoose.model("MenuItem", menuItemSchema);

function validateMenuItem(menuItem) {
  const schema = Joi.object({
    title: Joi.string().min(3).max(255).required(),
    description: Joi.string().min(5).max(500).required(),
    price: Joi.number().min(1).max(10000).required(),
    restaurantName: Joi.string().min(3).max(255).required(),
  });

  return schema.validate(menuItem);
}

exports.MenuItem = MenuItem;
exports.validateMenuItem = validateMenuItem;