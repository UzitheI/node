const express =require('express')

//init 

const app=express();

//listen request

app.listen(3000,()=>{
    console.log("welcome the app")
})

//get 

app.get('/books',(req,res)=>{
    res.json({mssg:"welcome to the jungle"})
})


//first of all we install nodemon because it helps to serve the development server

//then we want our api to react with our database so the thing that we want to do is install mongodb 


