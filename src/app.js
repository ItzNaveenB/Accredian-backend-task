const express = require('express');
const bodyParser = require('body-parser');
require('dotenv').config();
const referralRoutes = require('./routes/referralRoutes');
const errorHandler = require('./middlewares/errorHandler');

const app = express();

app.use(bodyParser.json());
app.use('/api/referral', referralRoutes);
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
