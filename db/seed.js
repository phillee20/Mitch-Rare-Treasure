const db = require("./index");
const format = require("pg-format");

const seed = ({ shopData, treasureData }) => {
  return (
    db
      .query(`DROP TABLE IF EXISTS treasures;`)
      .then(() => {
        return db.query(`DROP TABLE IF EXISTS shops;`);
        // drop any existing shops table
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
      .then(() => {
        const formattedShopsData = shopData.map((shop) => {
          return Object.values(shop);
        });
        const insertShopData = format(
          `
		INSERT INTO shops (
			shop_name, owner, slogan
		)
		VALUES %L RETURNING *;`,
          formattedShopsData
        );
        return db.query(insertShopData);
      })
  );

  // then: insert the raw data into the tables.
};

module.exports = seed;
