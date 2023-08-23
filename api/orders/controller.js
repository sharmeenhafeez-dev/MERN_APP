
const nodemailer = require("nodemailer");
require('dotenv').config()
var Mailgen = require('mailgen');
const Order = require ("./model")
const { connect } = require("mongoose");

const sandMail = async (req, res) => {
    const { email,customerName} = req.body;


    if (!email||!customerName) {
        res.status(403).json({ message: "Please Give your email" })
    }

    else {
        const config = {
            service: 'gmail',
            auth: {
                // TODO: replace `user` and `pass` values from <https://forwardemail.net>
                user: process.env.NODEMAILER_EMAIL,
                pass: process.env.NODEMAILER_PASSWORD
            }
        }
        var mailGenerator = new Mailgen({
          theme: 'default',
          product: {
              // Appears in header & footer of e-mails
              name: 'Mailgen bbqq',
              link: 'https://mailgen.js/'
              
          }
      });

      var MailGenEmail = {
        body: {
            name: customerName,
            intro: 'Welcome to Mailgen! We\'re very excited to have you on board.',
            table: {
              data: [
                  {
                      name: customerName,
                      email: email,
                      token: "12575"
                  }
              ]
          },
            outro: 'Need help, or have questions? Just reply to this email, we\'d love to help.'
        }
    };
    

        const response = {
            from: process.env.NODEMAILER_EMAIL, // sender address
            to: email, // list of receivers
            subject: "Hello ✔", // Subject line
            text: "Hello world?", // plain text body
            html: mailGenerator.generate(MailGenEmail),
        }



        try {
            await transporter.sendMail(response);
            res.json({ message: "Check your Email" })
        }

        catch (error) {
            res.status(500).json({ error })
        }
    }

}

const addOrder = async(req,res)=>{


  
    const {items,totalBill,customerAddress,customerContact,customerName,customerEmail} = req.body
 
    if (!items||!totalBill||!customerAddress||!customerContact||!customerName||!customerEmail) {
      res.status(403).json({ message: "Invalid payload" })
  } 
  else{

try { await connect(process.env.MONGODB_URL)
  // is ko hm ny order k variabli my save kiya h q k hmy order ki id chahiya
  const order = await Order.create({ items, totalBill, customerAddress, customerContact, customerName, customerEmail })



// Email ki khani 

const transporter = nodemailer.createTransport( {
  service: 'gmail',
  auth: {
      // TODO: replace `user` and `pass` values from <https://forwardemail.net>
      user: process.env.NODEMAILER_EMAIL,
      pass: process.env.NODEMAILER_PASSWORD
  }
}
);

// mail gen setup

var mailGenerator = new Mailgen({
  theme: 'default',
  product: {
      // Appears in header & footer of e-mails
      name: 'E.COM.TRENDS',
      link: 'http://localhost:5173/'
      
  }
});
const emailMessage = {
  name: customerName,
  intro: 'Welcome to E.COM.TRENDS ',
  table: {
      data: [
          {
              name: customerName,
              email: customerEmail,
              Trackingid: order._id,
              Address: customerAddress,
              contect: customerContact,
          }
      ]
  },
  outro: 'Please make sure the above mentioned details are correct. In case of any mistake, you can contact us.'
};

// Update email message for rejected status
if (status === "rejected") {
  emailMessage.intro = 'We regret to inform you that your order has been rejected.';
  emailMessage.outro = 'If you have any questions, please feel free to contact us.';
}

await transporter.sendMail({
  from: process.env.NODEMAILER_EMAIL, // sender address
  to: customerEmail, // list of receivers
  subject: "Hello ✔", // Subject line
  text: "Hello world?", // plain text body
  html: mailGenerator.generate({
  body: {
      name: customerName,
      intro: 'welcome to E.COM.TRENDS ',
      table: {
        data: [
            {
                name: customerName,
                email: customerEmail,
              Trackingid: order._id,
              Address: customerAddress,
              contect :customerContact,
            }
        ]
    },
      outro: 'please make sure the above mentioned detailes are correct , incase any mistake ,you can contect us.'
  }
}),
});

res.status(201).json({
  message:"order place sucessfully",
  Trackingid :order._id
})
  
}  

catch (error) {
  res.status(500).json({message:error.message})
}
 
  
 
 
}

}

const allorders = async (req, res) => {

  try {
      await connect(process.env.MONGODB_URL)
      const orders = await Order.find()
      res.json({ orders })
  }

  catch (error) {
      res.status(500).message({ message: error.message })

  }
}

const orderbyId = async (req, res) => {
  const { _id } = req.params

  try {
      await connect(process.env.MONGODB_URL)
      const order = await Order.findOne({ _id })
      res.json({ order })
  }

  catch (error) {
      res.status(500).message({ message: error.message })

  }
}






const updateOrderStatusAndMessage = async (req, res) => {
  const { _id } = req.params;
  const { status, message } = req.body;

  try {
      await connect(process.env.MONGODB_URL);
      const updatedOrder = await Order.findByIdAndUpdate(
          _id,
          { status, message },
          { new: true } // To return the updated order
      );

      if (!updatedOrder) {
          return res.status(404).json({ message: "Order not found" });
      }

      res.json({ message: "Order place successfully", updatedOrder });
  } catch (error) {
      res.status(500).json({ message: error.message });
  }
};


module.exports = { sandMail ,addOrder,allorders,orderbyId ,updateOrderStatusAndMessage}