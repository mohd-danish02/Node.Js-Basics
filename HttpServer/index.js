// // create http server

// Explanation:
// Importing the http Module: Use require('http') to include the HTTP module.
// Creating the Server: The http.createServer() method takes a callback function with req (request) and res (response) as arguments.
// Setting the Response Header: res.writeHead(200, { 'Content-Type': 'text/plain' }) sets the HTTP status code to 200 and the content type to text/plain.
// Sending a Response: res.end('Hello, World!') sends the response to the client and ends the request.
// Listening on a Port: server.listen() makes the server listen on the specified port (3000 in this case).
// After running this code, you can visit http://localhost:3000/ in your browser to see the message "Hello, World!".

// const http = require("http");
// const fs = require("fs");
// const myServer = http.createServer((req, res) => {
//   const log = `${Date.now()}  ${req.url}: New request received \n`;
//   fs.appendFile("log.txt", log, () => {
//     switch (req.url) {
//       case "/":
//         res.end("Home page");
//         break;
//       case "/about":
//         res.end(" i am danish khan ");
//         break;
//       case "/contact":
//         res.end("this is my contact no 8549303020");
//         break;
//       default:
//         res.end("404 somthing went wronng");
//     }
//   });
// });

// // server ko run krne k liy port no ki jrt hogi here call back funcion is optional
// myServer.listen(8001, () => console.log("Server Started... Optionl hai "));

const http = require("http");
const fs = require("fs");
const url = require("url");
const myserver = http.createServer((req, res) => {
  if (req.url === "/favicon.ico") {
    return res.end();
  }
  const log = `${Date.now()} ${req.url} ${req.method}: new request received \n`;
  const myurl = url.parse(req.url); //for parsing the url
  console.log(myurl);

  fs.appendFile("log.txt", log, (err, data) => {
    switch (myurl.pathname) {
      case "/":
        res.end("this home page");
        break;
      case "/about":
        res.end("About us page");
        break;
      case "/contact-us":
        res.end("contact us page ");
        break;
      default:
        res.end("page not found 404");
    }
  });
});
myserver.listen(5000, () => {
  console.log("server created on 5000");
});

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.writeHead(200, { "Content-Type": "text/html" });
//   res.end(`
//     <!DOCTYPE html>
//     <html>
//     <head>
//       <title>My Node.js Server</title>
//     </head>
//     <body>
//       <h1>Hello Danish Khan </h1>
//       <p>Welcome to my server.</p>
//     </body>
//     </html>
//   `);
// });

// const port = 3000;
// server.listen(port, () => {
//   console.log(`Server running at http://localhost:${port}/`);
// });
