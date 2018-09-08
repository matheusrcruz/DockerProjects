const express = require('express')
const restful = require('node-restful')
const server = express()
const mongoose = restful.mongoose
const bodyParser = require('body-parser')
const cors = require('cors')


//Conect Database
mongoose.Promise = global.Promise
mongoose.connect('mongodb://db/mydb')

// Middlewares 
server.use(bodyParser.urlencoded({extended:true}))



// Start Server
server.listen(3000)