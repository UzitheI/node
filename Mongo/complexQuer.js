//we can create complex queries ie we were normally fetching data by passing only the existing parameter but we can bring tweaks into that parameter ie 

//if we were fetching on the basis of rating, now we fetch by using an operator for that rating 

db.books.find({rating:{$gt:7}})
//this will only fetch the books which have rating value that are greater than 7 and for that we use the gt tag which specifies that it is greater

//for less than 

db.books.find({rating:{$lt:7}})

//less than or equal to 8 is 
// lte or lte

db.books.find({rating:{$gt:7},author:"patrick bamford"})
//this should fetch books that has the rating greater tahn 7 and whose author is patrick bamford 

//now or operator 

db.books.find({$or:[{rating:7},{author:'patrick bamford'}]}).limit(8)

//using the or operator i can pass 2 arguments inside my find function 


//a complex querey can be 

db.books.find({$or:[{pages:{$lt:300}},{author:'Ram vilas'}]})




