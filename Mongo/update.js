//there are 2 types of updates, updateOne() and updateMany()


//to update a single doc, we use update one

db.books.updateOne({_id:"8"},{$set:{title:'The color of blood moon',authors:['Martin Scorcese']}})

//this updates the particular book 

//now we can update a lot of book by using the updateMany() option 

db.books.updateMany({authors:['Martin Scorcese']},{$set:{authors:['Martin Scorcesse']}})
//this will update the author of everybook where Martin Scorcese was the writer 

//to increment something we can use inc operator 

db.books.updateOne({_id:8},{$inc:{pageCount:4}})
//similarly we can decrement it by 

db.books.updateOne({_id:8},{$inc:{pageCount:-8}})

//we also have the pull and push operator to change the values of operator 

db.books.updateOne({_id:8},{$pull:{categories:'Internet'}})
//this pulls the Internet option from the categories Array 

db.books.updateOne({_id:8},{$push:{categories:'Fantasy'}})
//push adds the element in the array 

//each helps us to push or pull multiple items from the array 

db.books.updateOne({_id:8},{$push:{categories:{$each:["romance","horror","thriller"]}}})