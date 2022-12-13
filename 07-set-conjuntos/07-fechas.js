const fecha = new Date()
const miNacimiento = new Date(1993, 10, 5)
console.log(miNacimiento)
const comparacion = fecha > miNacimiento

const diaNacimiento = miNacimiento.getDate()
console.log(diaNacimiento)
const mesNacimiento = miNacimiento.getMonth() +1
console.log(mesNacimiento)
const añoNacimiento = miNacimiento.getFullYear()
console.log(añoNacimiento)
