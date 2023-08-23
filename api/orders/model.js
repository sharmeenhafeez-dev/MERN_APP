const { Schema, model } = require('mongoose')

const OrderSchema = new Schema(
    {
        items: {
            type: Array,
            required: true
        },
        totalBill: {
            type: String,
            required: true
        },
        customerAddress: {
            type: String,
            required: true
        },
        customerContact: {
            type: String,
            required: true
        },
        customerName: {
            type: String,
            required: true
        },
        customerEmail: {
            type: String,
            required: true
        },
        order_at: {
            type: Date,
            default: Date.now
        },
        status: {
            type: String,
            enum: ["pending", "rejected", "delivered"],
            default: "pending"
        },
        message: {
            type: String,
            default: "Thank you for ordering with us. Please check your order via the provided tracking ID."
        },
       
    }
)

const Order = model('order', OrderSchema)
module.exports = Order 