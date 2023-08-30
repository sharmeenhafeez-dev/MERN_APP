const { Schema, model } = require('mongoose')

const CheckoutSchema = new Schema(
    {
       
        
        customerName: {
            type: String,
            required: true
        },
        customerEmail: {
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
        order_at: {
            type: Date,
            default: Date.now
        }
       
    }
)

const Checkout = model('checkout', CheckoutSchema)
module.exports = Checkout 