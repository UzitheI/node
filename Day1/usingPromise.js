//using a promise based api can be a better choice than callback api 

const fs=require('fs/promises');

async function example(){
    const fileName='../Day1/test.txt';
    try{
        const data=await fs.readFile(fileName,'utf8');
        //this helps to read the data 
        console.log(data);
        const content='Some is my name is content!';
        await fs.writeFile(fileName,content);
        console.log("Wrote some content ");
        const newData= await fs.readFile(fileName, 'utf8');
        console.log(newData);

    }catch(err){
        console.log(err);
    }
}
example();