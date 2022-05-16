/**
 * Esse arquivo está ótimo, basicamente você está usando um 'pedacinho' de Repository Pattners
 */
module.exports = {
  getAllMerchants: (data) => data || [],

  getMerchantById: (id, data) => {
    const merchant = data.find((item) => item.merchant.id === id); // retorna o primeiro elemento encontrado
    return merchant;
  },

  createMerchant: (newData, data) => {
    data.push(newData);
    return newData;
  },

  updateMerchant: (id, newData, data) => {
    // posicionar os parâmetros por prioridade
    const index = data.findIndex((item) => item.merchant.id === id);
    data[index] = newData;
    return data[index];
  },

  updateMerchantStatus: (id, newStatus, data) => {
    const index = data.find((item) => item.merchant.id === id);
    index.merchant.status = newStatus["status"];
    return index;
  },

  deleteMerchant: (id, data) => {
    const index = data.find((item) => item.merchant.id === id);
    data.splice(index, 1);
    return index;
  },

  getBranchs: (id, data) => {
    const merchant = data.find((item) => item.merchant.id === id);
    const branchs = merchant.merchant.branchs;
    return branchs;
  },

  getBranchById: (id, branchId, data) => {
    const merchant = data.find((item) => item.merchant.id === id);
    const branchs = merchant.merchant.branchs;
    const branchById = branchs.find((item) => item.branchId === branchId);
    return branchById;
  },

  createBranch: (id, newBranch, data) => {
    const merchant = data.find((item) => item.merchant.id === id);
    merchant.merchant.branchs.push(newBranch);
    return newBranch;
  },

  updateBranch: (id, branchId, branchInfo, data) => {
    const merchant = data.find((item) => item.merchant.id === id);
    const branchs = merchant.merchant.branchs;
    let branchIndex = branchs.findIndex((item) => item.branchId === branchId);
    branchs[branchIndex] = branchInfo;
    return branchInfo;
  },

  updateBranchStatus: (id, branchId, newBranchStatus, data) => {
    const merchantIndex = data.find((item) => item.merchant.id === id);
    const branchs = merchantIndex.merchant.branchs;
    const branch = branchs.find((item) => item.branchId === branchId);
    branch.status = newBranchStatus["status"];
    return branch;
  },

  sendMessageToBranch: (id, branchId, message, data) => {
    const merchantIndex = data.find((item) => item.merchant.id === id);
    const branchs = merchantIndex.merchant.branchs;
    const branch = branchs.find((item) => item.branchId === branchId);

    const date = {
      message,
      date: new Date().toISOString(),
    };

    branch.messages.push(date);
    return branch.messages;
  },

  deleteBranch: (id, branchId, data) => {
    const merchantIndex = data.find((item) => item.merchant.id === id);
    const branchs = merchantIndex.merchant.branchs;
    const branch = branchs.find((item) => item.branchId === branchId);
    branchs.splice(branch, 1);
    return branch;
  },
};

/* getBranchsById: (data, id) => {
  const merchant = data.filter(item => item.merchant.id === id);
  const newObj = {};
  const branchs = merchant.map(item => item.merchant.branchs).flat();
  newObj[merchant[0].merchant.name] = branchs;
  return newObj;
} */
