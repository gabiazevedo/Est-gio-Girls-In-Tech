const router = require('express').Router();
const MerchantController = require('../controllers/MerchantController');

router.post('/', MerchantController.createMerchant)
      .get('/', MerchantController.getMerchants)
      .put('/:id', MerchantController.updateMerchant)
      .delete('/:id', MerchantController.deleteMerchant)
      .put('/:id/updateStatus', MerchantController.updateMerchantStatus)
      .get('/:id/branchs', MerchantController.getBranchs)
      .get('/:id/branchs/:branchId', MerchantController.getBranchById)
      .post('/:id/branchs', MerchantController.createBranch)
      .get('/:id', MerchantController.getMerchantById) // primeira rota GET /:id deixar por último 

module.exports = router;