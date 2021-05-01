const mongoose = require('../../database');

const CidadeSchema = new mongoose.Schema({
    nome: {
        type: String,
        require: true,
    },
    estado: {
        type: String,
        require: true,
    },
    createdAt: {
        type: Date,
        default: Date.now,
    },
})

const Cidade = mongoose.model('Cidade', CidadeSchema);

module.exports = Cidade;