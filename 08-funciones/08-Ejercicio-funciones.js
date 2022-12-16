function devolverTrue() {
    return true
}
const funciona = devolverTrue()
console.log(funciona)

async function holaPromesa() {
    return setTimeout(() => console.log("Hola soy una promesa"), 5000)
}

const prom = holaPromesa()
console.log(holaPromesa)

function* paresAuto(){
    let id = 0
    while(true){
        yield id += 2
    }
}
const gen = paresAuto()
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)
console.log(gen.next().value)

