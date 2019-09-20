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
var numQuestao = document.getElementById('questao-num');
var Questao = document.getElementById('questao-text');
var Materia  = document.getElementById('materia-escolhe');
var tema = document.getElementById('tema-text');
var gabarito = document.getElementById('respostaGab');
var alter = document.getElementsByName('alternativas');
function getquest() {

    var alternativas  = [];


    if(numQuestao.value == '' || Questao.value == '' || Materia.value == 'Seleciona um....' || Materia.value== '' || tema.value=='' || alter.length < 5 || gabarito.value == '')
    {
        
        let msg = document.getElementById('msg-alert');
        msg.innerHTML = '<span class="msg-errado"> Verificar os campos corretamente!</span>';
    }
    else
    {
        event.preventDefault();
        for (let index = 0; index < alter.length; index++) {
            alternativas.push(alter[index].value);
             
         }
         
         var dadosQuestao = numQuestao.value+'|'+Questao.value+'|'+Materia.value+'|'+tema.value+'|'+gabarito.value;
         
         addquest(dadosQuestao, alternativas);
         
    }
 
}
function addquest(questaoes, alternativas) {


    var newAlter = alternativas[0]+'´`'+alternativas[1]+'´`'+alternativas[2]+'´`'+alternativas[3]+'´`'+alternativas[4];



    var result = document.getElementById("msg-alert");
    var xmlreq = crarRequesto();

    // Exibi a imagem de progresso
    var progresso = document.querySelector('.progress');
    progresso.classList.remove('off');

    // Iniciar uma requisição
    xmlreq.open("GET", "prof.php?txtQuestoes=" + questaoes + "&txtAlter=" +newAlter);

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso


            if (xmlreq.status == 200) {
                progresso.classList.add('off');
             
                if(xmlreq.responseText == 'Sucesso a criar questão')
                {

                    numQuestao.value = '';
                    Questao.value = '';
                    Materia.value = '';
                    tema.value = '';
                    gabarito.value = '';
                    for (let index = 0; index < alter.length; index++) {
                        alter[index].value='';
                        
                    }
                    result.innerHTML = xmlreq.responseText;
                }
                else
                {
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

$(document).ready(function () {
    $('select').material_select();
    
})