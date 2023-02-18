const db = require("./db");

exports.selectTreasures = () => {
  let secondQuery = `SELECT * FROM treasures;`;
  return db.query(secondQuery).then((result) => {
    return result.rows[0];
  });
};
