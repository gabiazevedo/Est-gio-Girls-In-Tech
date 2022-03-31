const data = require('./orders.json');
const totalPrice = require('./helpers/totalPrice');

const filterItem = (orders) => {
  return orders.map(keys => Object.keys(keys)
    .filter(item => item.includes('item_'))
    .reduce((obj, key) => {
      if (obj[key] === 'item_totalPrice') {
        obj[key] = totalPrice(orders);
      };
      obj[key] = keys[key];
      return obj;
    }, {}))
};

console.log(filterItem(data));
