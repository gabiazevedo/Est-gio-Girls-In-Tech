module.exports = {
  getAllMerchants: (data) => data,

  getMerchantById: (data, id) => {
    const merchant = data.filter(item => item.merchant.id === id);
    return merchant;
  },

  createMerchant: (data, newData) => {
    data.push(newData);
    return newData;
  }
}