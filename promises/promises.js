const doSomethingPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(`First data`)
        }, 2000)
    })

const anotherPromise = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve('Second promise')
        }, 1300)
    })

// LANCA A PRIMEIRA PROMISSE QUE RESOLVER PRIMEIRO
Promise.race([doSomethingPromise(), anotherPromise()])
.then(data => {
    console.log(`promise race: `,data.split(``))
})
.catch((err) => {
    console.log(err)
})

// RESOLVE PROMISSES EM PARALELO
Promise.all([doSomethingPromise(), anotherPromise()])
.then((data) => {
    console.log(`promisse all: `,data)
})

// RESOLVE PROMISSES EM SEQUENCIA
doSomethingPromise()
.then(data => {
    console.log(`promisse sequencial: `,data.split(''))
    return anotherPromise()
})
.then(data2 => console.log(data2.split(``)))
.catch(err => console.log('erro: ', err))
