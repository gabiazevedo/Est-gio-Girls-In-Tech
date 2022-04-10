const data = require('../orders.json');
const { filterItem } = require('../data');

const finalItem = (itemFiltered) => {
  const changeProperties = itemFiltered.map(prop => {
    prop["itemId"] = prop["item_id"],
    prop["itemName"] = prop["item_name"],
    prop["itemDescription"] = prop["item_description"],
    prop["itemQuantity"] = prop["item_quantity"],
    prop["itemUnitPrice"] = prop["item_unitPrice"],
    prop["itemTotalPrice"] = prop["item_totalPrice"],
    prop["itemDiscount"] = prop["item_discount"]
    return prop;
  })
  
  const formatItem = changeProperties.map(item => Object.keys(item)
    .filter(keys => !keys.includes('item_'))
    .reduce((obj, key) => {
      obj[key] = item[key];
      return obj;
    }, {}),
  );
  return formatItem;
}

console.log(finalItem(filterItem(data)));

/* [
  {
    itemId: 26551,
    itemName: 'Handcrafted Soft Tuna',
    itemDescription: 'withdrawal azure Handmade',
    itemQuantity: 45,
    itemUnitPrice: 7.244,
    itemTotalPrice: 325.98,
    itemDiscount: 27.74
  },
  {
    itemId: 12776,
    itemName: 'Rustic Soft Bacon',
    itemDescription: 'data-warehouse Dollar Chips',
    itemQuantity: 69,
    itemUnitPrice: 13.388,
    itemTotalPrice: 923.77,
    itemDiscount: 44.25
  },
  {
    itemId: 19757,
    itemName: 'Refined Fresh Bacon',
    itemDescription: 'Ranch Associate infrastructure',
    itemQuantity: 146,
    itemUnitPrice: 37.355,
    itemTotalPrice: 5453.83,
    itemDiscount: 35.9
  },
  {
    itemId: 70861,
    itemName: 'Licensed Rubber Cheese',
    itemDescription: 'navigate Credit Sports',
    itemQuantity: 91,
    itemUnitPrice: 36.07,
    itemTotalPrice: 3282.37,
    itemDiscount: 29.89
  },
  {
    itemId: 34532,
    itemName: 'Gorgeous Steel Towels',
    itemDescription: 'Small throughput Automotive',
    itemQuantity: 46,
    itemUnitPrice: 60.847,
    itemTotalPrice: 2798.96,
    itemDiscount: 41.98
  }
] */