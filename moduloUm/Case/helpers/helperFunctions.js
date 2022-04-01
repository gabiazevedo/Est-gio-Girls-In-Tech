module.exports = {
  totalPrice: (orders) => {
    return orders.map((item) => item["item_totalPrice"] = Number((item.item_unitPrice * item.item_quantity).toFixed(2)));
  },

  formatMerchantInfo: (orders) => {
    const merchantInfo = orders.map((item) => item.merchant_address_formattedAddress.split(','));
    const splitedInfo = merchantInfo.map((item1) => item1.map((item2) => item2.split(': ')));
    return splitedInfo.map((item1) => item1.reduce((acc, cur) => {
        acc[cur[0]] = cur[1];
        return acc;
      }, {})
    );
  },

  formatCustomerAddress: (orders) => {
    const splitedNeighbor = orders.map((item) => item.customer_address_neighborhood.split(': '));
    return splitedNeighbor.map((item) => ({
      bairro: item[1],
    })); 
  },

  cartTotal: (orders) => {
    return orders.map((item) => item["cart_total"] = Number(((item.item_unitPrice * item.item_quantity) - item.item_discount).toFixed(2)));
  }
};
