//making an http request

//the number 1 method to make this request is by the means of axios but axios requires a third party server

// const axios=require ('axios');

// axios
// .get('https://example.com/todos')
// .then(res=>{
//     console.log(`statusCode:${res.status}`);
//     console.log(res);
// })
// .catch(error=>{
//     console.log(error);
// });



//this is a get method using only node, it is comparatively more verbose than with an STL library


const https=require ('https');
//first we require an https

const options={
    hostname:'example.com',
    port:433,
    path:'/todos',
    method:'GET', 
};
//these are all the options that are aligned with the URL 

const req=https.request(options,res =>{
    console.log(`statusCode: ${res.statusCode}`);

    res.on('data',d=>{
        process.stdout.write(d);
    });
});

req.on('error',error=>{
    console.log(error);
});

req.end();