//indexing is a process by which we can make our database searches much faster, indexes are an important only for quick searches and we dont make indexes for every category because it is too laborous 

//normally when we make a search in database, mongodb looks at every document and returns only the data that we want


db.books.find({author:"Charles Dickens"}).explain("executionStats")
//this returns the stats of the execution

db.books.createIndex({rating:8})

db.books.find({rating:8})
//now this will return n documents looking into n documents which makes it much faster