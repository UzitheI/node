//database connection code
const {MongoClient}=require('mongodb');
//mongoclient is first extracted from mongodb driver then we create 2 export modules, one to create connection and another to actually get data from the database







let dbconnection;
const uri = "mongodb+srv://ujjwalpuri22:ujjwal123@cluster0.0rrauuz.mongodb.net/?retryWrites=true&w=majority";
module.exports={
    //argument to the connect to db function called cb which is responsible for 
    connectToDb:(cb)=>{
        MongoClient.connect(uri)
        .then((client)=>{
            dbconnection=client.db()

            return cb()
        })
        .catch((err)=>{
            console.log(err);
            return cb(err)
        })
    },
    getDb:()=>dbconnection
} 