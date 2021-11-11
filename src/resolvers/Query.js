const { typesUsers, users } = require('../data/db.js')

module.exports = {
    ola() {
      return 'Mateus'
    },
    dataCertaString() {
      return (new Date).toString()
    },
    dataCerta() {
      return (new Date)
    },
    userOn() {
      return {
        id: 7,
        nome: "Mateus Nascimento",
        email: "mateus@terra.com.br",
        idade: 29,
        salario_real: 12345.67,
        vip: true
      }
    },
    productOn() {
      return {
        name: "Pao",
        price: 15.69,
        discount: 0.0
      }
    },
    numbersList() {
      const swap = (a, b) => a - b
      return Array(6).fill(0)
              .map(n => parseInt(Math.random() * 60 + 1))
              .sort(swap)
      // return [4, 39, 47, 20, 12, 28]
    },
    getUsers() {
      return users
    },
    getUser(_, args) {
      const { id } = args
      const user = users.filter((element) => element.id == id)
      return user ? user[0]: null
    },
    getTypes() {
      return typesUsers
    },
    getType(_, args) {
      const { id } = args
      const type = typesUsers.filter((element) => element.id == id)
      return type ? type[0]: null
    }
}