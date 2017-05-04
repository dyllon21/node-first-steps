
//To separate functions and the code calling them into separate files you use modules. That allow functions to be reused, as they can be called from various different files.

// const greet = require('./greet');
//
// module.exports = function(name) {
//   return "hello, " + name;
// }
//
// console.log(greet('Janine'));
//Run it using NodeJS, node greet_janine.js. You should see the same output as before.

//styling greeting
const chalk = require('chalk');

module.exports = function(name) {
   return "hello, " + name;
 }
 const greet = require('./greet');

 const styledMessage = chalk.bgBlue.black(greet("Janine"));
 console.log(styledMessage);

//using figlet:

var figlet = require('figlet');

figlet('Hello Janine!!', function (err, data) {
  if (err) {
    console.log('Something went wrong...');
    console.dir(err);
    return;
  }
  console.log(data);
});
