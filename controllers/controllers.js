const {selectTreasures} = require("../models");

exports.getTreasures = (request, response, next) => {
 
  selectTreasures()
    .then((treasures) => {
      response.status(200).send({ treasures });
    })
    .catch((err) => {
      next(err);
    });
};
