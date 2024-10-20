// file handling means create file read file fs

// const fs = require("fs");/
//sync...blocking

// how to write file
// fs.writeFileSync("./text.txt", "my name is danish khan  ");
//async...nonbloking  give result asychronously while bloking give result synchrounously top to bottom
// fs.writeFile("./danish.txt", "Hello world async", (err) => {});

// how to read file system
// sync file read system
// const result = fs.readFileSync("./Address.txt", "utf-8");
// console.log(result);
// async file read system

// const result = fs.readFile("./Address.txt", "utf-8", (err, result) => {
//   if (err) {
//     console.log("error aa gyi check kro", err);
//   } else {
//     console.log(result);
//   }
// });
// console.log(result);

// how to add data in file using read method
//with the help fo appendFilesync ye porane data ko override ni krega usk data ko append krega
// fs.appendFileSync(
//   "./Address.txt",
//   "\ncollage : Hi-tech institute of enginerr and technology"
// );
// how to copy a file

// fs.cpSync("./Address.txt", "copyied.txt");

// to delete the file . we can use
// fs.unlinkSync("./copyied.txt");

const os = require("os");
console.log(os.cpus().length); // i have 8 cups this means my thread size shouold be 8
