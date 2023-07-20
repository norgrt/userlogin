/* array named database containing 3 objects with 
properties username and password*/
var database =[
    {
    username: "rob",
    password:  "secret"
},
{
    username: "sally",
    password:  "0000"
},
{
    username: "will",
    password:  "7777"
}

];

/*Array named newsfeed containing  3 objects with 
properties username and timeline*/

 var newsfeed =[

{
    username: "tom",
    timeline: "at work"
},

{
    username: "bob",
    timeline: "traveling to paris"
},

{
    username: "alice",
    timeline: "vaccaying on beach"
}

 ];

 //this function checks against the database array if the users login details are correct 
function isUserValid(user, pass) {

    for (var i=0; i<database.length; i++){
        if (database[i].username === user && 
            database[i].password === pass){
                return true;
            } 
        }
    return false;
    
}
/*this fuction takes the arguments "userNamePrompt and passwordPrompt" 
and  check it with  above isUserValid function  and
 shows the news feed only if the user is valid
 */
function signIn(user, pass) {
   if (isUserValid(user, pass)) {
     console.log(newsfeed);
   }
   else {
       alert("incorrect login details");
     }  
 }
//prompts user for username and password
 var userNamePrompt = prompt("enter your username");
 var passwordPrompt = prompt("enter your password");

 signIn(userNamePrompt, passwordPrompt);