const { typesUsers } = require('../data/db.js')

module.exports = {
    salario(user) {
      return user.salario_real
    },
    type_id(user) {
      const type = typesUsers.filter((element) => element.id == user.type_id)
      return type ? type[0]: null
    }
}