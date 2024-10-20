// to create the file in node js using fs is (fs.wr)
// const { log } = require("console");
// const fs = require("fs");

// synchronous mathod to create file

// fs.writeFileSync("./d2.py", "this is a python file with extensions .py");
// fs.writeFileSync("./d3.js", 'console.log("hello world ")');
// Async mathod to create file

// way of creating async file in node js
// fs.writeFile(
//   "./a2.js",
//   "console.log('Hii Danish are you learning node.js ')",
//   (err) => {}
// );

// const myfile = fs.readFileSync("./read.txt", "utf-8");
// console.log(myfile);

// here utf-8 is encoding means which type of file do you want to read .txt .js .py binary  etc

// *******synchronous mathod of reading file*****
// const myfile2 = fs.readFileSync("./read1.txt", "utf-8");
// console.log(myfile2);

//async Mathod of reading file ok
// fs.readFile("./read3.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("An Error Occured", err);
//   } else {
//     console.log(result);
//   }
// });
// fs.appendFileSync("./read3.txt", "Hello danish how are you brothers");
// fs.appendFileSync("./read.txt", new Date().getDate().toLocaleString());
// fs.appendFileSync("./read1.txt", new Date().getFullYear().toLocaleString());
// fs.appendFileSync("./read.txt", `${new Date().getDate()} Danish khan ! \n`);

// we can copy a file from fs.cpSycn
// fs.unlinkSync("./d1.txt");

const fs = require("fs");
// fs.cpSync("./d.txt", "./read.txt");

// fs.unlinkSync is to deelte the file from current dirtectoru
// fs.unlinkSync("./read.txt");
// fs.unlinkSync("./a1");
// fs.unlinkSync("./a1.text");
// fs.unlinkSync("./a2.js");
// ....bloking request
// console.log("1"); sycn mai execution top to bottom chlegi
// const res = fs.readFileSync("./d.txt", "utf-8");
// console.log(res);
// console.log("2");
// console.log("4");

// nonBloking request
console.log("1");
fs.readFile("./d.txt", "utf-8", (err, res) => {
  console.log(res);
});
console.log("2");
