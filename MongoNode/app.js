const express =require('express')
const {connectToDb,getDb} =require('./db.js');
const { ObjectId } = require('mongodb');
//init 

const app=express();

//db connection 
connectToDb((err)=>{
    if(!err){
        app.listen(3000,()=>{
            console.log("welcome to the app")
        })
        db=getDb()
    }
})


//a lot of books 
app.get('/books',(req,res)=>{
    let books=[]
    db.collection('books')
    .find()
    .sort({author:1})
    .forEach(book=>books.push(book))
    .then(()=>{
        res.status(200).json(books)
    })
    .catch(()=>{
        res.status(500).json({error:'error occured'})
    })
    //to reference the collection in the database 
    

    // res.json({mssg:'ram'});
})

//first of all we install nodemon because it helps to serve the development server

//then we want our api to react with our database so the thing that we want to do is install mongodb 


app.get('/books/:id',(req,res)=>{

    if(ObjectId.isValid(req.params.id)){

        db.collection('books')
        .findOne({_id:new ObjectId(req.params.id)})
        .then(doc=>{
            res.status(200).json(doc)
        })
        .catch(err=>{
            res.status(500).json({error:'had some error'})
        })
    }
    else{
        res.status(500).json({error:"Not valid document id"});
    }
    })

