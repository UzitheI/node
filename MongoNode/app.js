const express =require('express')
const {connectToDb,getDb} =require('./db.js');
const { ObjectId } = require('mongodb');
//init 

const app=express();

app.use(express.json())
//this is a middleware which helps to convert our post request to json so that we can use it 

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

app.post('/books',(req,res)=>{
    const book=req.body

    db.collection('books')
    .insertOne(book)
    .then((result)=>{
        res.status(200).json(result)
    })
    .catch(err=>{
        res.status(500).json({err:"couldnt create a new document "})
    })
})

app.delete('/books/:id',(req,res)=>{
    if(ObjectId.isValid(req.params.id)){
        db.collection('books')
        .deleteOne({_id:new ObjectId(req.params.id)})
        .then(result=>{
            res.status(200).json(result)
        })
        .catch(err=>{
            res.status(500).json({mssg:"couldnt handle delete request"})
        })
    }
    else{
        res.status(500).json({err:'err is not valid'})
    }
})

app.patch('/books/:id',(req,res)=>{
    const updates=req.body;
    if(ObjectId.isValid(req.params.id)){
        db.collection('books')
        .updateOne({_id:new ObjectId(req.params.id)},{$set: updates})
        .then(result=>{
            res.status(200).json(result )
        })
        .catch(err=>{
            res.status(500).json({mssg:"error updating"})
        })
    }
    else{
        res.status(500).json({mssg:'the id is not correct'})
    }

})
