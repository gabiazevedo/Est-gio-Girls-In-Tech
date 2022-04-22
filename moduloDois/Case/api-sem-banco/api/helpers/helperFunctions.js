module.exports = {
  getAllMerchants: (data) => data || [],

  getMerchantById: (id, data) => {
    const merchant = data.find(item => item.merchant.id === id); // retorna o primeiro elemento encontrado
    return merchant;
  },

  createMerchant: (newData, data) => {
    data.push(newData);
    return newData;
  },

  updateMerchant: (id, newData, data) => { // posicionar os parâmetros por prioridade
    const index = data.findIndex(item => item.merchant.id === id);
    data[index] = newData;
    return data[index];
  },
  
  updateMerchantStatus: (id, newStatus, data) => {
    const index = data.findIndex(item => item.merchant.id === id);
    data[index].merchant.status = newStatus["status"];
    return data[index];
  },

  deleteMerchant: (id, data) => {
    const index = data.findIndex(item => item.merchant.id === id);
    data.splice(index, 1);
    return data[index];
  },
  
  getBranchs: (id, data) => {
    const merchant = data.find(item => item.merchant.id === id);
    const branchs = merchant.merchant.branchs;
    return branchs;
  },

  getBranchById: (id, branchId, data) => {
    const merchant = data.find(item => item.merchant.id === id);
    const branchs = merchant.merchant.branchs;
    const branchById = branchs.find(item => item.branchId === branchId);
    return branchById;
  },

  createBranch: (id, newBranchInfo, data) => {
    const merchant = data.findIndex(item => item.merchant.id === id);
    data[merchant].merchant.branchs.push(newBranchInfo);
    return data[merchant];
  }
}

/* getBranchsById: (data, id) => {
  const merchant = data.filter(item => item.merchant.id === id);
  const newObj = {};
  const branchs = merchant.map(item => item.merchant.branchs).flat();
  newObj[merchant[0].merchant.name] = branchs;
  return newObj;
} */