const Alumno = require('../model/Alumno')

module.exports.mostrar = (req, res)=>{
    Alumno.find({}, (error, alumnos)=>{
        if(error) {
            return res.status(500).json({
                message: 'Error mostrando los alumnos'
            })
        }
        return res.render('index', {alumnos: alumnos})
    })
}

module.exports.crear = (req, res)=>{

    const alumno = new Alumno({
        Titulo: req.body.Titulo,
        Genero: req.body.Genero,
        Descripcion: req.body.Descripcion,
        Duracion: req.body.Duracion
    })
    alumno.save(function(error,alumno){
        if(error){
            return res.status(500).json({
                message: 'Error al crear el Alumno'
            })
        }
        res.redirect('/')
    })
}

module.exports.editar = (req,res)=>{
    const id = req.body.id_editar
    const Titulo = req.body.titulo_editar
    const Genero = req.body.genero_editar
    const Descripcion = req.body.descripcion_editar
    const Duracion = req.body.duracion_editar
    Alumno.findByIdAndUpdate(id, {Titulo,Genero,Descripcion, Duracion}, (error, alumno)=>{
        if(error){
            return res.status(500).json({
                message: 'Error actualizando el Alumno'
            })
        }
        res.redirect('/')
    })
}

module.exports.borrar = (req, res)=>{
    const id = req.params.id
    Alumno.findByIdAndRemove(id, (error, alumno)=>{
        if(error){
            return res.status(500).json({
                message: 'Error eliminando el Alumno'
            })
        }
        res.redirect('/')
    })
}