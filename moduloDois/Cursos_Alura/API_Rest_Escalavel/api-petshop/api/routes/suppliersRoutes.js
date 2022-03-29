const router = require('express').Router();
const supplierTabel = require('../database/supplierTable');
const Supplier = require('../Supplier');

router.get('/', async (_req, res) => {
  const result = await supplierTabel.getSuppliers()
  res.status(200).send(JSON.stringify(result));
});

router.post('/', async (req, res, next) => {
  try {
    const data = req.body;
    const supplier = new Supplier(data);
    await supplier.createSupplier();
    res.status(201).send(JSON.stringify(supplier));
  } catch (error) {
    next(error);
  }
});

router.get('/:supplierId', async (req, res, next) => {
  try {
    const { supplierId } = req.params;
    const supplier = new Supplier({ id: supplierId });
    await supplier.getSupplier();
    res.status(200).send(JSON.stringify(supplier));
  } catch (error) {
    next(error);
  };
});

router.put('/:supplierId', async (req, res, next) => {
  try {
    const { supplierId } = req.params;
    const data = req.body;
    const result = Object.assign({}, data, { id: supplierId });
    const supplier = new Supplier(result);
    await supplier.updateSupplier();
    res.status(204).end();
  } catch (error) {
    next(error);
  };
});

router.delete('/:supplierId', async (req, res, next) => {
  try {
    const { supplierId } = req.params;
    const supplier = new Supplier({ id: supplierId });
    await supplier.getSupplier();
    await supplier.deleteSupplier();
    res.status(204).end();
  } catch (error) {
    next(error);
  };
});

module.exports = router;