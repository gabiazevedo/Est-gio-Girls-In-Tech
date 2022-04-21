const data = require('../../data.json');
const { getAllMerchants, getMerchantById, createMerchant } = require('../helpers/helperFunctions');

class MerchantController {
  // pega todos os merchants
  static getMerchants(_req, res) {
    const result = getAllMerchants(data);
    if (!result) return res.status(404).json({ message: 'Data not found' });
    return res.status(200).json(result);
  }
  
  // pega merchant pelo ID
  static getMerchantById(req, res) {
    const { id } = req.params;
    const result = getMerchantById(data, Number(id));

    if (!result) return res.status(404).json({ message: `Merchant: ${id} not found` });
    return res.status(200).json(result);
  }

  // cria merchant
  static createMerchant(req, res) {
    const newMerchant = req.body;
    const result = createMerchant(data, newMerchant);
    return res.status(200).json({ merchant: result });
  }

  // atualiza merchant (infos cadastrais)

  // atualiza merchant status (aberto/fechado)

  // deleta merchant

  // pega todas as filiais pelo id da matriz

  // pega filial pelo id

  // cria filial 

  // atualiza filial (infos cadastrais)

  // atualiza filial status (aberto/fechado)

  // envio de mensagem para filial à partir do id da matriz

  // deleta filial

};

module.exports = MerchantController;