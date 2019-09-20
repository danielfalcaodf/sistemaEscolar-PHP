function crarRequesto() {
    try {
        request = new XMLHttpRequest();
    } catch (IEAtual) {

        try {
            request = new ActiveXObject("Msxml2.XMLHTTP");
        } catch (IEAntigo) {

            try {
                request = new ActiveXObject("Microsoft.XMLHTTP");
            } catch (falha) {
                request = false;
            }
        }
    }

    if (!request)
        alert("Seu Navegador não suporta Ajax!");
    else
        return request;
}
function getDados() {

    var nomeValue = document.getElementById('NomeCompleto').value;
var escolaValue = document.getElementById('Escola').value;
var turmaValue = document.getElementById('turma').value;
var emailValue  = document.getElementById('email').value;
var senhaConfirmada = document.getElementById('ConfirmarSenha').value;
var nivel =2
if(nomeValue == '' || escolaValue == '' || turmaValue == '' || emailValue == '' || senhaConfirmada == '')
{

    let msg = document.getElementById('msg-alert');
    msg.innerHTML = '<span class="msg-errado"> Verificar os campos corretamente!</span>';
 

}
else
{
    event.preventDefault();
    let msg = document.getElementById('msg-alert');
    msg.innerHTML = '';

    var dados = nomeValue+'|'+ emailValue+'|'+senhaConfirmada+'|'+  turmaValue+'|'+escolaValue+'|'+nivel;
    criarconta(dados);

}




    
}
function criarconta(dados) {
    event.preventDefault();
  

    var result = document.getElementById("msg-alert");

    var xmlreq = crarRequesto();

    // Exibi a imagem de progresso
    var progresso = document.querySelector('.progress');
    progresso.classList.remove('off');
    // Iniciar uma requisição
    xmlreq.open("GET", "php/LoginCadastroController.php?txtDadoscadastro=" + dados);

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
      
                    progresso.classList.add('off');
                   
                result.innerHTML = xmlreq.responseText;

        
             

            } else {
                progresso.classList.add('off');
                result.innerHTML = "Erro: " + xmlreq.statusText;
            }
        }
    };
    xmlreq.send(null);
}

function login() {

    
    var emailValue  = document.getElementById('email').value;
    var senhaValue = document.getElementById('senha').value;
    
    
    var dados = emailValue+','+senhaValue;
    
        var result = document.getElementById("msg-alert");
    
        var xmlreq = crarRequesto();
    
        // Exibi a imagem de progresso
        var progresso = document.querySelector('.progress');
        progresso.classList.remove('off');
    
        // Iniciar uma requisição
        xmlreq.open("GET", "php/LoginCadastroController.php?txtDadoslogin=" + dados);
    
        // Atribui uma função para ser executada sempre que houver uma mudança de ado
        xmlreq.onreadystatechange = function () {
    
            // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
            if (xmlreq.readyState == 4) {
    
                // Verifica se o arquivo foi encontrado com sucesso
                if (xmlreq.status == 200) {
                    if(xmlreq.responseText == '1')
                    {
                        window.location.href= './prof.html'
                    }
                    else if (xmlreq.responseText == '2')
                    {
                        window.location.href= './aluno.html'
                    }
                    else
                        {
                    progresso.classList.add('off');
                 
                    result.innerHTML = xmlreq.responseText;
                        }
    
                } else {
                    progresso.classList.add('off');
                    result.innerHTML = "Erro: " + xmlreq.statusText;
                }
            }
        };
        xmlreq.send(null);
    }
