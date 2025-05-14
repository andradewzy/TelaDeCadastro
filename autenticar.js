function autenticar(){
    const login = document.getElementById("login").value;
    const password = document.getElementById("senha").value;

    const usuario = "alice"
    const senha = "1234"

    if(!login || !password){
        if(!login)
            document.getElementById("errologin").
        innertext="PREENCHIMENTO OBRIGATÓRIO";

        if(!password)
            document.getElementById("erropassword").
        innertext="PREEENCHIMENTO OBRIGATÓRIO";
        return
    }

    if(usuario==login && password==senha)
        alert("USUÁRIO AUTENTICADO COM SUCESSO!!!");
    else
        alert("USUÁRIO NÃO AUTENTICADO!!!");
}