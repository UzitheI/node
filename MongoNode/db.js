//database connection code
const {MongoClient}=require('mongodb');
//mongoclient is first extracted from mongodb driver then we create 2 export modules, one to create connection and another to actually get data from the database







let dbconnection;
module.exports={
    //argument to the connect to db function called cb which is responsible for 
    connectToDb:(cb)=>{
        MongoClient.connect("mongodb://localhost:27017")
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