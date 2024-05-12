const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors());
app.use(express.json());

// Mock data
const users = [{ id: 1, name: 'Alice' }, { id: 2, name: 'Bob' }];

app.get('/api/users', async (req, res) => {
  res.json(users);
});

const server = app.listen(3000, () => {
  console.log('Serverless Users Service listening on port 3000');
});

module.exports.handler = server;