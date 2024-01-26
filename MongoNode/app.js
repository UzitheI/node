const express =require('express')
const {connectToDb,getDb} =require('./db')
//init 

const app=express();

//db connection 
connectToDb((err)=>{
    if(!err){
        app.listen(3000,()=>{
            console.log("welcome the app")
        })
        db=getDb()
    }
})





//first of all we install nodemon because it helps to serve the development server

//then we want our api to react with our database so the thing that we want to do is install mongodb 


