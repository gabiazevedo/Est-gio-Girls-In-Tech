const express = require('express');
const router = express.Router();
const merchantController = require('../controllers/merchantController');
const branchController = require('../controllers/branchController');

router
  .get('/', merchantController.getAllMerchants)
  .post('/', merchantController.createMerchant)
  .get('/:id', merchantController.getMerchantById)
  .put('/:id', merchantController.updateMerchant)
  .delete('/:id', merchantController.deleteMerchant)
  .get('/:id/branch', branchController.getAllBranchs);

module.exports = router;