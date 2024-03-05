function salvarInformacoesUsuario() {
    const usuario = {
        nome: prompt("Por favor, insira seu nome:"),
        idade: prompt("Por favor, insira sua idade:"),
        email: prompt("Por favor, insira seu email:")
};

    localStorage.setItem("user", JSON.stringify(usuario));
}

salvarInformacoesUsuario();
