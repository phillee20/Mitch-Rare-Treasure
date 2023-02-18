const app = require("../app");
const request = require("supertest");
const seed = require("../db/seed");
const db = require("../db");
const data = require("../db/data/test-data/index");

// beforeEach(() => seed({ shopData, treasureData }))

beforeEach(() => {
  return seed(data);
});

afterAll(() => {
  return db.end();
});

describe("GET /api/treasures", () => {
  it("should respond with the status of 200 and an array of treasures ", () => {
    return request(app)
      .get("/api/treasures")
      .expect(200)
      .then(({ body }) => {
        expect(body.treasures).toBeInstanceOf(Array);
        expect(body.treasures).toHaveLength(26);
        body.treasures.forEach((treasure) => {
          expect(treasure).toEqual(
            expect.objectContaining({
              treasure_id: expect.any(Number),
              treasure_name: expect.any(String),
              colour: expect.any(String),
              age: expect.any(Number),
              cost_at_auction: expect.any(Number),
              shop_id: expect.any(Number),
            })
          );
        });
      });
  });
});
