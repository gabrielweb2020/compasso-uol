const mongoose = require('mongoose');

mongoose.connect('mongodb://localhost:27017/compasso-uol', { useUnifiedTopology: true, useNewUrlParser: true, useFindAndModify: false });
mongoose.Promise = global.Promise;

module.exports = mongoose;