const mongoose = require('../../database');

const ClienteSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    sexo: {
        type: String,
        require: true,
    },
    nascimento: {
        type: String,
        require: true,
    },
    idade: {
        type: Number,
        require: true,
    },
    cidade: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Cliente = mongoose.model('Cliente', ClienteSchema);

module.exports = Cliente;