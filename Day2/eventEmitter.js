const EventEmitter= require('node:events');
const { removeListener } = require('node:process');

const eventEmitter= new EventEmitter();

// eventEmitter.on('start',()=>{
//     console.log('started');
// })

// eventEmitter('start');
//many things happen inside our browser which are dependent on events like clicks and inputs from keyboard. So we can create our custom emit functions using the node:events module

//on i sused to add a callback function that's going to be executed when the event is triggered
// eventEmitter.on('start',number=>{
//     console.log(`${number}`);
// })

// eventEmitter.emit('start',23);




//multiple arguments

eventEmitter.once('start',(first,second)=>{
    console.log(`from first ${first} to last ${second}`);
})

eventEmitter.emit('start',4,6);


//once will run the listener only once, there are 

removeListener()
//this remove all the listeners that are present
