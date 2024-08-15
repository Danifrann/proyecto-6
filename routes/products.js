const express = require('express');
const productController = require('../controllers/productController');
const auth = require('../auth');

const router = express.Router();

router.post('/create', auth, productController.createProduct);
router.get('/readall', productController.getAllProducts);
router.get('/readone/:id', productController.getProductById);
router.put('/update/:id', auth, productController.updateProduct);
router.delete('/delete/:id', auth, productController.deleteProduct);

module.exports = router;
