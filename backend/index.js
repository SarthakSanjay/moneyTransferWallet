require('dotenv').config()
const express = require("express");
const cors = require('cors')
const app = express()
const mainRouter = require('./routes/index')
const mongoose = require('mongoose')
app.use(cors({
    origin: 'https://money-transfer-wallet-frontend.vercel.app',
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    credentials:true,
}))
app.use(express.json())
app.use('/api/v1' , mainRouter)

app.get('/',(req,res)=>{
    res.status(200).json({msg:'hello from backend'})
})
async function startServer(){
    try {
       await mongoose.connect(process.env.PAYTM)
       .then(()=>{
        console.log('db connected');
       })
       .then(()=>{
        app.listen(3000 , ()=>{
            console.log('app listining on port 3000');
        })
       })
    } catch (error) {
        console.log(error.message);
    }
}

startServer()
