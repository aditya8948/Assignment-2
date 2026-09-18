const CustomError = require('../utils/customError');

const getAllUsers = (req, res, next) => {
    try {
        res.send("Fetching all users");
    } catch (err) {
        next(err);
    }
};

const createUser = (req, res, next) => {
    try {
        res.send("Adding a new user");
    } catch (err) {
        next(err);
    }
};

const getUserById = (req, res, next) => {
    try {
        if (!req.params.id) {
            return next(new CustomError("User ID is required", 400));
        }
        res.send(`Fetching user with ID: ${req.params.id}`);
    } catch (err) {
        next(err);
    }
};

module.exports = {
    getAllUsers,
    createUser,
    getUserById
};
