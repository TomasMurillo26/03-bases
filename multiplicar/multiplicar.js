const fs = require('fs');
var colors = require('colors');


let listarTabla = (base,limite) => {

    console.log('=========================='.green);
    console.log(`Tabla de multiplicar del ${base}`.green);
    console.log('=========================='.green);

    return new Promise((resolve, reject) => {
        if(!Number(base) && !Number(limite)){
            if(base >= 0 || limite >=0 ){
                reject (`El valor no puede ser menor a 0`);
                return;
            }
            reject('El valor debe ser un número');
            return;
        }else{
            let data = '';

            for (let j = 1; j <= limite; j++) {
                data += `${base} x ${j} = ${base * j} \n`;
            }

            resolve(`Tabla de multiplicar del ${base} con limite de ${limite} es:
            ${data}`);
            
        }

    })
}

let crearTabla = (base, limite) => {
    return new Promise((resolve, reject) => {

        if(!Number(base)){
            reject(`El valor introducido ${base}, no es un número`);
            return; 
        }

        let data = '';

        for (let j = 1; j <= limite; j++) {
            data += `${base} x ${j} = ${base * j} \n`;
        }

        fs.writeFile(`tablas/tabla-${base}-limite-${limite}.txt`, data, (err) => {

            if (err) 
                reject(err)
            else 
                resolve(`tabla-${base}.txt`);

            console.log(`El archivo tabla-${base}.txt ha sido creado`);
        });

    });

}

//Exportando la función hacia otra pagina
module.exports = {
    crearTabla,
    listarTabla
}



