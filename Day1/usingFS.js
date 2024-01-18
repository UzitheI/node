// //the file system is extensively used 

// const fs = require('fs');

// fs.rename('before.json','after.json',err=>{
//     if(err){
//         return console.error(err);
//     }
// });

//this is an asynchronous way of using fs

//synchronously we can use try and catch block

const fs= require('fs');

try{
    fs.renameSync('before.json','after.json');

}catch(err){
    console.log(err);
}
//the major difference here is the execution of the code is blocked until the file operation is succesfull,basically when we create an asynchronous code, our code keeps on running until the fetch is succesfull 




