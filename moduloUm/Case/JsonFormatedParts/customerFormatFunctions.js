const data = require('../orders.json');
const { formatCustomerAddress } = require('../helpers/helperFunctions');

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

const finalCustomer = (customerFiltered) => {
  const changeProperties = customerFiltered.map(prop => {
    prop["firstName"] = prop["customer_firstName"],
    prop["fisplayName"] = prop["customer_displayName"],
    prop["lastName"] = prop["customer_lastName"],
    prop["phoneNumber"] = prop["customer_phoneNumber"]
    prop["email"] = prop["customer_email"],
    prop["country"] = prop["customer_address_country"],
    prop["neighborhood"] = prop["customer_address_neighborhood"]
    return prop;
  });
  
  const deleteProperties = changeProperties.map(item => Object.keys(item)
    .filter(keys => !keys.includes('customer_'))
    .reduce((obj, key) => {
      obj[key] = item[key];
      return obj;
    }, {}),
  );
  return deleteProperties.map(customer => { return { customer } });
};

console.log(finalCustomer(filterCustomer(data)));


/* [
  {
    customer: {
      firstName: 'Miss Maxine Harber',
      fisplayName: 'Gayle Blick',
      lastName: 'Wiegand',
      phoneNumber: '1-999-984-9782',
      email: 'Green55@yahoo.com',
      country: 'Cuba',
      neighborhood: 'Arizona'
    }
  },
  {
    customer: {
      firstName: 'Heidi Russel',
      fisplayName: 'Jackie Harris',
      lastName: 'Hackett',
      phoneNumber: '1-475-855-4074',
      email: 'Aditya.Thompson@gmail.com',
      country: 'Monaco',
      neighborhood: 'Wyoming'
    }
  },
  {
    customer: {
      firstName: 'Mrs. Kurt Jacobs',
      fisplayName: 'John Gerhold',
      lastName: 'Sauer',
      phoneNumber: '1-372-497-2267',
      email: 'Miles69@hotmail.com',
      country: 'Tokelau',
      neighborhood: 'Washington'
    }
  },
  {
    customer: {
      firstName: 'Guy McKenzie',
      fisplayName: 'Antonio Auer',
      lastName: 'Leuschke',
      phoneNumber: '1-944-351-7279',
      email: 'Lea.Yost46@hotmail.com',
      country: 'Republic of Korea',
      neighborhood: 'Kansas'
    }
  },
  {
    customer: {
      firstName: 'Mr. Sophie Davis',
      fisplayName: 'Luis Howe',
      lastName: 'Lowe',
      phoneNumber: '1-339-356-5094',
      email: 'Fanny_Mueller@gmail.com',
      country: 'Tokelau',
      neighborhood: 'Oregon'
    }
  }
] */