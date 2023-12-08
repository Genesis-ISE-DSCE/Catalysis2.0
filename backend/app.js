const express = require('express');
const app = express();

const connectDB = require('./database/connect');
const registerRoute = require('./routes/registerRoute');
const massMailerRoute = require('./routes/massMailRoute');

require('dotenv').config();
const cors = require('cors');

app.use(cors());
app.use(express.json());

app.use('/api/v1', registerRoute);
app.use('/api/v1', massMailerRoute);

const port = process.env.PORT || 5000;

const startServer = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    console.log('Database connection established successfully...');
    app.listen(port, console.log(`Server started on port ${port}...`));
  } catch (err) {
    console.log(err);
  }
};

startServer();