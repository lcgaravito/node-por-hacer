const descripcion = {
    demand: true,
    alias: 'd',
    desc: 'Descripción de la tarea por hacer'
}
const completado = {
    default: true,
    alias: 'c',
    desc: 'Marca como completado o pendiente la tarea'
}
const completadoOpcional = {
    demand: false,
    alias: 'c',
    desc: 'Descripción del tipo de tareas por ver (Completadas / No completadas)'
}

const argv = require('yargs')
    .command('crear', 'Crear un elemento por hacer', {
        descripcion
    })
    .command('actualizar', 'Actualiza el estado completado de una tarea', {
        descripcion,
        completado
    })
    .command('borrar', 'Elimina un elemento del listado de tareas', {
        descripcion
    })
    .command('listar', 'Muestra en pantalla las tareas', {
        completadoOpcional
    })
    .help()
    .argv;

module.exports = {
    argv
}