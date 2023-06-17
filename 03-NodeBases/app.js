
// const { argv, options } = require('yargs');
// const { boolean=false } = require('yargs');
const {crearArchivo} = require('/NodeCurso/helpers/multiplicar');
const argv = require('/NodeCurso/config/yargs');

console.clear();

crearArchivo(argv.base, argv.l, argv.h)
    .then( nombreAr => console.log(nombreAr, 'creado'))
    .catch(err => console.log(err));


    


