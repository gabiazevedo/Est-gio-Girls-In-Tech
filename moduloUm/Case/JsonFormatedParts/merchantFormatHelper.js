const data = require('../orders.json');
const { formatMerchantInfo } = require('../helpers/helperFunctions');

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

const finalMerchant = (merchantFiltered) => {
  const changeProperties = merchantFiltered.map(prop => {
    prop["name"] = prop["merchant_name"],
    prop["cnpj"] = prop["merchant_cnpj"],
    prop["address"] = prop["merchant_address_formattedAddress"]
    return prop;
  });
    
  const formatMerchant = changeProperties.map(item => Object.keys(item)
    .filter(keys => !keys.includes('merchant_'))
    .reduce((obj, key) => {
      obj[key] = item[key];
      return obj;
    }, {}),
  );

  const formatMerchantAddress = formatMerchant.map(item => {
    item.address["latitude"] = item.address["coordinates_latitude"],
    item.address["longitude"] = item.address["coordinates_longitude"],
    item.address["number"] = Number(item.address["number"]),
    delete item.address.coordinates_latitude,
    delete item.address.coordinates_longitude
    return item;
  });
  return formatMerchantAddress.map(merchant => { return { merchant } });
}
  
console.log(finalMerchant(filterMerchantId(data)));

/* [
  {
    merchant: {
      name: 'Reynolds - Goldner',
      cnpj: 'Veum and Sons',
      address: {
        country: 'South Georgia and the South Sandwich Islands',
        state: 'IA',
        city: 'Roswell',
        neighborhood: 'Rhode Island',
        streetName: 'Will Branch',
        number: 63178,
        postalCode: '00394',
        latitude: '-71.1353',
        longitude: '29.0286'
      }
    }
  },
  {
    merchant: {
      name: 'Schamberger LLC',
      cnpj: 'Davis, Stanton and Bogisich',
      address: {
        country: 'Saint Lucia',
        state: 'VA',
        city: 'Battle Creek',
        neighborhood: 'Mississippi',
        streetName: 'Wolf Centers',
        number: 43554,
        postalCode: '20711',
        latitude: '87.3354',
        longitude: '-153.4658'
      }
    }
  },
  {
    merchant: {
      name: 'Hane, Ratke and Reichel',
      cnpj: 'Casper, Abbott and Waters',
      address: {
        country: 'Chile',
        state: 'HI',
        city: 'Greenville',
        neighborhood: 'Maine',
        streetName: 'Jevon Prairie',
        number: 8252,
        postalCode: '89228-5193',
        latitude: '-79.8072',
        longitude: '-44.6819'
      }
    }
  },
  {
    merchant: {
      name: 'Wiza Inc',
      cnpj: 'Stiedemann LLC',
      address: {
        country: 'Oman',
        state: 'NV',
        city: 'San Jose',
        neighborhood: 'North Dakota',
        streetName: 'Bernier Forks',
        number: 25419,
        postalCode: '75083',
        latitude: '-60.3560',
        longitude: '-84.5374'
      }
    }
  },
  {
    merchant: {
      name: 'Langosh LLC',
      cnpj: 'Dach Inc',
      address: {
        country: 'Martinique',
        state: 'OK',
        city: 'Quincy',
        neighborhood: 'Alabama',
        streetName: 'Shyanne Trail',
        number: 66249,
        postalCode: '65192',
        latitude: '-31.3972',
        longitude: '140.3959'
      }
    }
  }
] */