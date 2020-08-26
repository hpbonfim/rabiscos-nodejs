const DATA = require('./data.json')
const fetch = require('node-fetch')

const asyncTimer = () => 
    new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(DATA)
        }, 2000) 
    })

const asyncFn = async () => {
    return await Promise.all([
        asyncTimer(),
        fetch('http://google.com.br/')
        .then(res => res.toString())
        .catch(err => { throw new Error(`vish, fodeu...`, err)})
    ])
}

asyncFn()
.then(response => {
    console.log(response)
})
.catch((err) => {
    throw new Error(`vacilou`, console.error(err))
})