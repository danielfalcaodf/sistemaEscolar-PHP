
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
window.onload = function () {
    getresposta();
}
function getresposta() {




    var result = document.getElementById("card-php");

    var xmlreq = crarRequesto();


 

    // Iniciar uma requisição
    xmlreq.open("GET", "prof.php?txtBuscaDesenpenho=true");

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
             
                result.innerHTML = xmlreq.responseText;
               
            } else {
              
                result.innerHTML = "Erro: " + xmlreq.statusText;
     
            }
        }
    };
    xmlreq.send(null);
}

function getRespostaAluno(elen, id, mt) {



    var result = document.getElementById("panel-php");

    var xmlreq = crarRequesto();


 

    // Iniciar uma requisição
    xmlreq.open("GET", "prof.php?txtBuscaAlunoID="+id+"&buscaMT="+mt+"&nome="+elen.textContent);

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
             
                result.innerHTML = xmlreq.responseText;
              

            } else {
              
                result.innerHTML = "Erro: " + xmlreq.statusText;
                
            }
        }
    };
    xmlreq.send(null);
}
