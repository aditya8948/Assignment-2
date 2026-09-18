const errorHandler = (err, req, res, next) => {
    const statusCode = err.statusCode || 500;
    const status = err.status || 'error';

    res.status(statusCode).json({
        success: false,
        statusCode: statusCode,
        status: status,
        message: err.message || 'Internal Server Error'
    });
};

module.exports = errorHandler;
