const express = require('express')
const mongoose = require('mongoose')
const cookieParser=require('cookie-parser')
const { DatabaseConnection } = require('./Config/Database')
require('dotenv').config()
const app = express()
const cors=require('cors')
app.use(cors())
app.use(express.json())
const path = require('path')
app.use(express.static(path.join(__dirname, 'public')))
app.use(express.static(path.join(__dirname, '../frontend/build')))
app.get('/*',(req,res)=>{
    res.sendFile(path.join(__dirname, '../frontend/build/index.html'))
    
})

app.use('/api', require('./routes/User-Route'))
mongoose.set('strictQuery', false)
DatabaseConnection
app.listen(process.env.Port, () => console.log(`${process.env.serverconn} ${process.env.Port}`))

