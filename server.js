const express = require('express');
const cors = require('cors');
const app = express();

const port = process.env.PORT || 5000;

products = [];
products.push({'quantity': 1, 'name': 'Boots'});
products.push({'quantity': 2, 'name': 'Socks'});
products.push({'quantity': 0, 'name': 'Jackets'});

app.use(cors())

app.get('/', (req, res) => {
  res.json(products);
});

app.listen(port, () => console.log(`Listening on port ${port}`));