//Singleton é um pattern design para criar uma instância APENAS UMA VEZ e retorná-la sempre que necesário 

const SETTINGS = {
    name: "t"
}

function Singleton(){
    if (!Singleton.instance) {
        Singleton.instance = this;
    }
    return Singleton.instance;
}

const teste = Singleton.call({testezera: "instanciado com sucesso", SETTINGS })
const teste2 = Singleton.call({testes: "ja era :( ", SETTINGS})
const testezeraMaster = Singleton.call({testes: "não consigo mais chamar de outra coisa :( ", SETTINGS})


console.log(teste) // FIRST AND UNIQUE
console.log(teste2.SETTINGS.testes) // UNDEFINED
console.log(testezeraMaster.SETTINGS) // RENAMED AND UNIQUE WITH PROPERTIES