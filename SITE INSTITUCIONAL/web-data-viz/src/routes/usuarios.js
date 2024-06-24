var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

//Recebendo os dados do html e direcionando para a função cadastrar de usuarioController.js
router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    usuarioController.autenticar(req, res);
});

router.post("/jogarbanco", function (req, res) {
    usuarioController.jogarbanco(req, res);
});

router.post("/usuarioquiz", function (req, res) {
    usuarioController.usuarioquiz(req, res);
});

router.post("/quizdados", function (req, res) {
    usuarioController.quizdados(req, res);
});

router.get("/quizdadostemporeal", function (req, res) {
    usuarioController.quizdadostemporeal(req, res);
});



module.exports = router;