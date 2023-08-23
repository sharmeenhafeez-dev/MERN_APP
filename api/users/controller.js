const { connect } = require('mongoose');
require('dotenv').config()
const User = require('./model')
const { hash, compare } = require('bcryptjs')
const { sign } = require('jsonwebtoken')


const signup = async (req, res) => {
  const { username, email, password } = req.body;

  try {
    await connect(process.env.MONGODB_URL);

    const existingUser = await User.findOne({ email: email });

    if (existingUser) {
      res.status(409).json({
        message: "User already exists"
      });
    } else if (!isValidEmail(email)) {
      res.status(400).json({
        message: "Invalid email format"
      });
    } else {
      await User.create({ username, email, password: await hash(password, 12) });
      res.status(201).json({
        message: "Signup successful"
      });
    }
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
const login = async (req, res) => {
  const { email, password } = req.body;

  try {
    await connect(process.env.MONGODB_URL);
    const user = await User.findOne({ email: email });

    if (!email && !password) {
      res.status(401).json({
        message: "Invalid email and password"
      });
    } else if (!user) {
      res.status(401).json({
        message: "Invalid email"
      });
    } else {
      const isPasswordValid = await compare(password, user.password);

      if (!isPasswordValid) {
        res.status(401).json({
          message: "Invalid password"
        });
      } else {
        const token = sign({
          username: user.username,
          email: user.email,
          id: user._id,
          userimage: user.userimage,
          role: user.role
        }, process.env.JWT_SECRET);

        res.status(200).json({
          message: "Successfully logged in",
          token: token
        });
      }
    }
  } catch (error) {
    res.status(500).json({
      message: error.message
    });
  }
};





const getallUsers = async (req, res) => {
  try {
    await connect(process.env.MONGODB_URL)
      const Users = await User.find()
      res.status(200).json(
          {
              Users: Users
          }
      )

  }

  catch (error) {
      res.status(500).json(
          {
              message: error.message
          }
      )

  }
}

const getuserbyEmail = async (req, res) => {

  const { email } = req.query


  try {
    await connect(process.env.MONGODB_URL)
      const Users = await User.findOne({ email: email })
      res.status(200).json(
          {
              Users: Users
          }
      )

  }

  catch (error) {
      res.status(500).json(
          {
              message: error.message
          }
      )

  }
}

const getUserbyid = async (req, res) => {

  const { _id } = req.params


  try {
    await connect(process.env.MONGODB_URL)
      const Users = await User.findOne({ _id })
      res.status(200).json(
          {
              Users: Users
          }
      )

  }
  catch (error) {
      res.status(500).json(
          {
              message: error.message
          }
      )

  }
}

const deleteUsers = async (req,res)=>{

  const {username} = req.body
  try {
    await connect(process.env.MONGODB_URL)
await User.deleteOne({username:username})

res.status(200).json({
  message: "user deleted sucessfully"
})
    
  }  catch (error) {
    res.status(500).json({
      message: error.message
    })
  }

}
const updateUsers = async (req,res)=>{

  const {_id, username,userimage} = req.body

  const filter = {_id}
  const update = { username,userimage}
  try {
    await connect(process.env.MONGODB_URL)
await User.findOneAndUpdate({filter,update})

res.status(200).json({
  message: "user  updated sucessfully"
})
    
  }  catch (error) {
    res.status(500).json({
      message: error.message
    })
  }

}

module.exports = { signup, login , getallUsers  , getuserbyEmail, getUserbyid, deleteUsers,updateUsers}  