const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.get('/', (req, res) => {
  res.send('Hello, World! Welcome to the server.');
  console.log('Welcome to the server message logged.');
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});