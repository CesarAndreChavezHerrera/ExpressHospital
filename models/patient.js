const patientSchema = new Schema({
    name: String,
    last_n: String,
    edad: Number,
    dir: Number,
})

// crear modelo
const Patient = mongoose.model('pasientes', patientSchema);