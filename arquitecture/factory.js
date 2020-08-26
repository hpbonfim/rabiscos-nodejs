// FUNCTIONS FACTORY RETORNA OBJETOS SEM NEW()

function fakeName (lastName ,customProperties) {
    return {
        name: 'TESTE',
        lastName,
        ...customProperties
    }
}

function Z () {
    let teste;
    return teste = "ABC"
}

function Y (){
    return "XYZ"
}
function X (func1,funct2){
    return { func1, funct2 }

}
const qualquer = fakeName("last", { age: 33, anotherCustom: "ILoveCode", Z } )

console.log(qualquer)
console.log(qualquer.name)
console.log(qualquer.lastName)
console.log(qualquer.age)
console.log(qualquer.anotherCustom)
console.log(qualquer.Z())

console.log(fakeName())
console.log(X (Y(), Z()))

console.log(fakeName(X ("LOUCURA", Z())))
