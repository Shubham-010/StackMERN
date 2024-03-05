const express = require('express');
const app = express();
const cors =  require('cors');
const mongoose = require('mongoose');
const User = require('./models/user.models')
const jwt = require('jsonwebtoken')
app.use(cors());
app.use(express.json());

mongoose.connect('mongodb://localhost:62205/fullStackz-data')

app.post('/api/register', async (req,res)=>{
    debugger
    try{
        const user = await User.create({
            Name:req.body.Name,
            email:req.body.email,
            pwd:req.body.pwd
        })
        if(user){
            return res.json({status:'ok'})
        }else{
            return res.json({status:'error'})
        }
    }catch(err){
        console.log('err :>> ', err);
    }
})
app.post('/api/login', async (req,res)=>{
    debugger
    try{
        const user = await User.findOne({
            email:req.body.email,
            pwd:req.body.pwd
        })
        if(user){
            const token = jwt.sign({
                Name:user.Name,
                email:user.email
            },'Astra123')
            return res.json({ status: 'ok', user: token })
        }else{
            return res.json({ status: 'error', user: false })
        }
    }catch(err){
        console.log('err l:>> ', err);
        res.json({status:'error',error:"Duplicate Data"})

    }
})

app.listen(7777,()=>{
    console.log('Listening to  7777:>> ');
})