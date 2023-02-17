const createRefForShop = (shopArray) => {
  const shopObj = {};
  if (shopArray.length === 0) {
    return {};
  } else {
    shopArray.forEach((shop) => {
      shopObj[shop.shop_name] = shop.shop_id;
      //console.log(shopObj, "Shop object");
    });
  }
  return shopObj;
};

module.exports = createRefForShop;
