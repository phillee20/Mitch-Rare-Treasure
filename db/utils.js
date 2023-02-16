

const createRefForShop = (shopArray) => {
    const shopObj = {}  
    if (shopArray.length === 0) {
        return {}
    }
    else {
        shopArray.forEach((shop) => {
       shopObj[shop.shop_name] = shop.shop_id
   })
    
    }

      return shopObj
    
}

module.exports = createRefForShop;