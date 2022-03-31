const totalPrice = (orders) => {
  return orders.map((item) => item["item_totalPrice"] = Number((item.item_unitPrice * item.item_quantity).toFixed(2)));
};

module.exports = totalPrice;
