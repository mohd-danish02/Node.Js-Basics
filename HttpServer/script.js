const express = require("express");
// const http = require("http");
const app = express();
// const myserver = http.createServer(app);

app.get("/", (req, res) => {
  return res.end("Hi there this is home page");
});
app.get("/about", (req, res) => {
  return res.end(
    "Hello world this About us page " +
      " name is  " +
      req.query.name +
      req.query.age
  );
});
app.get("/contactus", (req, res) => {
  return res.end("this is contact us page !");
});

app.listen(8000, () => {
  console.log("Hello server is created !");
});
// myserver.listen(8000, () => {
//   console.log("server created!");
// });
