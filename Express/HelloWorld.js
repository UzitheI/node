const express= require('express')

const app=express()

app.get('/',(req,res)=>{
    res.status(200).json({mssg:"this is the main page"})
})
.catch(err=>{
    console.log(err)
})


// app.post('/:id',(req,res)=>{
//     if(req.params.id.isValid()){
//         res.status(200)
//     }
// })





