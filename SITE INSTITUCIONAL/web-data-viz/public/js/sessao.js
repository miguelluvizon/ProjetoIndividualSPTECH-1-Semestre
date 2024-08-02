// sessão
function validarSessao() {
    var email = sessionStorage.EMAIL_USUARIO;
    var nome = sessionStorage.NOME_USUARIO;
    var idusuario = sessionStorage.ID_USUARIO;

    var jogo_favorito = sessionStorage.JOGO_FAVORITO;
    var jogo_estilo = sessionStorage.JOGO_ESTILO;
    var jogo_plataforma = sessionStorage.JOGO_PLATAFORMA;

    var b_usuario = document.getElementById("b_usuario");
    
    

    if (email != null && nome != null) {
        b_usuario.innerHTML = nome;
    } else {
        window.location = "../login.html";
    }

    
}

function limparSessao() {
    sessionStorage.clear();
    window.location = "../login.html";
}



