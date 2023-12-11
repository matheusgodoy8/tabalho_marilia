const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require('./database/database')
const categoiresController = require("./categories/CategoriesController")
const articlesController = require("./articles/ArticlesController")
const port = 8080


app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.use(express.static('public'))

app.use('/', categoiresController)
app.use('/', articlesController)


connection
    .authenticate()
        .then(() => {
            console.log("Conexão feita com sucesso!")
        }).catch((error) => {
            console.log(error)
        })



app.get("/", (req, res) => {
    res.render('index')
})


app.listen(port, () =>{
    console.log("O Servidor está rodando na porta", port)
})