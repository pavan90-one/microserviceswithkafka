const express = require('express');
const app = express();
const PORT = process.env.PORT || 3000;

app.use(express.json());

app.get('/', (req, res) => {
  res.send('Doctor service is running');
});

app.listen(PORT, () => {
  console.log(`Doctor service listening on port ${PORT}`);
});
