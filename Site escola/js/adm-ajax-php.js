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

function getProf(elemento) {

    var nome_materia = elemento.textContent;


    var result = document.getElementById("list-prof");

    var xmlreq = crarRequesto();


 

    // Iniciar uma requisição
    xmlreq.open("GET", "adm.php?txtBuscaProf="+nome_materia);

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

function getDadosProf(elemento) {

    var id_prof = elemento.id;


   

    var xmlreq = crarRequesto();
    var msgprof = document.getElementById('msg-prof');

 
msgprof.textContent = 'Aguarde...';
    // Iniciar uma requisição
    xmlreq.open("GET", "adm.php?txtGetProf="+id_prof);

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
                
             
                postDadosProf(xmlreq.responseText);
                 
                msgprof.textContent = '';

            } else {
                msgprof.textContent = '';
                alert("Erro: " + xmlreq.statusText);
                
            }
        }
    };
    xmlreq.send(null);
}

function getAlunos(elemento) {

    var nome_turma = elemento.textContent;


   

    var result = document.getElementById("list");

    var xmlreq = crarRequesto();
 
    // Iniciar uma requisição
    xmlreq.open("GET", "adm.php?txtBuscaAluno="+nome_turma);

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


function getSenhaADM(elemento) {

    var id_prof = elemento.id;


   

    var xmlreq = crarRequesto();
    var msgprof = document.getElementById('msg-prof');

 
msgprof.textContent = 'Aguarde...';
    // Iniciar uma requisição
    xmlreq.open("GET", "adm.php?txtGetProf="+id_prof);

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
                
             
                postDadosProf(xmlreq.responseText);
                 
                msgprof.textContent = '';

            } else {
                msgprof.textContent = '';
                alert("Erro: " + xmlreq.statusText);
                
            }
        }
    };
    xmlreq.send(null);
}

function getDadosAluno(elemento) {

    var id_Aluno = elemento.id;


   

    var xmlreq = crarRequesto();
    var msgaluno = document.getElementById('msg-aluno');

 
    msgaluno.textContent = 'Aguarde...';
    // Iniciar uma requisição
    xmlreq.open("GET", "adm.php?txtGetAluno="+id_Aluno);

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
                
             
                postDadosAluno(xmlreq.responseText);
                 
                msgaluno.textContent = '';

            } else {
                msgaluno.textContent = '';
                alert("Erro: " + xmlreq.statusText);
                
            }
        }
    };
    xmlreq.send(null);
}

function getTemas(elemento) {

    var nome_mt = elemento.textContent;


   

    var result = document.getElementById("list-questao");

    var xmlreq = crarRequesto();
 
    // Iniciar uma requisição
    xmlreq.open("GET", "adm.php?txtBuscaTema="+nome_mt);

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

function getListQuestao(elemento) {

    var id_tema = elemento.id;


   

    var xmlreq = crarRequesto();
    var result = document.getElementById('questao-colle');

 
    
    // Iniciar uma requisição
    xmlreq.open("GET", "adm.php?txtListQuestao="+id_tema);

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
                
             
                result.textContent = xmlreq.responseText;
                 
                

            } else {
                
                result.textContent ="Erro: " + xmlreq.statusText;
                
            }
        }
    };
    xmlreq.send(null);
}