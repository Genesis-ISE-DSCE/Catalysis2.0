require('dotenv').config();
const {mongoConnect} = require('./database/connect')
const {user} = require('./database/UserModel')
const express = require('express');

const port = process.env.PORT || 3300;

const registerRoute = require('./routes/registerRoute')

const app = express();

app.use(express.json());

app.use('/api', registerRoute);

app.listen(port, () => {
    console.log('Server is live at port ' + port)
});