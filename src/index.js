const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://juba:07032001@cluster0-gbckv.mongodb.net/test?retryWrites=true',{
    useNewUrlParser: true
});

app.use(require('./routes'));

app.listen(3000, () =>{
    console.log('Server started on port 3000');
});

