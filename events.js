const EventEmitter = require('events')

class Users extends EventEmitter {
    userLogged(data) {
        setTimeout(() => {
            this.emit('user logado', data)
        }, 2000)
    }
}

const user = new Users()

user.userLogged({user: 'Fake User'})

user.on('Usuario logado', data => {
    return console.log(data)
})
