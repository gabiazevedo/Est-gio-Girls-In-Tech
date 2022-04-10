const data = require('../orders.json');
const { paymentValue, subTotalPrice, totalPrice } = require('../helpers/helperFunctions');

// Função changeFor para o payment method 1

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

// Função changeFor para o payment method 2

const changeForTwo = (orders) => {
  const paymentsValues = changeForOne(orders);
  const changeFor = paymentsValues.map((item) => {
    if (item["payments_payment[2]_method"] === 'CASH') {
      item["payments_payment[2]_changeFor"] = Number((item["payments_payment[2]_value"] + (item["payments_payment[2]_value"] * (11 / 100))).toFixed(2));
    } else {
      item["payments_payment[2]_changeFor"] = 0;
    }
    return item;
  });
  return changeFor;
};

// Função paymentsChargesChange

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

const fillingPaymentInfo = (orders) => {
  const formatPayment = paymentsChargesChange(orders);
  const subTotal = subTotalPrice(orders);
  const total = totalPrice(orders);
  const fillingInfo = formatPayment.map((item, index) => {
    item["payments_charges_totalDiscounts"] = item["item_discount"]
    item["payments_charges_subTotal"] = subTotal[index];
    item["payments_charges_total"] = total[index];

    if (item["payments_payment[1]_method"] && item["payments_payment[2]_method"] === 'CASH') {
      item["payments_charges_totalInCash"] = item.cart_total;
    } else if (item["payments_payment[1]_method"] === 'CASH') {
      item["payments_charges_totalInCash"] = item["payments_payment[1]_value"];
    } else if (item["payments_payment[2]_method"] === 'CASH') {
      item["payments_charges_totalInCash"] = item["payments_payment[2]_value"];
    } else {
      item["payments_charges_totalInCash"] = 0;
    }
    return item;
  });
  return fillingInfo;
};

const jusPaymentInfo = (filledPayment) => {
  const formatPayment = filledPayment.map(item => Object.keys(item)
    .filter(keys => keys.includes('payments_'))
    .reduce((obj, key) => {
      obj[key] = item[key];
      return obj;
    }, {}),
  );
  return formatPayment;
};

const finalPaymentInfo = () => {
  const paymentsInfo = jusPaymentInfo(fillingPaymentInfo(data));
  const finalPaymentsOne = paymentsInfo.map(prop => {
    prop["method_1"] = prop["payments_payment[1]_method"],
    prop["code_1"] = prop["payments_payment[1]_code"],
    prop["value_1"] = prop["payments_payment[1]_value"],
    prop["changeFor_1"] = prop["payments_payment[1]_changeFor"],
    prop["method_2"] = prop["payments_payment[2]_method"],
    prop["code_2"] = prop["payments_payment[2]_code"],
    prop["value_2"] = prop["payments_payment[2]_value"],
    prop["changeFor_2"] = prop["payments_payment[2]_changeFor"],
    prop["subTotal"] = prop["payments_charges_subTotal"],
    prop["total"] = prop["payments_charges_total"],
    prop["totalDiscounts"] = prop["payments_charges_totalDiscounts"],
    prop["totalInCash"] = prop["payments_charges_totalInCash"],
    prop["chargesChange"] = prop["payments_charges_change"]
    return prop;
  });
    return finalPaymentsOne.map(item => Object.keys(item)
    .filter(keys => !keys.includes('payments_payment[1]_') && !keys.includes('payments_payment[2]_') && !keys.includes('payments_charges_'))
    .reduce((obj, key) => {
      obj[key] = item[key];
      return obj;
    }, {}),
  );
};

const payments = finalPaymentInfo();

const finalFormat = (paymentArr) => {
  const formatPayment = paymentArr.map(payments => { return { payments } });
  return formatPayment;
}

console.log(finalFormat(payments));

/* [
  {
    payments: {
      method_1: 'DEBIT',
      code_1: '368',
      value_1: 98.42,
      changeFor_1: 0,
      method_2: 'CREDIT',
      code_2: '412',
      value_2: 199.82,
      changeFor_2: 0,
      subTotal: 325.98,
      total: 298.24,
      totalDiscounts: 27.74,
      totalInCash: 0,
      chargesChange: 0
    }
  },
  {
    payments: {
      method_1: 'CASH',
      code_1: '412',
      value_1: 290.24,
      changeFor_1: 310.56,
      method_2: 'CASH',
      code_2: '994',
      value_2: 589.28,
      changeFor_2: 654.1,
      subTotal: 923.77,
      total: 879.52,
      totalDiscounts: 44.25,
      totalInCash: 879.52,
      chargesChange: 85.14
    }
  },
  {
    payments: {
      method_1: 'CASH',
      code_1: '994',
      value_1: 1787.92,
      changeFor_1: 1913.07,
      method_2: 'VOUCHER',
      code_2: '368',
      value_2: 3630.01,
      changeFor_2: 0,
      subTotal: 5453.83,
      total: 5417.93,
      totalDiscounts: 35.9,
      totalInCash: 1787.92,
      chargesChange: 125.15
    }
  },
  {
    payments: {
      method_1: 'VOUCHER',
      code_1: '106',
      value_1: 1073.32,
      changeFor_1: 0,
      method_2: 'DEBIT',
      code_2: '412',
      value_2: 2179.16,
      changeFor_2: 0,
      subTotal: 3282.37,
      total: 3252.48,
      totalDiscounts: 29.89,
      totalInCash: 0,
      chargesChange: 0
    }
  },
  {
    payments: {
      method_1: 'VOUCHER',
      code_1: '994',
      value_1: 909.8,
      changeFor_1: 0,
      method_2: 'DEBIT',
      code_2: '994',
      value_2: 1847.18,
      changeFor_2: 0,
      subTotal: 2798.96,
      total: 2756.98,
      totalDiscounts: 41.98,
      totalInCash: 0,
      chargesChange: 0
    }
  }
] */
