const CustomError = require('../utils/customError');

const getCartByUserId = (req, res, next) => {
    try {
        if (!req.params.userId) {
            return next(new CustomError("User ID is required", 400));
        }
        res.send(`Fetching cart for user with ID: ${req.params.userId}`);
    } catch (err) {
        next(err);
    }
};

const addToCart = (req, res, next) => {
    try {
        if (!req.params.userId) {
            return next(new CustomError("User ID is required", 400));
        }
        res.send(`Adding product to cart for user with ID: ${req.params.userId}`);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getCartByUserId,
    addToCart
};
