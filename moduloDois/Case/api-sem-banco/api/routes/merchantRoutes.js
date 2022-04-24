const router = require('express').Router();
const MerchantController = require('../controllers/MerchantController');

router.post('/', MerchantController.createMerchant)
      .get('/', MerchantController.getMerchants)
      .put('/:id', MerchantController.updateMerchant)
      .delete('/:id', MerchantController.deleteMerchant)
      .put('/:id/updateStatus', MerchantController.updateMerchantStatus)

router.get('/:id/branchs', MerchantController.getBranchs)
      .get('/:id/branchs/:branchId', MerchantController.getBranchById)
      .put('/:id/branchs/:branchId', MerchantController.updateBranch)
      .post('/:id/branchs', MerchantController.createBranch)
      .put('/:id/branchs/:branchId/updateStatus', MerchantController.updateBranchStatus)
      .post('/:id/branchs/:branchId/message', MerchantController.sendMessageToBranch)
      .delete('/:id/branchs/:branchId', MerchantController.deleteBranch)
      .get('/:id', MerchantController.getMerchantById) // primeira rota GET /:id deixar por último 

module.exports = router;