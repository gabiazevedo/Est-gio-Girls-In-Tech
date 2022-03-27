const router = require('express').Router();
const rescue = require('express-rescue');
const supplierTabel = require('../database/supplierTable');
const Supplier = require('../Supplier');

router.get('/', rescue(async (_req, res) => {
  const result = await supplierTabel.getSuppliers()
  return res.send(JSON.stringify(result));
}));

router.post('/', rescue(async (req, res) => {
  const data = req.body;
  const supplier = new Supplier(data);
  await supplier.createSupplier();
  return res.send(JSON.stringify(supplier));
}));

module.exports = router;