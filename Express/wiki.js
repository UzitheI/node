const express = require('express')

const app = express()
const router = express.Router()

router.get('/',(req,res)=>{
    res.send("this is the wiki home page")
})

router.get('/about',(req,res)=>{
    res.send("This is the wiki about page")
})

module.exports=router;

