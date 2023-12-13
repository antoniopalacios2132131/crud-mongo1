const mongoose = require('mongoose')
const Schema = mongoose.Schema
const alumnoSchema = new Schema ({
    Titulo: String,
    Genero:String,
    Descripcion:String,
    Duracion:Number
}, {versionKey:false})
module.exports = mongoose.model('alumnos', alumnoSchema)