const obj = {
    nombre:"Ezequiel",
    apellido:"Coria",
    edad:29,
    altura:182,
    eresDesarrollador:true
}

const edad = obj.edad
console.log(edad)

const lista = [
    {...obj},
    {
    nombre:"Franco",
    apellido:"Stoll",
    edad:24,
    altura:180,
    eresDesarrollador:true
    },{
    nombre:"Teo",
    apellido:"Giampietro",
    edad:25,
    altura:182,
    eresDesarrollador:true
    }
]

const listaOrdenada = lista.sort((a, b) => b.edad - a.edad)
console.log(listaOrdenada)