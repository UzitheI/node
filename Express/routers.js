const express = require('express')

const app = express()

const wiki = require('./wiki')
const ujjwal = require('./ujjwal')
const logger = require('morgan')

app.use('/wiki',wiki )
app.use('/ujjwal',ujjwal)
app.use(logger("dev"));
//the order of calling a middleware matters especially if the middleware is for cookies, for something like cookies, they have to be called first



app.get('/',(req,res)=>{
    res.status(200).json({mssg:"this is the homepage"})
})

app.listen(3000,()=>{
    console.log("app has started")
})
































// app.all("/secret", function (req, res, next) {
    //here app.all allows us to load any middleware if required (havent seen them in any code so far)

//     res.status(200).json({mssg:"instructions unclear"})
//     console.log("Accessing the secret section…");
//     next() // pass control to the next handler
//     .catch(err=>{
//         console.log(err)
//     })
//   })

// app.listen(3000,()=>{
//     console.log("app has started")
// })