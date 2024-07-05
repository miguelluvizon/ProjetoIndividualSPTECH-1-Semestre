var perfilModel = require("../models/perfilModel");

function autenticar(req, res) {
    var jogofav = req.body.jogofavServer;
    var jogoplat = req.body.jogoplatServer;
    var jogoestilo = req.body.jogoestiloServer;

    // if (email == undefined) {
    //     res.status(400).send("Seu email está indefinida!");
    // } else if (senha == undefined) {
    //     res.status(400).send("Sua senha está indefinida!");
    // } else {

        perfilModel.autenticar(jogofav, jogoplat, jogoestilo)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                                if (resultadoAutenticar.length > 0) {
                                    res.json({
                                        id: resultadoAutenticar[0].idperfilgamer,
                                        jogofav: resultadoAutenticar[0].jogofav,
                                        jogoplat: resultadoAutenticar[0].jogoplat,
                                        jogoestilo: resultadoAutenticar[0].jogoestilo
                                    });
                                } else {
                                    res.status(204).json({ aquarios: [] });
                                }
                            
                    } else if (resultadoAutenticar.length == 0) {
                        res.status(403).send("Email e/ou senha inválido(s)");
                    } else {
                        res.status(403).send("Mais de um usuário com o mesmo login e senha!");
                    }
                }
            ).catch(
                function (erro) {
                    console.log(erro);
                    console.log("\nHouve um erro ao realizar o login! Erro: ", erro.sqlMessage);
                    res.status(500).json(erro.sqlMessage);
                }
            );
    }

// }

function cadastrar(req, res) {
    // Crie uma variável que vá recuperar os valores do arquivo cadastro.html
    var jogofav = req.body.jogofavServer;
    var jogoplat = req.body.jogoplatServer;
    var jogoestilo = req.body.jogoestiloServer;

    // Passe os valores como parâmetro e vá para o arquivo usuarioModel.js
    perfilModel.cadastrar(jogofav, jogoplat, jogoestilo)
        .then(
            function (resultado) {
                res.json(resultado);
            }
        ).catch(
            function (erro) {
                console.log(erro);
                console.log(
                    "\nHouve um erro ao realizar o cadastro! Erro: ",
                    erro.sqlMessage
                );
                res.status(500).json(erro.sqlMessage);
            }
        );
}
// }

function funcaobarrar(req,res){
    var idusuario = req.body.idusuarioServer
    perfilModel.funcaobarrar(idusuario)
    .then(
        function (funcaobarrarResultado) {

            res.json({
                funcaobarrarResultado
            });
}
    )
}

module.exports = {
    autenticar,
    cadastrar,
    funcaobarrar
}

