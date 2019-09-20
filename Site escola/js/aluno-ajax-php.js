
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
var iniciarNome = getNomeUser();
function getNomeUser() {




    var result = document.getElementById("nome-php");

    var xmlreq = crarRequesto();




    // Iniciar uma requisição
    xmlreq.open("GET", "aluno.php?txtName=true");

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
function getPt() {




    var result = document.getElementById("Português");

    var xmlreq = crarRequesto();


    var progresso = document.querySelector('#proPT');

    // Iniciar uma requisição
    xmlreq.open("GET", "aluno.php?txtPT=" + result.id);

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
                progresso.classList.add('btn-off');
                if (xmlreq.responseText == 'login') {
                    location.replace('./login.html')
                }
                else {
                    result.innerHTML = xmlreq.responseText;
                    startdrop();
                }


            } else {
                progresso.classList.add('btn-off');
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
    var progresso = document.querySelector('#proMT');

    // Iniciar uma requisição
    xmlreq.open("GET", "aluno.php?txtMT=" + result.id);

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {
                progresso.classList.add('btn-off');
                if (xmlreq.responseText == 'login') {
                    location.replace('./login.html')
                }
                else {
                    result.innerHTML = xmlreq.responseText;
                    startdrop();
                }

            } else {
                progresso.classList.add('btn-off');
                result.innerHTML = "Erro: " + xmlreq.statusText;
            }
        }
    };
    xmlreq.send(null);
}
function getQuestaluno(tema) {



    var tm = tema.querySelector('span').textContent

    var result = document.getElementById("questao-php");
    var xmlreq = crarRequesto();

    // Exibi a imagem de progresso
    var progresso = document.querySelector('.progress');


    // Iniciar uma requisição
    xmlreq.open("GET", "aluno.php?txtMateria=" + tema.getAttribute('name') + "&txtTema=" + tm, true);

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso


            if (xmlreq.status == 200) {
                progresso.classList.add('btn-off');
                result.innerHTML = xmlreq.responseText;

            } else {
                progresso.classList.add('btn-off');
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
    var idinvalida = [];
    var arrayCerto = [];
    var tudocerto = false;

    for (let index = 0; index < Contquestoes.length; index++) {

        var radioname = "g" + index;
        var radioquest = document.getElementsByName(radioname);


        for (let i = 0; i < radioquest.length; i++) {

            if (radioquest[i].checked) {
                arrayquest.push(radioquest[i].value);
                arrayCerto.push(true);

            }
            else if (((i + 1) == radioquest.length) && (arrayquest.length == 0)) {


                idinvalida.push(Contquestoes[index].firstChild.id);
                arrayCerto.push(false);


            }
            else if (((i + 1) == radioquest.length) && (arrayquest.length > 0) && (arrayquest.length < Contquestoes.length) && (!radioquest[i - 1].checked) && (!radioquest[i - 2].checked) && (!radioquest[i - 3].checked) && (!radioquest[i - 4].checked) && (!radioquest[(i - 5) + 1].checked)) {

                idinvalida.push(Contquestoes[index].firstChild.id);

                arrayCerto.push(false);


            }
        }


    }

    for (let index = 0; index < arrayCerto.length; index++) {
        if (arrayCerto[index] == false) {
            var questoes = [];
            for (let i = 0; i < idinvalida.length; i++) {
                var questa = document.getElementById(idinvalida[i]);
                var arrquesta = questa.querySelector('span').textContent.split(":")

                questoes.push(arrquesta[0]);
            }
            var texto = "";
            for (let index = 0; index < questoes.length; index++) {
                texto += questoes[index] + '\n';

            }
            alert('Verifica as resposta se estão selecionadas \n' + texto);
            var hrefID = ''
            for (let index = 0; index < idinvalida.length; index++) {

                hrefID = "#" + idinvalida[(index - idinvalida.length) + 1];





            }
            setTimeout(() => {
                location.replace(hrefID);

            }, 1000);

            tudocerto = false;
            break;
        }
        else {
            tudocerto = true;
        }

    }
    if (tudocerto == true) {
        for (let q = 0; q < Contquestoes.length; q++) {
            arrayid.push(Contquestoes[q].firstElementChild.id);

        }
        sendrespostacheck(arrayquest, arrayid);
    }


}

function sendrespostacheck(resposta, id) {


    var result = document.getElementById("btns");
    var xmlreq = crarRequesto();

    // Exibi a imagem de progresso
    var progresso = document.querySelector('.progress');
    progresso.classList.remove('btn-off');
    document.getElementById('send-prof').classList.add('btn-off');

    // Iniciar uma requisição
    xmlreq.open("GET", "aluno.php?txtresposta=" + resposta + "&txtId=" + id);

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso


            if (xmlreq.status == 200) {
                progresso.classList.add('btn-off');
                result.innerHTML = xmlreq.responseText;
                if (xmlreq.responseText.toString().charAt(5) == 'N') {
                    var resposta_php = document.querySelector('#btn-php').firstElementChild.name;
                    RespostaParaProf(resposta_php);
                }


            } else {
                progresso.classList.add('btn-off');
                result.innerHTML = "Erro: " + xmlreq.statusText;
                Materialize.toast('Não Enviado!!!', 3000, 'rounded');
            }
        }
    };

    xmlreq.send(null);
}

function SendRespostaParaProf(questaocaertoIDeAL, questaoerradoIDeAl, questaoGabaritoIDeAl) {

    var dadosParaProf = questaocaertoIDeAL + ';' + questaoerradoIDeAl + ';' + questaoGabaritoIDeAl;


    // Exibi a imagem de progresso
    var xmlreq = crarRequesto();

    // Iniciar uma requisição
    xmlreq.open("GET", "aluno.php?txtDadosParaProf=" + dadosParaProf);

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso


            if (xmlreq.status == 200) {

                if (xmlreq.responseText == 'Sucesso') {
                    var Contquestoes = document.querySelectorAll('.collection');
                    for (let index = 0; index < Contquestoes.length; index++) {

                        var radioname = "g" + index;
                        var radioquest = document.getElementsByName(radioname);


                        for (let i = 0; i < radioquest.length; i++) {
                            radioquest[i].disabled = true;
                        }
                    }
                    document.getElementById('btn-gab').classList.remove('disabled');
                    Materialize.toast('Sucesso Enviado!!!', 3000, 'rounded');


                }
                else {

                    var btnGab = document.getElementById("btns");

                    btnGab.innerHTML = '<div class="send-btn text-center"  onclick="sendres()"  id="send-prof">'
                        + '<a class="waves-effect waves-light btn   light-blue darken-1"  href="#btns"><i class="material-icons right">send</i>Enviar resposta para professor(a)</a>'
                        + '</div><div class="text-center" id="btns">  <div class="progress btn-off  black">'
                        + '<div class="indeterminate  light-blue darken-1"></div>'
                        + '</div> </div>'
                    Materialize.toast('Não Enviado!!!' + xmlreq.responseText, 3000, 'rounded');
                }

            } else {
                progresso.classList.add('btn-off');
                result.innerHTML = "Erro: " + xmlreq.statusText;

            }
        }
    };

    xmlreq.send(null);
}


function sair() {






    var xmlreq = crarRequesto();




    // Iniciar uma requisição
    xmlreq.open("GET", "aluno.php?txtSair=true");

    // Atribui uma função para ser executada sempre que houver uma mudança de ado
    xmlreq.onreadystatechange = function () {

        // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
        if (xmlreq.readyState == 4) {

            // Verifica se o arquivo foi encontrado com sucesso
            if (xmlreq.status == 200) {

                xmlreq.responseText;
                if (xmlreq.responseText == "1") {
                    location.replace('./login.html')

                }


            } else {

                "Erro: " + xmlreq.statusText;
            }
        }
    };
    xmlreq.send(null);
}


