const router = require('express').Router();
const MerchantController = require('../controllers/MerchantController');

router.post('/', MerchantController.createMerchant)
router.get('/', MerchantController.getMerchants)
router.get('/:id', MerchantController.getMerchantById)

module.exports = router;