//we can export our json before deleting using compass

//the exported json is in the bookstore.books.json file 

//to delete one

db.books.deleteOne({_id:38})
//this will delete the json object with id 38

db.books.deleteMany({categories:"Software Engineering"})

//this deletes all the book which has categories software engineering, this is how we can delete a large number of json


//to delete it all 
db.books.deleteMany({})


