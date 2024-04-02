//efeito do botão voltar ao Topo

function topo(){

    window.scrollTo(

        {

            top:0,
            left:0,
            behavior: "smooth"

        }

    )

}

//Validação de Login

//O if(logado == 0) não funcionava devido ao erro de fechamento das {} o if(logado == 0)estava dentro das {}
//do if(usuario).

function login(){

    var logado = 0;
    var usuario = document.getElementById("usuario").value;
    var senha = document.getElementById("senha").value;

    if(usuario == 'admin' && senha == '1234567'){
        
        window.location = "index.html";
        logado = 1;

    }

    if(logado == 0) {
            
        alert("Acesso Negado. Dados incorretos.");
        
    }

}

//Ativar alert no botão cadastrar
//achei muito interessante essa funcionalidade


function cadastro() {

    alert("Cadastrado com sucesso!");
    window.location.href = "index.html";
      
}
