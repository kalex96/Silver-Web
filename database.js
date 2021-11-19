const mongoose = require('mongoose');

const URI = 'mongodb+srv://joseamigo:under008@cluster0.5mywa.mongodb.net/myFirstDatabase?retryWrites=true&w=majority'

mongoose.connect(URI)
    .then(db => console.log('Conectado con MongoDB Atlas'))
    .catch(err => console.error(err));

module.exports = mongoose;