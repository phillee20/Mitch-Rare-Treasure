const express = require("express");
const app = express();
const {getTreasures} = require('./controllers/controllers')
app.use(express.json());

app.get("/api/treasures", getTreasures);

module.exports = app;
