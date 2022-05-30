const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pacienteSchema = new Schema({
    dui:Number,
    nombre_doctor:String,
    enfermedar:String,
    decripcion:String,
    medicamento:String,
    cantidad:Number,
    condicion:String
})

const paciente_data = mongoose.model('paciente',pacienteSchema)

module.exports = paciente_data