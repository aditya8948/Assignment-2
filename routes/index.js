const express = require('express');
const router = express.Router();

const cartRoutes = require('./cartRoutes');
const productRoutes = require('./productRoutes');
const userRoutes = require('./userRoutes');


router.use('/users', userRoutes);
router.use('/products', productRoutes);
router.use('/cart', cartRoutes);

module.exports = router;
