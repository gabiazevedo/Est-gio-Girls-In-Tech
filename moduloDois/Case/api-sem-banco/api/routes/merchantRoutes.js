const router = require("express").Router();
const MerchantController = require("../controllers/MerchantController");
/**
 * Nas rotas estão sendo usadas um padrão (camelCase), isso é bom. Mas sugiro o uso sempre de quebac-case
 * pois é comum no mercado esse uso, já que as rotas ficam melhor definidas com letras minúscula.
 */
router
  .post("/", MerchantController.createMerchant)
  .get("/", MerchantController.getMerchants)
  .put("/:id", MerchantController.updateMerchant)
  .delete("/:id", MerchantController.deleteMerchant)
  .put("/:id/update-status", MerchantController.updateMerchantStatus)
  .get("/:id/branchs", MerchantController.getBranchs)
  .get("/:id/branchs/:branchId", MerchantController.getBranchById)
  .put("/:id/branchs/:branchId", MerchantController.updateBranch)
  .post("/:id/branchs", MerchantController.createBranch)
  .put("/:id/branchs/:branchId/update-status", MerchantController.updateBranchStatus)
  .post("/:id/branchs/:branchId/message", MerchantController.sendMessageToBranch)
  .delete("/:id/branchs/:branchId", MerchantController.deleteBranch)
  .get("/:id", MerchantController.getMerchantById); // primeira rota GET /:id deixar por último

module.exports = router;
