const mongoose = require('mongoose')
const { Schema } = mongoose

const ClienteSchema = new Schema({

    cliente_id: {
        type: Number,
        require: true
    },
    cliente_nombre: {
        type: String,
        require: true

    },
    cliente_apellido: {
        type: String,
        require: true
    },
    cliente_ci: {
        type: String,
        require: true
    },
    cliente_correo: {
        type: String,
        require: true
    },
    cliente_direccion: {
        type: String,
        require: true
    },
    cliente_telefono: {
        type: String,
        require: true
    }


})

module.exports = mongoose.model('Cliente', ClienteSchema)