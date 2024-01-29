const express = require('express')

const app = express()

const router = express.Router()

router.get('/',(req,res)=>{
    res.status(200).json({mssg:'ujjwal puri is a massive joke'})
})

router.get('/about',(req,res)=>{
    res.status(200).json({mssg:"This is the about page"})
})

module.exports= router

