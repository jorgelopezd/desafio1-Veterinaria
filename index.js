const {registrar,leer} = require('./operaciones.js')

const [, ,operacion, ...args ] = process.argv;

if(operacion === "registrar"){
    const [nombre, edad, tipo, color, enfermedad] = args;
    registrar(nombre, edad, tipo, color, enfermedad);
}else if (operacion === 'leer'){
    leer();
}else{
    console.log('operacion no valida. tienes que usar registrar o leer')
}
