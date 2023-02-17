const db = require("./index");
const format = require("pg-format");
const createRefForShop = require("./utils");
const seed = ({ shopData, treasureData }) => {
  // drop any existing shops table
  return (
    db
      .query(`DROP TABLE IF EXISTS treasures;`)
      .then(() => {
        return db.query(`DROP TABLE IF EXISTS shops;`);
      })
      // then: create some new tables - but which first and why?
      .then(() => {
        return db.query(`
		CREATE TABLE shops (
			shop_id SERIAL PRIMARY KEY,
			shop_name VARCHAR(50) NOT NULL,
			owner VARCHAR(50) NOT NULL,
			slogan TEXT 
		);
		`);
      })
      .then(() => {
        return db.query(`
		CREATE TABLE treasures (
        treasure_id SERIAL PRIMARY KEY,
        treasure_name VARCHAR(50) NOT NULL,
		colour VARCHAR(50) NOT NULL,
		age INT NOT NULL,
		cost_at_auction FLOAT(10) NOT NULL,
		shop_id INT REFERENCES shops(shop_id)
		);
			`);
      })
      // then: insert the raw data into the tables.
      .then(() => {
        const formattedShopsData = shopData.map((shop) => {
          return Object.values(shop);
        });
        const insertShopString = format(
          `
		INSERT INTO shops (
			shop_name, owner, slogan
		)
		VALUES %L RETURNING *;`,
          formattedShopsData
        );
        //console.log(insertShopString);
        return db.query(insertShopString);
      })
      .then(({ rows }) => {
        const refObj = createRefForShop(rows);
        //console.log(refObj, "ReferenceObject HERE");
        const improvedTreasureData = treasureData.map((treasure) => {
          const { treasure_name, colour, age, cost_at_auction, shop } =
            treasure;
          const shopID = refObj[shop];
          //console.log(shopID);
          return [treasure_name, colour, age, cost_at_auction, shopID];
        });
        //console.log(improvedTreasureData);
        const insertTreasureString = format(
          `
		INSERT INTO treasures (
			treasure_name, colour, age, cost_at_auction, shop_id)
		VALUES %L RETURNING *;`,
          improvedTreasureData
        );
        return db.query(insertTreasureString);
      })
  );
};

module.exports = seed;
