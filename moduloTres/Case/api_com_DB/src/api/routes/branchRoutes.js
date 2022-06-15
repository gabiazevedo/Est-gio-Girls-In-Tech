const express = require('express');
const router = express.Router();
const branchController = require('../controllers/branchController');

router
  .get('/', branchController.getAllBranchs)
  .post('/', branchController.createBranch)
  .get('/:id', branchController.getBranchById)
  .put('/:id', branchController.updateBranch)
  .delete('/:id', branchController.deleteBranch);

module.exports = router;