//conexión a tabla pasientes en mongodb
/*mongoose.connect('mongodb://localhost:27017/diagnosticos', {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log("Se establecio conexion a mongodb"))
.catch((e) => console.log("Error", e))*/

const diagnostigSchema = new Schema({
    name_patology: String,
    description: String,
})

// crear modelo
const Diagnostico = mongoose.model('diagnostico', diagnostigSchema);