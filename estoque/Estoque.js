const Sequilize = require("sequelize")
const connection = require("../database/database")


const Estoque = connection.define('estoque', {
    quantidade : {
        type : Sequilize.INTEGER,
        allowNull : false
    },
    nome : {
        type :  Sequilize.STRING,
        allowNull : false
    },
    descricao: {
        type :  Sequilize.TEXT,
        allowNull : false
    },
    preco: {
        type :  Sequilize.DOUBLE,
        allowNull : false
    }

})

Estoque.sync({force: false}).then(() => {
    console.log("Tabela Estoque Criada Com Sucesso!")
}).catch((error) => {
    console.log(error)
})

module.exports = Estoque