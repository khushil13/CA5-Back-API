const express = require('express');
const authRoutes = require('./routes/auth.js');

const app = express();
const PORT = 3000;

app.use(express.json());
app.use('/', authRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
