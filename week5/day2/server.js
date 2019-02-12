const app = require("express")();
const bodyParser = require("body-parser");
const router = require("./router");

app.use(bodyParser.json());

app.use("/api/v1/orders", router);

module.exports = app;
