const mongoose = require('mongoose')
const { Schema } = mongoose

const VentaSchema = new Schema({

    ventas_id: {
        type: Number,
        require: true
    },
    ventas_fecha: {
        type: Date,
        require: true
    },
    ventas_cantidad: {
        type: String,
        require: true
    },
    ventas_subtotal: {
        type: String,
        require: true
    },
    ventas_ivar: {
        type: String,
        require: true
    },
    ventas_total: {
        type: String,
        require: true
    },
    ventas_forma_pago: {
        type: String,
        require: true
    },
    ventas_cliente: {
        type: Date,
        require: true
    },
    ventas_producto: {
        type: Date,
        require: true
    }
    
})

module.exports = mongoose.model('Ventas', VentaSchema)