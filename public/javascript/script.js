function login() {
    var usuario = document.getElementById("usuario").value;
    var usuarioCerto = "admin";

    var senha = document.getElementById("senha").value;
    var senhaCerta = "admin";

    if (usuario !== usuarioCerto || senha !== senhaCerta) {
        alert("Usuário ou Senha incorreto!");
        document.getElementById("usuario").value = "";
        document.getElementById("senha").value = "";
        
    } else {
        alert(`Seja Bem-Vindo, ${usuario}! Estamos há mais um passo de um futuro e oceano mais limpo e sustentável!`);

        window.location.href = "/src/pages/home/index.html";
    }
}