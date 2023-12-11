const express = require("express")
const router = express()


router.get('/categories', (req, res) => {
    res.send("Rota de Categorias!")
})


router.get('/admin/categories/new', (req, res) => {
    res.send("Rota para criar uma nova categoria!")
})



module.exports = router