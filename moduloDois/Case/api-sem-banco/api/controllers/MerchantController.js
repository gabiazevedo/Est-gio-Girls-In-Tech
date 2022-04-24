const data = require('../../data.json');
const {
  getAllMerchants,
  getMerchantById,
  createMerchant,
  updateMerchant,
  deleteMerchant,
  updateMerchantStatus,
  getBranchs,
  getBranchById,
  createBranch,
  deleteBranch,
  updateBranch,
  updateBranchStatus,
  sendMessageToBranch
} = require('../helpers/helperFunctions');

class MerchantController {
  // pega todos os merchants
  static getMerchants(_req, res) { // buscar sempre garantir e validar se estou retornando dados do mesmo tipo.
    try {
      const result = getAllMerchants(data);
      if (result.length === 0) return res.status(404).json({ message: 'Data not found' });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
  
  // pega merchant pelo ID
  static getMerchantById(req, res) {
    try {
      const { id } = req.params;
      const result = getMerchantById(Number(id), data);
  
      if (!result) {
        return res.status(404).json({ message: `Merchant of id ${id} not found` });
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // cria merchant
  static createMerchant(req, res) {
    try {
      const newMerchant = req.body;
      const result = createMerchant(newMerchant, data);
      if (newMerchant === '') { // ???
        return res.status(400).json({ message: `New merchant not be empty` });
      }
      return res.status(200).json({ merchant: result });
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // atualiza merchant (infos cadastrais)
  static updateMerchant(req, res) {
    try {
      const { id } = req.params;
      const updatedMerchant = req.body;
      const result = updateMerchant(Number(id), updatedMerchant, data);
      if (!result || {}) {
        return res.status(404).json({ message: `Is not possible to update merchant. Merchant of id ${id} not found` });
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message)
    }
  }

  // atualiza merchant status (aberto/fechado)
  static updateMerchantStatus(req, res) { // Método ok, porém, falha na validação.
    try {
      const { id } = req.params;
      const newStatus = req.body;
      const result =  updateMerchantStatus(Number(id), newStatus, data);
        if (!result) { 
        return res.status(404).json({ message: `New status not to be empty` });
      }    
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // deleta merchant - deleta o merchant.id que vai pelo params da requisição e retorna o data SEM o merchant.
  static deleteMerchant(req, res) { // método funcionando corretamente
    try {
      const { id } = req.params;
      const result = deleteMerchant(Number(id), data);
      if (!result) {
        return res.status(404).json({ message: `Is not possible to delete merchant. Merchant of id ${id} not found`});
      }
        return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // pega todas as filiais pelo id da matriz
  static getBranchs(req, res) { // método funcionando. Para cair na validação é preciso testar com um merchant que não possua filial.
    try {
      const { id } = req.params;
      const result = getBranchs(Number(id), data);
      if (!result || result.length === 0) {
        return res.status(404).json({ message: `Not exist branchs for this merchant id ${id}`});
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // pega filial pelo id
  static getBranchById(req, res) { // método funcionando certinho, retornando resultado certo e caindo na validação.
    try {
      const { id, branchId } = req.params;
      const result = getBranchById(Number(id), Number(branchId), data);

      if (!result) {
        return res.status(404).json({ message: `Branch id ${branchId} not found` });
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // cria filial
  static createBranch(req, res) { // método funcionando
    try {
      const { id } = req.params;
      const branchInfo = req.body;
      const newBranch = createBranch(Number(id), branchInfo, data);

      if (!newBranch || {}) {
        return res.status(400).json({ message: 'New branch info not to be empty' });
      }
      return res.status(200).json(newBranch);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  } 

  // atualiza filial (infos cadastrais)
  static updateBranch(req, res) {
    try {
      const { id, branchId } = req.params;
      const branchInfo = req.body;
      const updatedBranch = updateBranch(Number(id), Number(branchId), branchInfo, data);
      if (!updatedBranch || updateBranch === {}) {
        return res.status(400).json({ message: 'New branch info not to be empty' });
      }
      return res.status(200).json(updatedBranch);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // atualiza filial status (aberto/fechado)
  static updateBranchStatus(req, res) {
    try {
      const { id, branchId } = req.params;
      const newBranchStatus = req.body;
      const result =  updateBranchStatus(Number(id), Number(branchId), newBranchStatus, data);
      console.log(newBranchStatus, id);
      if (!result) { 
        return res.status(404).json({ message: `New branch status not to be empty` });
      }    
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // envio de mensagem para filial à partir do id da matriz
  static sendMessageToBranch(req, res) {
    try {
      const { id, branchId } = req.params;
      const { message } = req.body;
      const branchMessage = sendMessageToBranch(Number(id), Number(branchId), message, data);

      if (!branchMessage) {
        return res.status(400).json({ message: `Message not be empty` });
      }
        return res.status(200).json(branchMessage);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // deleta filial
  static deleteBranch(req, res) { // método funcionando e caindo nas validações 
    try {
      const { id, branchId } = req.params;
      const result = deleteBranch(Number(id), Number(branchId), data);

      if (result.length === 0) {
        return res.status(404).json({ message: `Is not possible to delete branch. Branch of id ${id} not found`});
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }
};

module.exports = MerchantController;