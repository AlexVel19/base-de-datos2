const mongoose = require('mongoose')
const { Schema } = mongoose

const MantenimientoSchema = new Schema({

    mantenimiento_id: {
        type: Number,
        require: true
    },
    mantenimiento_fecha_r: {
        type: String,
        require: true
    },
    mantenimiento_tecnico:{
        type: String,
        require: true
    },
    mantenimiento_fecha_e: {
        type: String,
        require: true
    },
    mantenimiento_garantia_fecha: {
        type: String,
        require: true
    },
    mantenimiento_detalle: {
        type: String,
        require: true
    },
    mantenimiento_costo: {
        type: String,
        require: true
    },
    mantenimiento_incomp_tecnico: {
        type: Number,
        require: true
    }
    
})

module.exports = mongoose.model('Mantenimiento', MantenimientoSchema)