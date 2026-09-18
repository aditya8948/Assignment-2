const productService = require('../services/productService');
const CustomError = require('../utils/customError');

const getAllProducts = (req, res, next) => {
    try {
        const products = productService.getAllProducts();
        res.send(products);
    } catch (err) {
        next(err);
    }
};

const createProduct = (req, res, next) => {
    try {
        const result = productService.createProduct();
        res.send(result);
    } catch (err) {
        next(err);
    }
};

const getProductById = (req, res, next) => {
    try {
        if (!req.params.id) {
            return next(new CustomError("Product ID is required", 400));
        }
        const product = productService.getProductById(req.params.id);
        res.send(product);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllProducts,
    createProduct,
    getProductById
};
