const argv = require('./config/yargs').argv;
var colors = require('colors');

const { crearTabla } = require('./multiplicar/multiplicar')
const { listarTabla } = require('./multiplicar/multiplicar')

let comando = argv._[0];
switch(comando){
    case 'listar':
        listarTabla(argv.base,argv.limite).then(archivo => console.log(`Lista creada: ${archivo}`))
        .catch(e => console.log(e));
    break;

    case 'crear':
        crearTabla(argv.base,argv.limite).then(archivo => console.log(`Archivo creado: ${archivo}`))
        .catch(e => console.log(e));
    break;

    default: 
        console.log('Comando no reconocido');
}

// let argv2 = process.argv;
// let parametro = argv[2];
//El split sirve para convertir un string en un arreglo.
// let base = parametro.split('=')[1]

console.log('Base',argv.base);
console.log('Limite',argv.limite);





