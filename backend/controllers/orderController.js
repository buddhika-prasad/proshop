import asyncHandler from "../middleware/asyncHandler.js";
import Order from "../models/orderModel.js";

// @desc    create new order
// @route   GET /api/orders
// @access  Purivate
const addOrderItems = asyncHandler(async (req, res) => {
  res.send("add Order Items");
});

// @desc    get logged in user orders
// @route   GET /api/orders/myorders
// @access  Purivate
const getMyOrders = asyncHandler(async (req, res) => {
  res.send("get My Orders");
});

// @desc    get order by id
// @route   GET /api/orders/:id
// @access  Purivate
const getOrderById = asyncHandler(async (req, res) => {
  res.send("get Order By Id");
});

// @desc    update order to paid
// @route   GET /api/orders/:id/pay
// @access  Purivate
const updateOrderToPaid = asyncHandler(async (req, res) => {
  res.send("update Order To Paid");
});

// @desc    update order to delivered
// @route   GET /api/orders/:id/deliver
// @access  Purivate/Admin
const updateOrderToDelivered = asyncHandler(async (req, res) => {
  res.send("update Order To Delivered");
});

// @desc    upget all orders
// @route   GET /api/orders/orders
// @access  Purivate/Admin
const getOrders = asyncHandler(async (req, res) => {
  res.send("get all orders");
});

export {
  addOrderItems,
  getMyOrders,
  getOrderById,
  updateOrderToPaid,
  updateOrderToDelivered,
  getOrders,
};
