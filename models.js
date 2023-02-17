const db = require("./db");

exports.selectTreasures = () => {
//   let queryString = `SELECT treasure_id, treasure_name, colour, age, cost_at_auction, shop_name FROM treasures
// JOIN shops
// ON treasures.shop_id = shops.shop_id;

// `;
  let secondQuery = `SELECT * FROM treasures;`
  return db.query(secondQuery).then((result) => {
    
console.log(result.rows)
  })
};

