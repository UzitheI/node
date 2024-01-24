//using in and no in

//in operator is used to declare that a value is going to be withing a certain range

db.books.find({rating:{$in:[7,8,9]}});
//this only gives book whose rating are 7,8 and 9 

// this can be done by or too 
db.books.find({$or:[{rating:7},{rating:8},{rating:9}]});




