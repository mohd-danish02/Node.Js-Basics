import mongoose from "mongoose";
const express = require("express");
const app = express();
const PORT = 8000;

//schema data fiels like name email pass eyc last mai timestamps it will return two objec createdat updatedat
const userSchema = new mongoose.Schema(
  {
    username: {
      type: String,
      required: true,
      lowercase: true,
      unique: true,
    },
    email: {
      type: String,
      required: true,
      unique: true,
      lowercase: true,
    },
    password: {
      type: String,
      required: true,
      unique: true,
    },
  },
  { timestamps: true }
);

// model = kya model hoga kis k base pr hoga model k ander jo database mai 'users plural mai jayga '
export const User = mongoose.model("User", userSchema);

app.get("/", (req, res) => {
  res.send("this is userModles page ");
});

app.listen(PORT, () => {
  console.log(`server created on ${PORT}`);
});
