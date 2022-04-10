const data = require('./orders.json');
const { subTotalPrice,
  formatMerchantInfo,
  formatCustomerAddress,
  totalPrice,
  paymentValue
} = require('./helpers/helperFunctions');

// console.log(paymentValue(data));

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

// console.log(filterItem(data));

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

// console.log(filterMerchantId(data));

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

//console.log(filterCustomerInfo(data));

// 4 - Função para tratamento do cart

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

// console.log(filterCartInfo(data));

// 5 - Função changeFor para o payment method 1

const changeForOne = (orders) => {
  const paymentsValues = paymentValue(orders);
  const changeFor = paymentsValues.map((item) => {
    if (item["payments_payment[1]_method"] === 'CASH') {
      item["payments_payment[1]_changeFor"] = Number((item["payments_payment[1]_value"] + (item["payments_payment[1]_value"] * (7 / 100))).toFixed(2));
    } else {
      item["payments_payment[1]_changeFor"] = 0;
    }
    return item;
  });
  return changeFor;
};

changeForOne(data);

// 6 - Função changeFor para o payment method 2

const changeForTwo = (orders) => {
  const paymentsValues = paymentValue(orders);
  const changeFor = paymentsValues.map((item) => {
    if (item["payments_payment[2]_method"] === 'CASH') {
      item["payments_payment[2]_changeFor"] = Number((item["payments_payment[2]_value"] + (item["payments_payment[2]_value"] * (11 / 100))).toFixed(2));
    } else {
      item["payments_payment[2]_changeFor"] = 0;
    }
    return item;
  });
  return changeFor;
}

changeForTwo(data);

// 7 - Função paymentsChargesChange

const paymentsChargesChange = (orders) => {
  const paymentInfo = changeForTwo(orders);

  const chargesChange = paymentInfo.map((item) => {
    if (item["payments_payment[1]_method"] && item["payments_payment[2]_method"] === 'CASH') {
      item["payments_charges_change"] = Number(((item["payments_payment[1]_changeFor"] + item["payments_payment[2]_changeFor"]) - item.cart_total).toFixed(2));
    } else if (item["payments_payment[1]_method"] === 'CASH') {
      item["payments_charges_change"] = Number(((item["payments_payment[1]_changeFor"] - item["payments_payment[1]_value"]).toFixed(2)));
    } else if (item["payments_payment[2]_method"] === 'CASH') {
      item["payments_charges_change"] = Number(((item["payments_payment[2]_changeFor"] - item["payments_payment[2]_value"]).toFixed(2)));
    } else {
      item["payments_charges_change"] = 0;
    };
    return item;
  });
  return chargesChange;
};

paymentsChargesChange(data);

const fillingPaymentInfo = (orders) => {
  const formatPayment = paymentsChargesChange(orders);
  const subTotal = subTotalPrice(orders);
  const total = totalPrice(orders);
  const fillingInfo = formatPayment.map((item, index) => {
    item["payments_charges_totalDiscounts"] = item["item_discount"]
    item["payments_charges_subTotal"] = subTotal[index];
    item["payments_charges_total"] = total[index];
    return item;
  });
  return fillingInfo;
}

//console.log(fillingPaymentInfo(data))


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

console.log(formatObj);
