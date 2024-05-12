const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

// Mock data
const products = [{ id: 1, name: 'Laptop' }, { id: 2, name: 'Smartphone' }];

app.get('/api/products', async (req, res) => {
  res.json(products);
});

const server = app.listen(3000, () => {
  console.log('Serverless Products Service listening on port 3000');
});

module.exports.handler = server;