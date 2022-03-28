const router = require('express').Router();
const supplierTabel = require('../database/supplierTable');
const Supplier = require('../Supplier');

router.get('/', async (_req, res) => {
  const result = await supplierTabel.getSuppliers()
  res.send(JSON.stringify(result));
});

router.post('/', async (req, res) => {
  const data = req.body;
  const supplier = new Supplier(data);
  await supplier.createSupplier();
  res.send(JSON.stringify(supplier));
});

router.get('/:supplierId', async (req, res) => {
  try {
    const { supplierId } = req.params;
    const supplier = new Supplier({ id: supplierId });
    await supplier.getSupplier();
    res.send(JSON.stringify(supplier));
  } catch (error) {
    res.send(JSON.stringify({
      message: error.message
    }));
  };
});

router.put('/:supplierId', async (req, res) => {
  try {
    const { id } = req.params;
    const data = req.body;
    const result = Object.assign({}, data, { id: id });
    const supplier = new Supplier(result);
    await supplier.updateSupplier();
    res.end();
  } catch (error) {
    res.send(JSON.stringify({
      message: error.message
    }));
  };
});

module.exports = router;