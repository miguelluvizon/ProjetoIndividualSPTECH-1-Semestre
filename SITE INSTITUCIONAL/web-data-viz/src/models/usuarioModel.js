
var database = require("../database/config")

function autenticar(email, senha) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function autenticar(): ", email, senha)
    var instrucaoSql = `
        SELECT idusuario, nome, email FROM usuario WHERE email = '${email}' AND senha = '${senha}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrar(nome, email, senha) {

    var instrucaoSql = `
        INSERT INTO usuario (nome, email, senha) VALUES ('${nome}', '${email}', '${senha}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function cadastrarperfil(nome) {

    var instrucaoSql = `
        INSERT INTO perfil (nome) VALUES ('${nome}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function jogarbanco(certas, erradas, idusuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function jogarbanco():", certas, erradas, idusuario);

    var instrucaoSql = `
        INSERT INTO quiz (corretas, incorretas, fkusuario) VALUES ('${certas}', '${erradas}', '${idusuario}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function usuarioquiz(idusuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function usuarioquiz(): ", idusuario)
    var instrucaoSql =
        `SELECT corretas, incorretas FROM quiz WHERE idquiz = (SELECT max(idquiz) FROM quiz WHERE fkusuario = '${idusuario}' );`
        ;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quizdados(idusuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function quizdados(): ", idusuario)
    var instrucaoSql =
        `SELECT corretas, incorretas FROM quiz WHERE idquiz = (SELECT max(idquiz) FROM quiz WHERE fkusuario = '${idusuario}' );`
        ;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function quizdadostemporeal(idusuario) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function quizdadostemporeal(): ", idusuario)
    var instrucaoSql =
        `SELECT corretas, incorretas FROM quiz WHERE idquiz = (SELECT max(idquiz) FROM quiz WHERE fkusuario = '${idusuario}' );`
        ;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

function salvarInfos(jogofav, estilo, plataforma, idusuario) {
    var instrucaoSql1 = `
    UPDATE perfil SET jogo_fav = '${jogofav}' WHERE idperfil = ${idusuario}
    `;
  
    const resultado1 = database.executar(instrucaoSql1);
  
    var instrucaoSql2 = `
    UPDATE perfil SET jogo_estilo = '${estilo}' WHERE idperfil = ${idusuario}
    `;
  
    const resultado2 = database.executar(instrucaoSql2);
  
    var instrucaoSql3 = `
    UPDATE perfil SET jogo_plat = '${plataforma}' WHERE idperfil = ${idusuario}
    `;
  
    const resultado3 = database.executar(instrucaoSql3);
  
    var instrucaoSql4 = `
    UPDATE perfil SET fkusuario = '${idusuario}' WHERE idperfil = ${idusuario}
    `;
  
    const resultado4 = database.executar(instrucaoSql4);
  
    return {resultado1, resultado2, resultado3, resultado4};
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
};

