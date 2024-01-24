//normally we have used single fields as query array which has been fairly easy but we can also use arrays for example categories array to do this 

db.books.find({categories:"Software Engineering"})
//this above commands fetches books whose categories is software engineering( here simultaneous other categories can exist)

//what if we want to fetch data where we only want a single category to match 

db.books.find({categories : ['Software Engineering']});

//we now know that using an array makes it absolute and passing an array while making a querey makes the item of the search absolute 

//if we want multiple items in the categories to be fetched with having it to be absolute, we can use the all operator 

db.books.find({categories:{$all:['Software Engineering','Java']}})

//if there is a name field inside the reviews and we have teh review as comment, we can search all the reviews given by the same person insdie the database for that

db.books.find({"reviews.name":"luigi"})

//when we are using a . to indicate an item inside the object we must use " "



