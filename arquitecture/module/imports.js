let name = "teste"

function getName() {
    return name;
}

function setName(newName) {
    name = newName
}

module.exports = {
    getName,
    setName
}