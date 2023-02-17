const db = require("./db");

exports.selectTreasures = () => {
  let queryString = `SELECT treasure_id, treasure_name, colour, age, cost_at_auction, shop_name FROM treasures
JOIN shops
ON treasures.shop_id = shops.shop_id;

`;
};
//   return db.query(`SELECT * FROM treasures;`, [id]).then((result) => {
//     return result.row[0];
//   });
// };
