const upperCase = require("upper-case").upperCase;

function displayLogs(name){
    console.log(upperCase(`Hey ${name} , This is a sample program for understanding nmp packages!`));

}
displayLogs("Sereena");

// module.exports = displayLogs;
