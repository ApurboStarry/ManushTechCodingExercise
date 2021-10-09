const Joi = require("joi");
const mongoose = require("mongoose");

const menuItemInOrderSchema = new mongoose.Schema({
  menuItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuItem"
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    max: 500
  },
  unitPrice: {
    type: Number,
    required: true,
    min: 1,
    max: 10000
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 1,
    max: 5000000
  }
});

const MenuItemInOrder = mongoose.model("MenuItemInOrder", menuItemInOrderSchema);

function validateMenuItemInOrder(menuItem) {
  const schema = Joi.object({
    menuItemId: Joi.string().required(),
    quantity: Joi.number().min(1).max(500).required(),
    unitPrice: Joi.number().min(1).max(10000).required(),
  });

  return schema.validate(menuItem);
}

module.exports.MenuItemInOrder = MenuItemInOrder;
module.exports.validateMenuItemInOrder = validateMenuItemInOrder;