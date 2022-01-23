const mongoose = require('mongoose')
const { Schema } = mongoose

const ProveedorSchema = new Schema({

    proveedor_id: {
        type: Number,
        require: true
    },
    proveedor_nombre: {
        type: String,
        require: true
    },
    proveedor_correo: {
        type: String,
        require: true
    },
    proveedor_sitio_web: {
        type: String,
        require: true
    },
    proveedor_telefono: {
        type: String,
        require: true
    },
    proveedor_ruc: {
        type: String,
        require: true
    },
    proveedor_lugar: {
        type: String,
        require: true
    }
    
})

module.exports = mongoose.model('Proveedor', ProveedorSchema)