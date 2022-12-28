const express = require("express");
const bodyParser = require("body-parser");
const request = require("request");
const https = require("https");

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

  const data = {
    members: [
      {
        email_address: email,
        status: "subscribed",
        merge_fields: { FNAME: firstName, LNAME: lastName },
      },
    ],
  };

  const jsonData = JSON.stringify(data);
  const server = "us13";
  const listId = "fc85ccf77e";

  const url = `https://${server}.api.mailchimp.com/3.0/lists/${listId}?skip_merge_validation=true&skip_duplicate_check=true`;

  const options = {
    method: "POST",
    auth: "ajay:15366854e7de8c0d3591566cdcfea04d-us13",
  };

  const request = https.request(url, options, function (response) {
    response.on("data", function (data) {
      console.log(JSON.parse(data));
    });

    // redirect user after he submits data
    res.sendFile(
      __dirname +
        (response.statusCode == 200 ? "/success.html" : "/failure.html")
    );
  });

  request.write(jsonData);
  request.end();
});

app.post("/failure", function (req, res) {
  res.redirect("/");
});

app.listen(process.env.PORT || 3000, function () {
  console.log("server is up and running on port 3000");
});

// api key
// 15366854e7de8c0d3591566cdcfea04d-us13
// list id
// fc85ccf77e
