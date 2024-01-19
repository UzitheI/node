// //the file system is extensively used 

// const fs = require('fs');

// fs.rename('before.json','after.json',err=>{
//     if(err){
//         return console.error(err);
//     }
// });

//this is an asynchronous way of using fs

//synchronously we can use try and catch block

// const fs= require('fs');

// try{
//     fs.renameSync('before.json','after.json');

// }catch(err){
//     console.log(err);
// }
//the major difference here is the execution of the code is blocked until the file operation is succesfull,basically when we create an asynchronous code, our code keeps on running until the fetch is succesfull 

const fs=require('fs');
const fileName='../Day1/test.txt';


fs.readFile(fileName,'utf8',(err,data)=>{
    if(err){
        console.log(err);
        return;
    }
console.log(data);
const content='Some content!';

fs.writeFile(fileName,content, err2=>{
    if(err2){
        console.log(err2);
        return;
    }
    console.log("Wrote some content!");
    fs.readFile(fileName, 'utf8',(err3,data3)=>{
        if(err3){
            console.log(err3);
            return;
        }
        console.log(data3);
    });
});
});

//file system fs can read data from the file and then write the file






