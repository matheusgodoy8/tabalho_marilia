const express = require("express")
const router = express()
const Usuario = require("./Usuario")


router.get('/login', (req, res) => {
    res.render('login')
})


router.post('/logar', async (req, res) => {
    try {
        const { email, password } = req.body;

        const usuario = await Usuario.findOne({
            where: {
                login : email, senha:password
            }
        });

        if (usuario) {
            return res.redirect('/');
        }else{
           return res.redirect('/login');
        }
    } catch (error) {
        console.error(error);
        res.redirect('/login');
    }
})



module.exports = router