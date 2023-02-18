const express = require("express");
const app = express();
app.use(express.json());
const { getTreasures } = require("./controllers/treasuresControllers");
const {
  handle400Statuses,
  handle500Statuses,
} = require("./controllers/errorsController");

app.get("/api/treasures", getTreasures);

app.use(handle400Statuses);
app.use(handle500Statuses);

module.exports = app;
