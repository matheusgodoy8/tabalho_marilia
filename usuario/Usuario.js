const Sequilize = require("sequelize")
const connection = require("../database/database")


const Usuario = connection.define('usuarios', {
    login : {
        type : Sequilize.STRING,
        allowNull : false
    },
    senha : {
        type :  Sequilize.STRING,
        allowNull : false
    },
   nome: {
        type :  Sequilize.STRING,
        allowNull : false
    },
    telefone: {
        type :  Sequilize.STRING,
        allowNull : false
    }
})

Usuario.sync({force: false}).then(() => {
    console.log("Tabela Usuario Criada Com Sucesso!")
}).catch((error) => {
    console.log(error)
})

module.exports = Usuario