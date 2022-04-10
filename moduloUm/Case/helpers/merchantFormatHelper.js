const data = require('../orders.json');
const { formatMerchantInfo } = require('./helperFunctions');

// Não consegui importar a função do arquivo data. Deu erro no uso da função split()
// no arquivo helperFunctions. Por isso precisei repetir a função aqui neste arquivo.
// Não entendi o motivo do erro.

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
    prop["merchantName"] = prop["merchant_name"],
    prop["merchantCnpj"] = prop["merchant_cnpj"],
    prop["merchantAddress"] = prop["merchant_address_formattedAddress"]
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
    item.merchantAddress["latitude"] = item.merchantAddress["coordinates_latitude"],
    item.merchantAddress["longitude"] = item.merchantAddress["coordinates_longitude"],
    item.merchantAddress["number"] = Number(item.merchantAddress["number"]),
    delete item.merchantAddress.coordinates_latitude,
    delete item.merchantAddress.coordinates_longitude
    return item;
  });
  return formatMerchantAddress;
}
  
console.log(finalMerchant(filterMerchantId(data)));

/* [
  {
    merchantName: 'Reynolds - Goldner',
    merchantCnpj: 'Veum and Sons',
    merchantAddress: {
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
  },
  {
    merchantName: 'Schamberger LLC',
    merchantCnpj: 'Davis, Stanton and Bogisich',
    merchantAddress: {
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
  },
  {
    merchantName: 'Hane, Ratke and Reichel',
    merchantCnpj: 'Casper, Abbott and Waters',
    merchantAddress: {
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
  },
  {
    merchantName: 'Wiza Inc',
    merchantCnpj: 'Stiedemann LLC',
    merchantAddress: {
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
  },
  {
    merchantName: 'Langosh LLC',
    merchantCnpj: 'Dach Inc',
    merchantAddress: {
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
] */