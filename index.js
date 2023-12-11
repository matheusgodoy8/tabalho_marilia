const express = require("express")
const app = express()
const bodyParser = require("body-parser")
const connection = require('./database/database')
const usuarioController = require("./usuario/UsuariosController")
const Estoque = require("./estoque/Estoque")
const Usuarios = require("./usuario/Usuario")
const port = 8080


app.set('view engine', 'ejs')

app.use(bodyParser.urlencoded({extended : false}))
app.use(bodyParser.json())

app.use(express.static('public'))

app.use('/', usuarioController)


connection
    .authenticate()
        .then(() => {
            console.log("Conexão feita com sucesso!")
        }).catch((error) => {
            console.log(error)
        })



app.get("/", (req, res) => {
    Estoque.findAll({
    }).then(estoques =>{
        if (estoques != undefined){
            Usuarios.findAll().then(usuarios =>{
                res.render('index', {
                    estoques : estoques,
                    fonecedores : usuarios,
                })
            })
        }else{
            res.redirect('/login')
        }
})
})


app.listen(port, () =>{
    console.log("O Servidor está rodando na porta", port)
})