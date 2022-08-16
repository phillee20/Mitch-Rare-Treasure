const db = require("./");

const seed = ({ shopData, treasureData }) => {
	return db.query(`DROP TABLE IF EXISTS treasures;`).then(() => {
		// drop any existing shops table
	});
	// then: create some new tables - but which first and why?
	// then: insert the raw data into the tables.
};

module.exports = seed;
