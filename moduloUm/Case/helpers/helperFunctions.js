module.exports = {
  subTotalPrice: (orders) => orders.map((item) => Number((item.item_unitPrice * item.item_quantity).toFixed(2))),

  formatMerchantInfo: (orders) => {
    const merchantInfo = orders.map((item) => item.merchant_address_formattedAddress.split(","));
    const splitedInfo = merchantInfo.map((item1) => item1.map((item2) => item2.split(": ")));
    return splitedInfo.map((item1) =>
      item1.reduce((acc, cur) => {
        acc[cur[0]] = cur[1];
        return acc;
      }, {})
    );
  },

  formatCustomerAddress: (orders) => {
    const splitedNeighbor = orders.map((item) => item.customer_address_neighborhood.split(": "));
    return splitedNeighbor.map((item) => (item["customer_address_neighborhood"] = item[1]));
  },

  totalPrice: (orders) =>
    orders.map((item) => Number((item.item_unitPrice * item.item_quantity - item.item_discount).toFixed(2))),

  // dúvida: Como usar métodos dentro de outros métodos dentro desse module.exports.
  // R: Não há como fazer isso, o ideal é criar as funções fora do module.exports e ai sim você conseguirar usar da forma que deseja.
  paymentValue: (orders) => {
    // gostaria de ter usado o método cartTotal dentro deste método para evitar redundância de código, mas não sei como fazer.
    const totalCart = orders.map((item) =>
      Number((item.item_unitPrice * item.item_quantity - item.item_discount).toFixed(2))
    );
    const formatTotalCart = orders.map((item, index) => {
      item["cart_total"] = totalCart[index];
      return item;
    });

    return formatTotalCart.map((item) => {
      item["payments_payment[1]_value"] = Number((item.cart_total * (33 / 100)).toFixed(2));
      item["payments_payment[2]_value"] = Number((item.cart_total * (67 / 100)).toFixed(2));
      return item;
    });
  },
};
