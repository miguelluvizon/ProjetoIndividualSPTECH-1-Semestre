const { funcaobarrar } = require("../controllers/perfilController");
var database = require("../database/config")

function autenticar(jogofav, jogoplat, jogoestilo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function entrar(): ", jogofav, jogoplat, jogoestilo)
    var instrucaoSql = `
        SELECT idperfilgamer, jogo_fav, jogo_plataforma, jogo_estilo FROM perfilgamer WHERE jogo_fav = '${jogofav}' AND jogo_plataforma = '${jogoplat}' AND jogoestilo = '${jogoestilo}';
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// Coloque os mesmos parâmetros aqui. Vá para a var instrucaoSql
function cadastrar(jogofav, jogoplat, jogoestilo) {
    console.log("ACESSEI O USUARIO MODEL \n \n\t\t >> Se aqui der erro de 'Error: connect ECONNREFUSED',\n \t\t >> verifique suas credenciais de acesso ao banco\n \t\t >> e se o servidor de seu BD está rodando corretamente. \n\n function cadastrar():", jogofav, jogoplat, jogoestilo);
    
    // Insira exatamente a query do banco aqui, lembrando da nomenclatura exata nos valores
    //  e na ordem de inserção dos dados.
    var instrucaoSql = `
        INSERT INTO perfilgamer (jogo_fav, jogo_plataforma, jogo_estilo) VALUES ('${jogofav}', '${jogoplat}', '${jogoestilo}');
    `;
    console.log("Executando a instrução SQL: \n" + instrucaoSql);
    return database.executar(instrucaoSql);
}

// function funcaobarrar (idusuario) {
//     var instrucaoSql = `
//         SELECT idperfilgamer, jogo_fav, jogo_plataforma, jogo_estilo FROM perfilgamer join usuario on idusuario = fkusuario WHERE fkusuario = '${idusuario}'
//         `;
// }

module.exports = {
    autenticar,
    cadastrar,
    funcaobarrar
};