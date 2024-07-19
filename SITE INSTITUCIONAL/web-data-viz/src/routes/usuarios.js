var express = require("express");
var router = express.Router();

var usuarioController = require("../controllers/usuarioController");

router.post("/cadastrar", function (req, res) {
    usuarioController.cadastrar(req, res);
})

router.post("/cadastrarperfil", function (req, res) { // rota para salvar as informações do perfil no banco de dados
    usuarioController.cadastrarperfil(req, res);
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

router.post("/salvarInfos", function (req, res) { // rota para salvar as informações do perfil no banco de dados
    usuarioController.salvarInfos(req, res);
});

router.get("/rankingquiz", function (req, res) { // rota get para processar a requisição para gerar resposta
    usuarioController.rankingquiz(req, res);
});



module.exports = router;