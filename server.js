const express = require('express');
const path = require('path');

const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get('/api/products', (req, res) => {
    res.sendFile(path.join(__dirname, 'VIEW', 'product.html'));
});

app.post('/api/products', (req, res) => {
    console.log(req.body);
    res.json(req.body);
});

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});
