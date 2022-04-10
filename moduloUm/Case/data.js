const data = require('./orders.json');
const { subTotalPrice,
  formatMerchantInfo,
  formatCustomerAddress
} = require('./helpers/helperFunctions');

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

filterItem(data);

// 2 - Crie uma função que apenas mantenha os dados dos restaurantes (merchant) do pedido;

const filterMerchantId = (orders) => {
  const formatedMerchant = formatMerchantInfo(orders);
  const formatedInfo = orders.map((order, index) => {
    order["merchant_address_formattedAddress"] = formatedMerchant[index];
    return order;
  });
  
  return formatedInfo.map(keys => Object.keys(keys)
    .filter(item => item.includes('merchant_'))
    .reduce((obj, key) => {
      obj[key] = keys[key];
      return obj;
    }, {})
  );
};

filterMerchantId(data);

// 3 - Crie uma função que apenas mantenha os dados dos cliente (customer) do pedido;

const filterCustomer = (orders) => {
  const formatedCustomer = formatCustomerAddress(orders);
  const formatedInfo = orders.map((order, index) => {
    order["customer_address_neighborhood"] = formatedCustomer[index];
    return order;
  });
  
  return formatedInfo.map(keys => Object.keys(keys)
    .filter(item => item.includes('customer_'))
    .reduce((obj, key) => {
      obj[key] = keys[key];
      return obj;
    }, {})
  );
};

filterCustomer(data);

const arrObj = [
  { item_id: 26551,
    item_name: "Handcrafted Soft Tuna",
    item_description: "withdrawal azure Handmade"
  },
  { item_id: 26551,
    item_name: "Handcrafted Soft Tuna",
    item_description: "withdrawal azure Handmade"
  },
  { item_id: 26551,
    item_name: "Handcrafted Soft Tuna",
    item_description: "withdrawal azure Handmade"
  },
]

const mapArr = arrObj.map((prop) => {
  prop["itemId"] = prop["item_id"],
  prop["itemName"] = prop["item_name"],
  prop["itemDescription"] = prop["item_description"]
  // Object.keys(prop).filter(item => delete item.includes('item_'));
  return prop;
});

const formatArr = mapArr.map(item => Object.keys(item)
  .filter(keys => !keys.includes('item_'))
  .reduce((obj, key) => {
    obj[key] = item[key];
    return obj;
  }, {}),
);

const formatObj = formatArr.map((item) => {
  return {
    item: item
  };
});

//console.log(formatObj);

module.exports = {
  filterItem
}
