const fs = require("fs");
const _ = require("lodash");
const axios = require("axios");
const app = require("express")();
const bodyParser = require("body-parser");
const path = require("path");

// fs.readFile("/etc/passwd", "utf8", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log(data.toString(data));
// });

// fs.readFileSync("/etc/passwd", (err, data) => {
//   if (err) {
//     throw err;
//   }
//   console.log("data async", data.toString(data));
// });

// const data = fs.readFileSync("/etc/passwd");

// console.log("data sync", data);

// fs.writeFile("test", "Hello", { encoding: "utf8", flag: "a" }, () =>
//   console.log("success")
// );

// console.log(_.random(1, 100));

// const http = require("http");

// const hostname = "127.0.0.1";
// const port = 3000;

// const server = http.createServer((req, res) => {
//   axios
//     .get("https://uinames.com/api/")
//     .then(res => res.data)
//     .then(data => {
//       res.statusCode = 200;
//       res.setHeader("Content-Type", "application/json");
//       res.end(JSON.stringify({ name: data.name }));
//     })
//     .catch(error => {
//       res.statusCode = 500;
//       res.setHeader("Content-Type", "application/json");
//       res.end(JSON.stringify({ error: "HELP!" }));
//     });
// });

// server.listen(port, hostname, () => {
//   console.log(`Server running at http://${hostname}:${port}/`);
// });

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.set("views", path.join(__dirname, "views"));
app.set("view engine", "ejs");

app.listen(3000);

app.post("/post", (req, res) => {
  res.json({
    type: "POST",
    body: req.body
  });
});

app.get("/prices/:symbol", (req, res) =>
  axios(
    `https://api.binance.com/api/v3/avgPrice?symbol=${req.params.symbol}`
  ).then(externalRes => res.json({ price: externalRes.data.price }))
);

app.get("/template", (req, res) =>
  res.render("index", { time: new Date().toString() })
);
