//conexión a tabla pasientes en mongodb
/*mongoose.connect('mongodb://localhost:27017/medicamento', {useNewUrlParser:true, useUnifiedTopology:true})
.then(() => console.log("Se establecio conexion a mongodb"))
.catch((e) => console.log("Error", e))*/

const medicamentoSchema = new Schema({
    name_medicamento: String,
    description: String,
    miligramos: Number
})

// crear modelo
const Medicina = mongoose.model('medicina', medicamentoSchema);