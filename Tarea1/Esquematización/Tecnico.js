const mongoose = require('mongoose')
const { Schema } = mongoose

const TecnicoSchema = new Schema({

    tecnico_id: {
        type: Number,
        require: true
    },
    tecnico_nombre: {
        type: String,
        require: true
    },
    tecnico_apellido: {
        type: String,
        require: true
    },
    tecnico_fechanacimiento: {
        type: Date,
        require: true
    },
    tecnico_ci: {
        type: Date,
        require: true
    },
    tecnico_genero: {
        type: Number,
        require: true
    },
    tecnico_tipo: {
        type: Number,
        require: true
    }
    
})

module.exports = mongoose.model('Tecnico', TecnicoSchema)