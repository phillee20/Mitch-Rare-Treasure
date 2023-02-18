const createRefForShop = (shopArray) => {
  //edge case
  if (shopArray.length === 0) {
    return {};
  }

  const shopObj = {};

  shopArray.forEach((shop) => {
    shopObj[shop.shop_name] = shop.shop_id;
    console.log(shopObj, "Shop object");
  });
  return shopObj;
};

module.exports = createRefForShop;
