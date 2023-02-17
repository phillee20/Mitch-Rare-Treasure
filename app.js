const express = require("express");
const app = express();

app.use(express.json());

app.get("/api/treasures", getTreasures);

module.exports = app;
