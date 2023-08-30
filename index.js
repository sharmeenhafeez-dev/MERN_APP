const express = require('express')
const app = express()
require('dotenv').config()
const port = process.env.SERVER_PORT
const cors= require('cors')
const path = require('path')


const clientpath = path.join(__dirname,'./client/dist')

app.use('/',express.static(clientpath))


// const category = require ('./category')
// const mongoose = require("mongoose")

// mongoose.connect('mongodb+srv://webdevelopment2191:LUqVQuu0SnRoHk9e@cluster0.0ha5iwu.mongodb.net/?retryWrites=true&w=majority')

// .then(()=> console.log ("MongoDB Connected"))
// .catch(err => console.log ("Mongo Error",err))


app.use(express.json())
app.use(cors())
app.use('/api', require('./api/users/router'))
app.use('/api', require('./api/products/router'))
app.use('/api', require('./api/category/router'))
app.use('/api', require('./api/brands/router'))
app.use('/api', require('./api/orders/router'))
app.use('/api', require('./api/checkout/router'))

app.get('*',(req,res)=>{
res.sendFile(path.join(__dirname,'./client/dist/index.html'))
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})

