const data = require('../orders.json');
const { subTotalPrice, totalPrice } = require('../helpers/helperFunctions');

const filterCartInfo = (orders) => {
  const total = subTotalPrice(orders);
  const totalCart = totalPrice(orders);

  const formatedInfo = orders.map((order, index) => {
    order["cart_subtotal"] = total[index];
    order["cart_total"] = totalCart[index];
    return order;
  });

  return formatedInfo.map(keys => Object.keys(keys)
    .filter(item => item.includes('cart_'))
    .reduce((obj, key) => {
      obj[key] = keys[key];
      return obj;
    }, {})
  );  
};

const finalCart = (cartFiltered) => {
  const changeProperties = cartFiltered.map((prop) => {
    prop["cartId"] = prop["cart_id"],
    prop["cartSubTotal"] = prop["cart_subtotal"],
    prop["cartTotal"] = prop["cart_total"]
    return prop;
  });
  
  const deleteOldProperties = changeProperties.map(item => Object.keys(item)
    .filter(keys => !keys.includes('cart_'))
    .reduce((obj, key) => {
      obj[key] = item[key];
      return obj;
    }, {}),
  );
  return deleteOldProperties.map(cart => { return { cart } });
}


console.log(finalCart(filterCartInfo(data)));

/*
[
  {
    cart: { cartId: 95468, cartSubTotal: 325.98, cartTotal: 298.24 }
  },
  {
    cart: { cartId: 12554, cartSubTotal: 923.77, cartTotal: 879.52 }
  },
  {
    cart: { cartId: 26971, cartSubTotal: 5453.83, cartTotal: 5417.93 }
  },
  {
    cart: { cartId: 87604, cartSubTotal: 3282.37, cartTotal: 3252.48 }
  },
  {
    cart: { cartId: 70656, cartSubTotal: 2798.96, cartTotal: 2756.98 }
  }
]
*/