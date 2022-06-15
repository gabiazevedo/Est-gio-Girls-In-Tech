const { Branch } = require('../../database/models');

class BranchController {
  static async getAllBranchs(req, res) {
    try {
      const { id } = req.params;
      const result = await Branch.findAll({ where: { id } });
      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async getBranchById(req, res) {
    try {
      const { id, branchId } = req.params;
      const result = await Branch.findByPk(req.params.id);

      if (!result) return res.status(404).json({ message: 'Branch not found' });

      return res.status(200).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async createBranch(req, res) {
    try {
      const { branchName, averageTicket, status, openingTime, closingTime } = req.body;
      const ifBranchExists = await Branch.findOne({ where: { branchName } });

      if (ifBranchExists) return res.status(409).json({ message: 'This branch already exists' });
      
      const result = await Branch.create({ branchName, averageTicket, status, openingTime, closingTime });
      return res.status(201).json(result);
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async updateBranch(req, res) {
    try {
      const { branchName, averageTicket, status, openingTime, closingTime } = req.body;
      const { id } = req.params;

      const updatedBranch = await Branch.update(
        { branchName, averageTicket, status, openingTime, closingTime },
        { where: { id } },
      );

      if (!updatedBranch) return res.status(404).json({ message: 'Branch not found' });

      return res.status(200).json({ message: 'Branch uptaded successfully' }); 
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }

  static async deleteBranch(req, res) {
    try {
      const { id } = req.params;
      const deletedBranch = await Branch.destroy(
        { where: { id } },
      );

      if (!deletedBranch) return res.status(404).json({ message: 'Branch not found' });
      return res.status(200).json({ message: 'Branch deleted successfully' });
    } catch (error) {
      return res.status(500).json({ message: error.message });
    }
  }
}

module.exports = BranchController;