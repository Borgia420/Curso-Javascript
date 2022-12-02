let str_nombre = "Ezequiel"
let str_apellido = "Coria"
let str_estudiante = str_nombre.concat(" ", str_apellido)
let str_estudianteMayus = str_estudiante.toUpperCase()
let str_estudianteMinus = str_estudiante.toLowerCase()
console.log(str_estudiante.length)
console.log(str_nombre.charAt(0))
console.log(str_apellido.charAt(4))
let resultado = str_estudiante.replace(" ","")
console.log(resultado)
console.log(str_estudiante.includes("Ezequiel"))


console.log(str_estudianteMinus)

/*Crea un archivo JS que contenga las siguientes líneas

- Una cadena de texto con tu Nombre

- Otra cadena de texto con tu Apellido

- Una cadena de texto que se llame "estudiante" concatenando tu Nombre y tu Apellido con un espacio entre medias

- Una cadena de texto que se llame "estudianteMayus" que contenga la cadena estudiante pero todo en mayúsculas

- Una cadena de texto que se llame "estudianteMinus" que contenga la cadena estudiante pero todo en minúsculas

- Una variable que contenga el número de letras de la cadena "estudiante" contando los espacios

- Una variable que contenga la primera letra del Nombre

- Otra variable que contenga la última letra del Apellido

- Una cadena de texto que elimine los espacios de la variable "estudiante"

- Una variable booleana que diga si el Nombre está contenido en la variable "estudiante"*/