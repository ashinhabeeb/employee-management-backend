
require('dotenv').config()
const express = require('express')
const cors = require('cors')
const routes = require('./routes')
require('./connection')

//create server using express
const employeeServer = express()

employeeServer.use(cors())
employeeServer.use(express.json())
employeeServer.use(routes)

//create Port

const PORT = 4002 || process.env.PORT

employeeServer.listen(PORT,()=>{
    console.log('server running successfully')
})