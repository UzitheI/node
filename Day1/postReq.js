// const axios=require('axios ');

// axios
// .post('https://whatever.com/todos',{
//     todo:'Buy the milk ',
//     //using the post method to write anything inside the the todos path
// })
// .then(res=>{
//     console.log(`statusCode:${res.status}`);
//     //loggin the status code
//     console.log(res);
//     //logging the response from the post
// })
// .catch(error=>{
//     console.log(error);
//     //if any error is present, we catch the errror
// });

//we can also only use the node modules

const https= require('https');

const options={
    hostname:'whatever.com',
    port:445,
    path:'/todos',
    method: 'POST',
    headers:{
        'Content-Type':'application/json',
        'Content-Length':data.length,
    },
    //this is just us writing where we want to request the data from
};

const req= https.request(options,res=>{
    console.log(`statusCode:${res.statusCode}`);
    //once the request is made we get the status code to whether we have sucessfully completed the request or not 

    res.on('data',d=>{
        process.stdout.write(d);
        //the requested data can be written as the output
    });
});

req.on('error',error=>{
    console.log(error);
    // the error in the response is logged
});

req.write(data);
req.end();
