const { getName, setName } = require("./module/imports.js")

console.log(getName())
console.log(setName('novo nome'))
console.log(getName())
let nome = getName()
console.log(nome)