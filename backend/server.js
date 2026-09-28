const express = require('express');
const app = express();
app.use(express.json());

app.get('/api/products', (req, res) => {
  res.json([{id: 1, name: "T-Shirt", price: 499}]);
});

app.post('/api/orders', (req, res) => {
  res.json({message: "Order placed successfully!"});
});

app.listen(5000, () => console.log("Server running"));