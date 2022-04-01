const data = require('./orders.json');
const { totalPrice, formatMerchantInfo, formatCustomerAddress } = require('./helpers/helperFunctions');

// 1 - Crie uma função que apenas mantenha os dados dos itens em uma lista;

const filterItem = (orders) => {
  const total = totalPrice(orders);
  return orders.map(keys => Object.keys(keys)
    .filter(item => item.includes('item_'))
    .reduce((obj, key) => {
      if (obj[key] === 'item_totalPrice') {
        obj[key] = total;
      };
      obj[key] = keys[key];
      return obj;
    }, {})
  );
};

console.log(filterItem(data));

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

console.log(filterMerchantId(data));

// 3 - Crie uma função que apenas mantenha os dados dos cliente (customer) do pedido;

const filterCustomerInfo = (orders) => {
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

console.log(filterCustomerInfo(data));
