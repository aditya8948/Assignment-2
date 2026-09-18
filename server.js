const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'VIEW', 'product.html'));
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
