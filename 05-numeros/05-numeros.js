/*Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga tu altura en centímetros (entero)

- Una variable que contenga tu altura en metros (número de coma flotante)

- Una variable que contenga tu peso en kilogramos (número de coma flotante)

- Una variable que contenga tu altura en metros redondeada hacia arriba

- Una variable que contenga tu peso en kilogramos redondeado hacia abajo

- Una variable que contenga si "el máximo valor que se puede obtener en Javascript + 1" es igual al máximo valor que se puede obtener en Javascript*/
let altura_centimetros = 182
let altura_metros = 1.82
let peso_kilogramos = 85.4
let altura_red = Math.ceil(altura_metros)
let peso_red = Math.floor(peso_kilogramos)
let igualdad = Number.MAX_VALUE + 1 === Number.MAX_VALUE
console.log(igualdad)

