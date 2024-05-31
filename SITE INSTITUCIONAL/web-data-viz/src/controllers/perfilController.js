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

    // var nomecaractere = nome.length;
    // var confirmaçãosenha = senha;

    // var indice_arroba = email.indexOf('@');

    // Faça as validações dos valores
    // if (nome == undefined) {
    //     res.status(400).send("Seu nome está undefined!");
    // } else if (email == undefined) {
    //     res.status(400).send("Seu email está undefined!");
    // } else if (senha == undefined) {
    //     res.status(400).send("Sua senha está undefined!");
    // } else if (empresaId == undefined) {
    //     res.status(400).send("Sua empresa está undefined!");
    // } else if (nomecaractere <= 1) {
    //     res.status(400).send("Seu nome deve possuir mais de uma letra!");
    // } else if (confirmaçãosenha != senha) {
    //     res.status(400).send("Insira a mesma senha inserida no campo acima!");
    // } else if (senha <= 6) {
    //     res.status(400).send("Insira uma senha mais forte! com mais caracteres!");
    // } else if (indice_arroba < 0) {
    //     res.status(400).send("Seu email precisa ter um arroba!( @ )");
    // } else {



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

