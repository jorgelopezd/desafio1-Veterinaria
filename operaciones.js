const fs = require('fs');

function registrar(nombre, edad, tipo, color, enfermedad){
    const citas = JSON.parse(fs.readFileSync('citas.json','utf8'));
    citas.push({
        nombre,
        edad,
        tipo,
        color,
        enfermedad,
    });

    fs.writeFileSync('citas.json',JSON.stringify(citas, null, 2));

    console.log('Cita registrada exitosamente')
}

function leer() {
    const citas = JSON.parse(fs.readFileSync('citas.json','utf8'));

    console.log('citas registradas ')
    console.log(citas);
}

module.exports = {
    registrar,
    leer
};