const express = require('express')

const app=express()

const path=require('../Express/express.txt')

// const {perimeter,area}=require('./expt.js')


// app.get('/',(req,res)=>{
//     const side=5
//     const per=perimeter(side)
//     const ar=area(side)
//     console.log(`The area of the land is ${ar} and the perimeter of the land is ${per}`)
// })

app.get('/',(req,res)=>{
    res.sendFile(path)
})

app.listen(3000,()=>{
    console.log("app has started")
})

