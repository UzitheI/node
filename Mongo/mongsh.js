//we can communicate with mongodb with our shell as well


//when we are using shell, we start by being in the test database which doesnt really exist, in a shell, it donest matter if the shell doesnt exist. if we add data and collection inside the database, then it gets created, before that it technically doesnt exist

/*
show dbs
use bookstore
cls
current db-db 
show collections
using var to write variables
help
exit
*/
//now creating documents

/*
db.books.insertOne({title:"The color",author:"ujjwal", pages:232,rating:7,genres:["magic","fantasy"]})


*/

//when we use db.books.find() mongo shell will find the first 20 items inside the database collection

//type it to iterate next 20
