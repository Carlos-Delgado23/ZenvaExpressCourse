const express = require("express");

const app = express();
app.get("/", (req, res, next) => {
  res.send("this is our response!");
});

app.listen(5000);
console.log("server running on localhost:5000");
