const doSomething = (callback) => {
        setTimeout(() => {
            callback(`First data`)
        }, 2000)
    }

const doAnotherThing = (callback) => { 
        setTimeout(() => {
            callback('Second ')
        }, 1300)
    }

function doAll() {
    try {
        doSomething((data) => {
            let process = data.split('')
            try {
                doAnotherThing((data2) => {
                    var process2 = data2.split('')
                    try {   
                        setTimeout(()=>{
                            console.log('data1: ', process)
                            console.log('data2: ', process2)
                        }, 2000)
                    } catch (err) {
                        const myError = new Error({
                            message: "aconteceu erro no 3 try",
                            data: {
                                type: err
                            }
                        })

                        throw myError
                    }   
                })      
            } catch (err) {
                const myError = new Error({
                    message: "aconteceu erro no 2 try",
                    data: {
                        type: err
                    }
                })

                throw myError
            }   
        })
    } catch (err) {
        const myError = new Error({
            message: "aconteceu erro no 1 try",
            data: {
                type: err
            }
        })

        throw myError
    }
    finally {
        if 
    }
}

doAll()