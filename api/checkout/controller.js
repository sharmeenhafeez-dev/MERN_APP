
const nodemailer = require("nodemailer");
require('dotenv').config()
var Mailgen = require('mailgen');
const Checkout = require ("./model")
const { connect } = require("mongoose");

const checkout = async (req, res) => {
  const { customerName, customerEmail, customerAddress, customerContact, items, totalBill } = req.body;

  try {
    await connect(process.env.MONGODB_URL);

    await Checkout.create({ customerName, customerEmail, customerAddress, customerContact, items, totalBill });
    
    res.status(201).json({
      message: "Checkout successful"
    });
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};

function isValidEmail(email) {
  // Basic email format validation
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}




module.exports = {checkout }