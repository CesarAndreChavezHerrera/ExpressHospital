const mongoose = require('mongoose')
const Schema = mongoose.Schema

const pacienteSchema = new Schema({
    dui:Number,
<<<<<<< HEAD
    nombre:String})
=======
    nombre_doctor:String,
})
>>>>>>> 18b7edd7d218abff3b56785794e795f9fce0ca4d

const paciente_data = mongoose.model('paciente',pacienteSchema)

module.exports = paciente_data