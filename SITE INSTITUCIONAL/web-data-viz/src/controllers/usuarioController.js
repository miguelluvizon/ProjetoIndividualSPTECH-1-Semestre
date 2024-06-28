var usuarioModel = require("../models/usuarioModel");

function autenticar(req, res) {
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;

    if (email == undefined) {
        res.status(400).send("Seu email está indefinida!");
    } else if (senha == undefined) {
        res.status(400).send("Sua senha está indefinida!");
    } else {

        usuarioModel.autenticar(email, senha)
            .then(
                function (resultadoAutenticar) {
                    console.log(`\nResultados encontrados: ${resultadoAutenticar.length}`);
                    console.log(`Resultados: ${JSON.stringify(resultadoAutenticar)}`); // transforma JSON em String

                    if (resultadoAutenticar.length == 1) {
                        console.log(resultadoAutenticar);

                        if (resultadoAutenticar.length > 0) {
                            res.json({
                                idusuario: resultadoAutenticar[0].idusuario,
                                email: resultadoAutenticar[0].email,
                                nome: resultadoAutenticar[0].nome,
                                senha: resultadoAutenticar[0].senha
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

}

function cadastrar(req, res) {
    var nome = req.body.nomeServer;
    var email = req.body.emailServer;
    var senha = req.body.senhaServer;
    var idusuario = req.body.idusuarioServer;

    usuarioModel.cadastrar(nome, email, senha, idusuario)
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

function cadastrarperfil(req, res) {
    var nome = req.body.nomeServer;
    var idusuario = req.body.idusuarioServer;

    usuarioModel.cadastrarperfil(nome, idusuario)
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




function jogarbanco(req, res) {
    var certas = req.body.respostasCorretasServer;
    var erradas = req.body.respostasIncorretasServer;
    var idusuario = req.body.idusuarioServer;

    usuarioModel.jogarbanco(certas, erradas, idusuario)
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

function usuarioquiz(req, res) {
    var idusuario = req.body.idusuarioServer;

    usuarioModel.usuarioquiz(idusuario)
        .then(
            function (resultadoChamar_Quiz) {
                res.json({
                    resultadoChamar_Quiz
                });
            }
        )
}

function quizdados(req, res) {
    var idusuario = req.body.idusuarioServer;

    usuarioModel.quizdados(idusuario).then(function (resultado) {
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}


function quizdadostemporeal(req, res) {
    usuarioModel.quizdadostemporeal(idusuario).then(function (resultado) {
        var idusuario = req.body.idusuarioServer;
        if (resultado.length > 0) {
            res.status(200).json(resultado);
        } else {
            res.status(204).send("Nenhum resultado encontrado!");
        }
    }).catch(function (erro) {
        console.log(erro);
        console.log("Houve um erro ao buscar as ultimas medidas.", erro.sqlMessage);
        res.status(500).json(erro.sqlMessage);
    });
}

function salvarInfos(req, res) {
    var idusuario = req.body.idusuarioServer;
    var jogofav = req.body.jogofavServer;
    var estilo = req.body.jogoestiloServer;
    var plataforma = req.body.jogoplatServer;

    usuarioModel.salvarInfos(jogofav, estilo, plataforma, idusuario)
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

module.exports = {
    autenticar,
    cadastrar,
    cadastrarperfil,
    jogarbanco,
    usuarioquiz,
    quizdados,
    quizdadostemporeal,
    salvarInfos
}