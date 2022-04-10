const data = require('../orders.json');
const { formatCustomerAddress } = require('./helperFunctions');

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

const finalCustomer = (customerFiltered) => {
  const changeProperties = customerFiltered.map(prop => {
    prop["customerFirstName"] = prop["customer_firstName"],
    prop["customerDisplayName"] = prop["customer_displayName"],
    prop["customerLastName"] = prop["customer_lastName"],
    prop["customerPhoneNumber"] = prop["customer_phoneNumber"]
    prop["customerEmail"] = prop["customer_email"],
    prop["customerCountry"] = prop["customer_address_country"],
    prop["customerNeighborhood"] = prop["customer_address_neighborhood"]
    return prop;
  });
  
  const deleteProperties = changeProperties.map(item => Object.keys(item)
    .filter(keys => !keys.includes('customer_'))
    .reduce((obj, key) => {
      obj[key] = item[key];
      return obj;
    }, {}),
  );
  return deleteProperties;
};

console.log(finalCustomer(filterCustomer(data)));