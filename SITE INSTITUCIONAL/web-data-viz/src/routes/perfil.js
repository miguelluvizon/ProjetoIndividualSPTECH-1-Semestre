var express = require("express");
var router = express.Router();

var perfilController = require("../controllers/perfilController");

//Recebendo os dados do html e direcionando para a função cadastrar de perfilController.js
router.post("/cadastrar", function (req, res) {
    perfilController.cadastrar(req, res);
})

router.post("/autenticar", function (req, res) {
    perfilController.autenticar(req, res);
});

router.post("/funcaobarrar", function (req, res) {
    perfilController.autenticar(req, res);
}
)

module.exports = router;