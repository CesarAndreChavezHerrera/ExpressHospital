const mongoose = require('mongoose')
const Schema = mongoose.Schema

const consutlaSchema = new Schema({
    dui:Number,
    nombre_doctor:String,
    enfermedar:String,
    decripcion:String,
    medicamento:String,
    cantidad:Number,
    condicion:String
})

const consultas_data = mongoose.model('consulta',consutlaSchema)

module.exports = consultas_data