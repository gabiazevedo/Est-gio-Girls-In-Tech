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
  createBranch
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
  static updateMerchantStatus(req, res) {
    try {
      const { id } = req.params;
      const newStatus = req.body;
      const result =  updateMerchantStatus(Number(id), newStatus, data);
      if (!result) { // ???
        return res.status(404).json({ message: `Is not possible to update merchant status. Merchant of id ${id} not found` });
      }    
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // deleta merchant - deleta o merchant.id que vai pelo params da requisição e retorna o data SEM o merchant.
  static deleteMerchant(req, res) {
    try {
      const { id } = req.params;
      const result = deleteMerchant(Number(id), data);
      console.log(result)
      if (!result) {
        return res.status(404).json({ message: `Is not possible to delete merchant. Merchant of id ${id} not found`});
      }
        return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // pega todas as filiais pelo id da matriz
  static getBranchs(req, res) {
    try {
      const { id } = req.params;
      const result = getBranchs(Number(id), data);

      if (!result || {}) {
        return res.status(404).json({ message: `Not exist branchs for this merchant id ${id}`});
      }
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  }

  // pega filial pelo id
  static getBranchById(req, res) {
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
  static createBranch(req, res) {
    try {
      const { id } = req.params;
      const newBranchInfo = req.body;
      const newBranch = createBranch(Number(id), newBranchInfo, data);

      if (!newBranch || {}) {
        return res.status(400).json({ message: 'New branch info not to be empty' });
      }
      return res.status(200).json(newBranch);
    } catch (error) {
      return res.status(500).json(error.message);
    }
  } 

  // atualiza filial (infos cadastrais)

  // atualiza filial status (aberto/fechado)

  // envio de mensagem para filial à partir do id da matriz

  // deleta filial

};

module.exports = MerchantController;