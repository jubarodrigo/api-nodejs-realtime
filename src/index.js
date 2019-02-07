const express = require('express');
const mongoose = require('mongoose');

require('dotenv').load();

const app = express();

mongoose.connect(process.env.DB_HOST, { useNewUrlParser: true });

app.use(express.json());
app.use(require('./routes'));

app.listen(3000, () => {
    console.log('Server started on port 3000');
});
