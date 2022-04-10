const data = require('../orders.json');
const { paymentValue, subTotalPrice, totalPrice } = require('./helperFunctions');

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
}

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
}

console.log(fillingPaymentInfo(data));
