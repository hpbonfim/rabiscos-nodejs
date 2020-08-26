// PATTERN UTILIZADO PARA COLECIONAR FUNCTIONS E MONITORAR SEU COMPORTAMENTO, NOTIFICANDO QUANDO TEM MUDANCA DE ESTADO

class Observable {
    constructor(){
        this.observables = []
    }

    subscribe(funct) {
        this.observables.push(funct)
    }

    notify (data) {
        this.observables.forEach(hasChange => hasChange(data))
    }

    unsubscrible(funct) {
        this.observables = this.observables.filter(obs => obs !== funct)
    }
}

const observe = new Observable()

const logData1 = data => console.log(`Subscribe 1: ${data}`)
const logData2 = data => console.log(`Subscribe 2: ${data}`)
const logData3 = data => console.log(`Subscribe 3: ${data}`)

console.log(observe)
observe.subscribe(logData1)
console.log(observe)
observe.subscribe(logData2)
console.log(observe)
observe.subscribe(logData3)
observe.notify("mudou aqui")
console.log(observe)
observe.unsubscrible(logData2)
console.log(observe)
observe.unsubscrible(logData3)
console.log(observe)

console.log(observe)