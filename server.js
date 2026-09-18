const express = require('express');
const routes = require('./routes');
const CustomError = require('./utils/customError');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', routes);

app.use((req, res, next) => {
    const err = new CustomError(`Cannot find ${req.originalUrl} on this server`, 404);
    next(err);
});

app.use(errorHandler);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
