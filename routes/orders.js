const express = require("express");

const {Order, validateOrder} = require("../models/order");
const {MenuItem, validateMenuItem} = require("../models/menuItem");
const auth = require("../middlewares/auth");

const router = express.Router();

function isValidObjectId(objectId) {
  return objectId.match(/^[0-9a-fA-F]{24}$/);
}

async function validateMenuId(menuItemId) {
  const isValidId = isValidObjectId(menuItemId);
  if (!isValidId) return false;

  const menuItem = await MenuItem.findOne({ _id: menuItemId });

  if (!menuItem) {
    return false;
  }

  return true;
}

async function validateMenuItemIds(menuItemsList) {
  for(let i = 0; i < menuItemsList.length; i++) {
    const isValidMenuItemId = await validateMenuId(menuItemsList[i].menuItemId);
    if(!isValidMenuItemId) {
      return false;
    }
  }

  return true;
}

router.post("/", auth, async (req, res) => {
  const { error } = validateOrder(req.body);
  if(error) {
    return res.status(400).send(error.details[0].message);
  }

  const isMenuItemIdsValid = await validateMenuItemIds(req.body.menuItemsList);
  if(!isMenuItemIdsValid) {
    return res.status(400).send("One or more menu item ID is invalid");
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