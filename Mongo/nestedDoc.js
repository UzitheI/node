//nested documents are other jsons which are used as values and are generally nested
//they can also be arrays of documents or jsons

//it can increase read performance
//now we are going to create nested jsons and only fetch some jsons from the nested because we dont want us to be handed a lot of information all at once 

db.books.deleteMany({})
//using this deletes all the documents inside the collection 


//whenever we are making nested components, we can make use of the big brackets

db.books.insertOne({title:"ujjwal prui",author:"micah richards",genre:["fantasy","sci-fi"],reviews:[{name:"final fantasy Iv",body:"it was the finest piece "},{name:"ramesh",body:"it has to be the final piece of acceleration"}]})

//here we can see that reviews has 2 nested object with each having 2 additional features

//we can also insert many 

db.books.insertMany()


