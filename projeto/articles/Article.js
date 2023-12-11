const Sequilize = require("sequelize")
const connection = require("../database/database")


const Article = connection.define('articles', {
    title : {
        type : Sequilize.STRING,
        allowNull : false
    },
    slug : {
        type :  Sequilize.STRING,
        allowNull : false
    },
    body : {
        type : Sequilize.TEXT,
        allowNull : false
    }
})


module.exports = Article