const Joi = require("joi");
const mongoose = require("mongoose");

const menuItemInOrderSchema = new mongoose.Schema({
  menuItemId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "MenuItem",
  },
  quantity: {
    type: Number,
    required: true,
    min: 1,
    max: 500,
  },
  unitPrice: {
    type: Number,
    required: true,
    min: 1,
    max: 10000,
  },
  totalPrice: {
    type: Number,
    required: true,
    min: 1,
    max: 5000000,
  },
});

const orderSchema = new mongoose.Schema({
  menuItemsList: [menuItemInOrderSchema],
  totalQuantity: {
    type: Number,
    required: true,
    min: 1,
  },
  grandTotalPrice: {
    type: Number,
    required: true,
    min: 1,
  },
  orderLocation: {
    type: String,
    required: true,
    min: 3,
    max: 1000,
  },
  phoneNumber: {
    type: String,
    required: true,
    min: 11,
    max: 14,
  },
  userId: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "User",
    required: true
  },
});

const Order = mongoose.model("Order", orderSchema);

function validateOrder(order) {
  const menuItemInOrderSchema = Joi.object({
    menuItemId: Joi.string().required(),
    quantity: Joi.number().min(1).max(500).required(),
    unitPrice: Joi.number().min(1).max(10000).required(),
  });

  const orderSchema = Joi.object({
    menuItemsList: Joi.array().items(menuItemInOrderSchema),
    orderLocation: Joi.string().min(3).max(1000).required(),
    phoneNumber: Joi.string().min(11).max(14).required()
  });

  return orderSchema.validate(order);
}

module.exports.Order = Order;
module.exports.validateOrder = validateOrder;