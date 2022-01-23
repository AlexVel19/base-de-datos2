const mongoose = require('mongoose')
const { Schema } = mongoose

const ProductoSchema = new Schema({

    producto_id: {
        type: Number,
        require: true
    },
    producto_tipo: {
        type: String,
        require: true
    },
    producto_nombre: {
        type: String,
        require: true
    },
    producto_precio: {
        type: String,
        require: true
    },
    producto_fecha_e: {
        type: Date,
        require: true
    },
    producto_stock: {
        type: String,
        require: true
    },
    producto_ventas: {
        type: String,
        require: true
    }
    
})

module.exports = mongoose.model('Producto', ProductoSchema)