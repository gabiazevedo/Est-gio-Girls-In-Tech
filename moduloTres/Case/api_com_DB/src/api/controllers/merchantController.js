const { Merchant } = require('../../database/models');

class MerchantController {
  static async getAllMerchants(_req, res) {
    try {
      const result = await Merchant.findAll();
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getMerchantById(req, res) {
    try {
      const result = await Merchant.findByPk(req.params.id);

      if (!result) return res.status(404).json({ message: 'Merchant not found' });

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async createMerchant(req, res) {
    try {
      const { merchantName, averageTicket, status, openingTime, closingTime } = req.body;
      const ifMerchantExists = await Merchant.findOne({ where: { merchantName } });

      if (ifMerchantExists) return res.status(409).json({ message: 'This merchant already exists' });
      
      const result = await Merchant.create({ merchantName, averageTicket, status, openingTime, closingTime });
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updateMerchant(req, res) {
    try {
      const { merchantName, averageTicket, status, openingTime, closingTime } = req.body;
      const { id } = req.params;

      const updatedMerchant = await Merchant.update(
        { merchantName, averageTicket, status, openingTime, closingTime },
        { where: { id } },
      );

      if (!updatedMerchant) return res.status(404).json({ message: 'Merchant not found' });

      return res.status(200).json({ message: 'Merchant uptaded successfully' }); 
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteMerchant(req, res) {
    try {
      const { id } = req.params;
      const deletedMerchant = await Merchant.destroy(
        { where: { id } },
      );

      if (!deletedMerchant) return res.status(404).json({ message: 'Merchant not found' });
      return res.status(200).json({ message: 'Merchant deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = MerchantController;
