function validarformulario() {
    var nome = document.getElementById("nome").ariaValueMax;
    var mensagemErro = document.getElementById("mensagemErro");

    if (nome === "") {
        mensagemErro.innerHTML = "Por Favor,preencha o campo do nome.";
        return false;
    }
     return true;
}