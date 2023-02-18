const db = require("./db");

selectTreasures = () => {
  let strQuery = `SELECT * FROM treasures;`;
  return db.query(strQuery).then((result) => {
    return result.rows;
  });
};

module.exports = { selectTreasures };
