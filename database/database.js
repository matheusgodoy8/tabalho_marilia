const Sequelize = require('sequelize')
const connection = new Sequelize('estoque', 'root', 'root', {
    host: 'localhost',
    dialect: 'mysql'
})


module.exports = connection