//we can use .env files to hide the information which we dont want to push in our github code because some information might be security risks

/*for that purpose we use .env files, these .env files can be placed inside the git ignore file and we can run them
 */

/*also in order to run the .env file we can use 

node --env-file=.env app.js*/

console.log(process.env.USER_ID);

//one way of potentially appointing values to variables like USER_ID is to pass it throught the terminal using 

// USER_ID=34234 node app.js

//this sets the app.js to use variable user_id

//the code that we insert using terminal can be accessed using the process.env.USER_ID code 

//but from node20 we can directyly create a .env file

// for that to run we must use the script node --env-file=.env app.js

console.log(process.env.USER_ID)

//if the same variable is defined in the environment and in the file, the value from the environment takes precedence

