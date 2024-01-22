//we can use various methods inside our find option, so we can use it accordingly 

db.books.find({author:"Humans are cringe"});
//this can be used to find a specific book whose author is mentioned 

//what if the author has 2 books inside the db 

db.books.find({author:"ujjwal",rating:7});
//this will only get the book whose rating is 7 and written by ujjwal

//if we want only a select few items inside the object, we give an additional parameter inside the find method 

db.books.find({author:"ujjwal"},{rating:1, author:1, id:1});

//this returns an object which will have the rating, author and the id


//if we want all the elements but only we select few items inside the object we use

db.books.find({},{title:1, rating:1, authors:1});

//this will get us the first 20 items insdie the database but with only the items we specified as 1 but we automatically get the id


//if we want a single item only, we can make use of the id

db.books.findOne({_id:20});
//this will render us a single object 




