
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
var iniciarPT = getPt();
var iniciarMT = getMt();

function getPt() {




    var result = document.getElementById("Português");

    var xmlreq = crarRequesto();

    // Exibi a imagem de progresso
    result.innerHTML = 'Aguade...';

    // Iniciar uma requisição
    xmlreq.open("GET", "aluno.php?txtPT=" + result.id);

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
                result.innerHTML = xmlreq.responseText;
                startdrop();

            } else {
                result.innerHTML = "Erro: " + xmlreq.statusText;
            }
        }
    };
    xmlreq.send(null);
}

function getMt() {




    var result = document.getElementById("Matemática");

    var xmlreq = crarRequesto();

    // Exibi a imagem de progresso
    result.innerHTML = 'Aguade...';

    // Iniciar uma requisição
    xmlreq.open("GET", "aluno.php?txtMT=" + result.id);

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
                result.innerHTML = xmlreq.responseText;
                startdrop();

            } else {
                result.innerHTML = "Erro: " + xmlreq.statusText;
            }
        }
    };
    xmlreq.send(null);
}
function getQuestaluno(tema) {

    console.log("pla")

    var tm = tema.querySelector('span').textContent
    console.log(tm, tema.getAttribute('name'));
    var result = document.getElementById("questao-php");
    var xmlreq = crarRequesto();

    // Exibi a imagem de progresso
    result.innerHTML = 'Aguade...';

    // Iniciar uma requisição
    xmlreq.open("GET", "aluno.php?txtMateria=" + tema.getAttribute('name') + "&txtTema=" + tm, true);

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

function sendres() {

    var Contquestoes = document.querySelectorAll('.collection');
    var arrayquest = [];
    var arrayid = [];
    for (let index = 0; index < Contquestoes.length; index++) {

    let radioname = "g" + index;
        var radioquest = document.getElementsByName(radioname);


        for (let i = 0; i < radioquest.length; i++) {
            if (radioquest[i].checked) {
                arrayquest.push(radioquest[i].value);

            }

        }


    }
    for (let q = 0; q < Contquestoes.length ; q++) {
       arrayid.push( Contquestoes[q].firstElementChild.id);
       
    }
    console.log(arrayquest,arrayid);
    sendrespostacheck(arrayquest,arrayid);

}

function sendrespostacheck(resposta, id) 
{
    

    var result = document.getElementById("btns");
    var xmlreq = crarRequesto();

    // Exibi a imagem de progresso
    result.innerHTML = 'Aguade...';

    // Iniciar uma requisição
    xmlreq.open("GET", "aluno.php?txtresposta=" +resposta+"&txtId="+id);

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


function mostragabarito(questaoCorreta, questaoErrado,correta) 
{      var questaoCIDS = [];
    var corretaLetra = [];
    var questoescorretaIDS = [];
        var corretaIDS = questaoCorreta.split('.');
 
        for (let index = 1; index < corretaIDS.length; index++) 
        {
            console.log(corretaIDS[index]);
            
            if (index%2)
            {
                questaoCIDS.push(corretaIDS[index])
            }
            else
            {
               corretaLetra.push(corretaIDS[index])
            }
            
        }
        var questaoErradaIDS = questaoErrado.split('_')


        console.log(questoescorretaIDS);
        console.log(corretaLetra);
        console.log(questaoErradaIDS);
        
    // if(resposta == 'certo')
    // {
    //   var questoes= document.querySelectorAll('.collection')

    //   for (let index = 0; index < questoes.length; index++) {
    //      d[index]   
    //   }



    // }

}

