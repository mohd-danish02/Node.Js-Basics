const express = require("express");
const fs = require("fs");
const users = require("./MOCK_DATA.json");
const mongoose = require("mongoose");

const app = express();
const port = 8000;

//connect with mogoose
mongoose
  .connect(" mongodb://127.0.0.1:27017/youtube-app-1")
  .then(() => console.log("mongodb connected"))
  .catch((err) => console.log("mongo Error", err));
//shcema
const userShcema = new mongoose.Schema({
  first_name: {
    type: String,
    required: true,
  },
  last_name: {
    type: String,
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  gender: {
    type: String,
  },
  job_title: {
    type: String,
  },
});

// interact with mongoose
const User = mongoose.model("user", userShcema);
app.get("/api/user/data", (req, res) => {
  return res.send("server created");
});

// this is plugin for post request   middleware jab koi data aryfa usko body mai dalne ka kaam krega
app.use(express.urlencoded({ extended: false }));
// short hand way creating api restfull
app
  .route("/api/users/:id")
  .get((req, res) => {
    const id = Number(req.params.id);
    const user = users.find((user) => user.id === id);
    return res.json(user);
  })
  .patch((req, res) => {
    return res.json({ stats: "pending" });
  })
  .delete((req, res) => {
    return res.json({ stats: "pending" });
  });

// long method to create restfull api
app.get("/api/users", (req, res) => {
  return res.json(users);
});
// html send data send to the url /user page
app.get("/user", (req, res) => {
  const html = ` <ul>  
  ${users.map((item) => `<li> ${item.first_name}</li>`).join("")}
  </ul>`;
  res.send(html);
});

// dynamic path parameters
app.get("/api/user/:id", (req, res) => {
  const id = Number(req.params.id);
  const user = users.find((user) => user.id === id);
  return res.json(user);
});

app.post("/api/user:id", (req, res) => {
  const body = req.body;
  console.log(body);
  const user = users.push({ ...body, id: users.length + 1 });
  fs.writeFile(
    "./RestApi/MOCK_DATA.json",
    JSON.stringify(user),
    (err, data) => {
      return res.json({ stats: "pending" });
    }
  );
});

app.patch("/api/user/:id", (req, res) => {
  return res.json();
});
app.listen(port, () => console.log("server created using express"));
