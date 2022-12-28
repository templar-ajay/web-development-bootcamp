const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");

const app = express();
app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", function (req, res) {
  res.sendFile(__dirname + "/signup.html");
});

app.post("/", function (req, res) {
  const fullName = req.body.fullName;
  const firstName = fullName.split(" ")[0];
  const lastName = fullName.split(" ")[1];
  const email = req.body.email;
  console.log(firstName, lastName, email);
});

app.listen(3000, function () {
  console.log("server is up and running on port 3000");
});

// api key
// 15366854e7de8c0d3591566cdcfea04d-us13
