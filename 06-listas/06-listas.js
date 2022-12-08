/*Crea un archivo JS que contenga las siguientes líneas

- Una variable que contenga la lista de la compra (mínimo 5 elementos)

- Modifica la lista de la compra y añádele "Aceite de Girasol"

- Vuelve a modificar la lista de la compra eliminando "Aceite de Girasol"

- Una lista de tus 3 películas favoritas (objetos con propiedades: titulo, director, fecha)

- Una nueva lista que contenga las películas posteriores al 1 de enero de 2010 (utilizando filter)

- Una nueva lista que contenga los directores de la lista de películas original (utilizando map)

- Una nueva lista que contenga los títulos de la lista de películas original (utilizando map)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando concat)

- Una nueva lista que concatene la lista de directores y la lista de los títulos (utilizando el factor de propagación)*/

const listaCompra = ["agua", "pan", "leche", "carne", "frutas"]
listaCompra.push("aceite de girasol")
console.log(listaCompra)
listaCompra.pop()
console.log(listaCompra)

const listaPeliculas = [
    {titulo:"Godzilla" ,director:"Gareth Edwards" ,fecha:2014},
    {titulo:"Godzilla: King of the Monsters" ,director:"Michael Dougherty" ,fecha:2019},
    {titulo:"Pacific Rim" ,director:"Guillermo del Toro" ,fecha:2013}
]
const peliculasPost = listaPeliculas.filter(año => año.fecha > 2010)
console.log(peliculasPost)
const listaDirectores = listaPeliculas.map(pelicula => {
    return pelicula.director
})
console.log(listaDirectores)
const listaTitulos = listaPeliculas.map(pelicula =>{
    return pelicula.titulo
})
console.log(listaTitulos)
const directores_titulos = listaDirectores.concat(listaTitulos)
console.log(directores_titulos)
const directores_titulos2 = [...listaDirectores, ...listaTitulos]
console.log(directores_titulos2)

