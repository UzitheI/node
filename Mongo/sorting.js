//we can also sort the data inside the function
// for that we use method chaining 

//to know how many items will be returned

db.books.find({author:"ujjwal"}).count();
//this returns the number of objects that will be returned 


//we can also limit the number of object that we want to fetch 

db.books.find({rating:7}).limit(3);
//this will limit the return to 3 


//to sort the data 
db.books.find({rating:8}).sort({title:1})

//title 1 specifies that the data has to be sorted in ascending order and 0 means the data has to be sorted in descending order
//it also does it with characters

//finally chaining all of it 

db.books.find().sort()