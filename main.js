// require() is a built-in function in Node.js used to load and cache
//  JavaScript modules. When you use require, it reads the specified module
//   file, executes it, and returns the exports object to the module that required it.

// const scrFile = require("./script");
// console.log("this is the sum ", scrFile.add(10, 5));
// const result = scrFile.sub(4, 2);
// console.log("subtract value", result);
// console.log(scrFile.mystr);

// const { add, sub, mystr } = require("./script");
// console.log(add(12, 12));
// console.log(sub(12, 4));
// console.log(mystr);

const main = require("./script");
const add = main.addfun(100, 200);
const sub = main.subfun(10, 8);
const str = main.mystr;

console.log(add);
console.log(sub);
console.log(str);
