const selectTreasures = require("../models");

exports.getTreasures = (request, response, next) => {
  selectTreasures(id)
    .then((treasures) => {
      response.status(200).send({ treasures });
    })
    .catch((err) => {
      next(err);
    });
};
