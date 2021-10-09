const express = require("express");

const {Order, validateOrder} = require("../models/order");
const auth = require("../middlewares/auth");

const router = express.Router();

router.post("/", auth, async (req, res) => {
  const { error } = validateOrder(req.body);
  if(error) {
    return res.status(400).send(error.details[0].message);
  }

  const listOfMenuItems = req.body.menuItemsList;
  let totalQuantity = 0;
  let grandTotalPrice = 0;

  for(let i = 0; i < listOfMenuItems.length; i++) {
    listOfMenuItems[i].totalPrice = listOfMenuItems[i].quantity * listOfMenuItems[i].unitPrice;
    totalQuantity += listOfMenuItems[i].quantity;
    grandTotalPrice += listOfMenuItems[i].totalPrice;
  }

  let order = new Order({
    menuItemsList: listOfMenuItems,
    totalQuantity: totalQuantity,
    grandTotalPrice: grandTotalPrice,
    orderLocation: req.body.orderLocation,
    phoneNumber: req.body.phoneNumber,
    userId: req.user._id
  });

  order = await order.save();
  res.send(order);
});

module.exports = router;