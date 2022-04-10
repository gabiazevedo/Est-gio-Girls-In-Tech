const data = require('../orders.json');
const { subTotalPrice } = require('../helpers/helperFunctions');

// 1 - Crie uma função que apenas mantenha os dados dos itens em uma lista;

const filterItem = (orders) => {
  const total = subTotalPrice(orders);
  const formatedInfo = orders.map((order, index) => {
    order["item_totalPrice"] = total[index];
    return order;
  });

  return formatedInfo.map(keys => Object.keys(keys)
    .filter(item => item.includes('item_'))
    .reduce((obj, key) => {
      obj[key] = keys[key];
      return obj;
    }, {})
  );
};

const finalItem = (itemFiltered) => {
  const changeProperties = itemFiltered.map(prop => {
    prop["id"] = prop["item_id"],
    prop["name"] = prop["item_name"],
    prop["description"] = prop["item_description"],
    prop["quantity"] = prop["item_quantity"],
    prop["unitPrice"] = prop["item_unitPrice"],
    prop["totalPrice"] = prop["item_totalPrice"],
    prop["discount"] = prop["item_discount"]
    return prop;
  })
  
  const formatItem = changeProperties.map(item => Object.keys(item)
    .filter(keys => !keys.includes('item_'))
    .reduce((obj, key) => {
      obj[key] = item[key];
      return obj;
    }, {}),
  );
  return formatItem.map(item => { return { item } });
}

console.log(finalItem(filterItem(data)));

/* 
[
  {
    item: {
      id: 26551,
      name: 'Handcrafted Soft Tuna',
      description: 'withdrawal azure Handmade',
      quantity: 45,
      unitPrice: 7.244,
      totalPrice: 325.98,
      discount: 27.74
    }
  },
  {
    item: {
      id: 12776,
      name: 'Rustic Soft Bacon',
      description: 'data-warehouse Dollar Chips',
      quantity: 69,
      unitPrice: 13.388,
      totalPrice: 923.77,
      discount: 44.25
    }
  },
  {
    item: {
      id: 19757,
      name: 'Refined Fresh Bacon',
      description: 'Ranch Associate infrastructure',
      quantity: 146,
      unitPrice: 37.355,
      totalPrice: 5453.83,
      discount: 35.9
    }
  },
  {
    item: {
      id: 70861,
      name: 'Licensed Rubber Cheese',
      description: 'navigate Credit Sports',
      quantity: 91,
      unitPrice: 36.07,
      totalPrice: 3282.37,
      discount: 29.89
    }
  },
  {
    item: {
      id: 34532,
      name: 'Gorgeous Steel Towels',
      description: 'Small throughput Automotive',
      quantity: 46,
      unitPrice: 60.847,
      totalPrice: 2798.96,
      discount: 41.98
    }
  }
] */