const createRefForShop = require("../db/utils");

describe("createForShops", () => {
  it("should return an empty object if passed an empty array ", () => {
    expect(createRefForShop([])).toEqual({});
  });
  it("should return an object if passed an array of one object", () => {
    const input = [
      {
        shop_id: 12,
        shop_name: "Dibbert Inc",
        owner: "Aaliyah",
        slogan: "Implemented motivating customer loyalty",
      },
    ];
    const output = {
      "Dibbert Inc": 12,
    };
    const actual = createRefForShop(input);
    expect(actual).toEqual(output);
  });

  test("should return multiple objects if passed an array of objects ", () => {
    const input = [
      {
        shop_id: 12,
        shop_name: "Dibbert Inc",
        owner: "Aaliyah",
        slogan: "Implemented motivating customer loyalty",
      },
      {
        shop_id: 13,
        shop_name: "Feeney Inc",
        owner: "Elta",
        slogan: "Function-based intermediate secured line",
      },
      {
        shop_id: 14,
        shop_name: "Kshlerin, Koch and Monahan",
        owner: "Daphney",
        slogan: "Persevering web-enabled hardware",
      },
    ];

    const output = {
      "Dibbert Inc": 12,
      "Feeney Inc": 13,
      "Kshlerin, Koch and Monahan": 14,
    };
    const actual = createRefForShop(input);
    expect(actual).toEqual(output);
  });
});
