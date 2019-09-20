
var sala = false;
var quest = false;
var mat = false;
var inicar = getDados()

function openquest (event) {

  var tema = event.textContent;

  setTimeout(function () {


    document.getElementById('painel-questao').classList.add('flipper');
    document.getElementById('painel-questao').classList.remove('card-off');

  }, 500);
  setTimeout(function () {

    document.getElementById('font-questao').classList.add('flipper');
   
  }, 1000)
  getquest(tema) 
 
}



$(".draggable-sala").draggable( {revert: true , scroll: false});

$("#drop-area-1").droppable({
  accept:".draggable-sala",
  drop: function (event, ui) {
    $(".draggable-sala").draggable( {revert: true , scroll: false});

    $(this).css('background', 'rgb(0,200,0)');
    document.getElementById('materia').classList.add('card-up-left');
    setTimeout(function () {
            // e.target.removeChild(document.getElementById(data))
  
            
            document.getElementById('3').classList.remove('col-3');
            document.getElementById('drop-area-1').classList.remove('col-6');
            document.getElementById('drop-area-1').classList.add('col-9');
            document.getElementById('painel-aluno').classList.remove('card-off');
            document.getElementById('materia-text').classList.remove('card-off');
            document.getElementById('text-importante').classList.add('card-off');
            document.getElementById('disciplina-msg').classList.remove('card-off');
      
            document.getElementById('drop-area-1').classList.add('flipper');
            document.getElementById('salas').classList.add('sala');
      
          }, 500);
          setTimeout(function () {
              var elemente =    ui.draggable.context;
         
            elemente.querySelector('.turma').classList.add('collapsible-header');
            var elementeNew = elemente.querySelector('.turma');
            var clone = elementeNew.cloneNode(true);
            clone.setAttribute('id', 'tm');
            document.getElementById('font-aluno').classList.add('flipper');
            document.getElementById('li-sala').insertAdjacentElement('afterbegin', clone);
          elemente.querySelector('.turma').classList.remove('collapsible-header');
          getAluno(clone);
          }, 1000);
          sala = true;
          validaMat()
             $(this).css('background', 'none');
  },
  over: function (event, ui) {
    $(this).css('background', 'orange');
  },
  out: function (event, ui) {
    $(this).css('background', 'cyan');
  }
});
function validaMat()
{
$(".draggable-tema").draggable({revert: true});
$("#font-questao").droppable({
  accept: ".draggable-tema",
  drop: function (event, ui) {
  
    $(".draggable-tema").draggable({revert: true})
    $(this).css('background', 'rgb(0,200,0)');
    setTimeout(function () {
            // e.target.removeChild(document.getElementById(data))
            document.getElementById('3.1').classList.remove('col-3');
            document.getElementById('drop-area-1').classList.remove('col-9');
            document.getElementById('drop-area-1').classList.add('col-12');
            document.getElementById('materia-text').classList.add('card-off');
            document.getElementById('tuto-text').classList.remove('card-off');
      
            document.getElementById('painel-tema').classList.add('flipper');
            document.getElementById('painel-tema').classList.remove('card-off');
            document.getElementById('materia').classList.remove('card-up-left');
            
            document.getElementById('materia').classList.add('materia');
       
          }, 500);
          setTimeout(function () {
          
            var elemente =    ui.draggable.context;

            
            // .toggleClass('helpTop').toggleClass('helpBottom');
              elemente.querySelector('.mat').classList.add('collapsible-header');
      
            var elementeNew = elemente.querySelector('.mat');
            var clone = elementeNew.cloneNode(true);
            clone.setAttribute('id', 'mt');
            document.getElementById('font-tema').classList.add('flipper');
          
            document.getElementById('li-tema').insertAdjacentElement('afterbegin', clone);
          getTema(clone)
             elemente.querySelector('.mat').classList.remove('collapsible-header');
           
          }, 1000);
        mat = true;
          $(this).css('background', 'none');
  },
  over: function (event, ui) {
    $(this).css('background', 'orange');
  },
  out: function (event, ui) {
    $(this).css('background', 'cyan');
  }
});
}
function naoMart()
{
$(".draggable-tema").draggable({revert: true});
$("#font-questao").droppable({
  accept: ".nao",
  drop: function (event, ui) {
  
    $(".draggable-tema").draggable({revert: true})
    $(this).css('background', 'rgb(0,200,0)');
    setTimeout(function () {
            // e.target.removeChild(document.getElementById(data))
            document.getElementById('3.1').classList.remove('col-3');
            document.getElementById('drop-area-1').classList.remove('col-9');
            document.getElementById('drop-area-1').classList.add('col-12');
      
            document.getElementById('painel-tema').classList.add('flipper');
            document.getElementById('painel-tema').classList.remove('card-off');
            document.getElementById('materia').classList.remove('card-up-left');
            
            document.getElementById('materia').classList.add('materia');
       
          }, 500);
          setTimeout(function () {
          
            var elemente =    ui.draggable.context;
  
            
            // .toggleClass('helpTop').toggleClass('helpBottom');
              elemente.querySelector('.mat').classList.add('collapsible-header');
            var elementeNew = elemente.querySelector('.mat');
            var clone = elementeNew.cloneNode(true);
            clone.setAttribute('id', 'mt');
            document.getElementById('font-tema').classList.add('flipper');
          
            document.getElementById('li-tema').insertAdjacentElement('afterbegin', clone);
             elemente.querySelector('.mat').classList.remove('collapsible-header');
           
          }, 1000);
          $(this).css('background', 'none');
  },
  over: function (event, ui) {
    $(this).css('background', 'orange');
  },
  out: function (event, ui) {
    $(this).css('background', 'cyan');
  }
});
}

var close =document.querySelector('.fechar');

close.addEventListener('click', function () {

if((sala== true) && (mat  == false) && (quest == false))
{

 setTimeout(function () {
            // e.target.removeChild(document.getElementById(data))
          
            
            
            document.getElementById('3').classList.add('col-3');
            document.getElementById('drop-area-1').classList.add('col-6');
            document.getElementById('drop-area-1').classList.remove('col-9');
            document.getElementById('painel-aluno').classList.add('card-off');
      
      
      
            document.getElementById('drop-area-1').classList.remove('flipper');
            document.getElementById('salas').classList.remove('sala');
      
          }, 500);
          setTimeout(function () {
            document.querySelector('.turma').classList.remove('collapsible-header');
        
      
            document.getElementById('font-aluno').classList.remove('flipper');
            document.getElementById('li-sala').removeChild(document.querySelector('.turma'));

          }, 1000);
          naoMart();
}
else if(  (sala== true) && (mat  == true) && (quest == false))
{
  
     
  setTimeout(function () {
            // e.target.removeChild(document.getElementById(data))

            
            document.getElementById('3').classList.add('col-3');
            document.getElementById('drop-area-1').classList.add('col-6');
            document.getElementById('drop-area-1').classList.remove('col-9');
            document.getElementById('painel-aluno').classList.add('card-off');
      
      
      
            document.getElementById('drop-area-1').classList.remove('flipper');
            document.getElementById('salas').classList.remove('sala');
      
          }, 1000);
          setTimeout(function () {
            document.querySelector('.turma').classList.remove('collapsible-header');
        
      
            document.getElementById('font-aluno').classList.remove('flipper');
     

          }, 1000);
          naoMart();
           setTimeout(function () {
            // e.target.removeChild(document.getElementById(data))
            document.getElementById('3.1').classList.add('col-3');
            document.getElementById('drop-area-1').classList.add('col-6');
            document.getElementById('drop-area-1').classList.remove('col-12');
      
            document.getElementById('painel-tema').classList.remove('flipper');
            document.getElementById('painel-tema').classList.add('card-off');
            document.getElementById('materia').classList.add('card-up-left');
            
            document.getElementById('materia').classList.remove('materia');
       
          }, 1000);
          setTimeout(function () {
            var painel = document.querySelector('#painel-tema');
            var mate = painel.querySelector('.mat');
        
               document.getElementById('li-tema').removeChild(mate);
                   document.getElementById('li-sala').removeChild(document.querySelector('.turma'));
          
            document.getElementById('font-tema').classList.remove('flipper');
        
          }, 500);
}
else if (sala== true && mat  == true && quest == true)
{
 setTimeout(function () {
            // e.target.removeChild(document.getElementById(data))
          
            
            document.getElementById('3').classList.add('col-3');
            document.getElementById('drop-area-1').classList.add('col-6');
            document.getElementById('drop-area-1').classList.remove('col-9');
            document.getElementById('painel-aluno').classList.add('card-off');
            document.getElementById('text-importante').classList.remove('card-off');
            document.getElementById('disciplina-msg').classList.add('card-off');
      
            document.getElementById('drop-area-1').classList.remove('flipper');
            document.getElementById('salas').classList.remove('sala');
      
          }, 500);
          setTimeout(function () {
            document.querySelector('.turma').classList.remove('collapsible-header');
        
      
            document.getElementById('font-aluno').classList.remove('flipper');
            document.getElementById('li-sala').removeChild(document.querySelector('.turma'));

          }, 1000);
          naoMart();
                     setTimeout(function () {
            // e.target.removeChild(document.getElementById(data))
            document.getElementById('3.1').classList.add('col-3');
            // document.getElementById('drop-area-1').classList.add('col-9');
            document.getElementById('drop-area-1').classList.remove('col-12');
      
            document.getElementById('painel-tema').classList.remove('flipper');
            document.getElementById('painel-tema').classList.add('card-off');
            document.getElementById('materia').classList.add('card-up-left');
            
            document.getElementById('materia').classList.remove('materia');
       
          }, 500);
          
          setTimeout(function () {
        
           document.querySelector('.mat').classList.remove('collapsible-header');
            document.getElementById('font-tema').classList.remove('flipper');
        
             var painel = document.querySelector('#painel-tema');
            var mate = painel.querySelector('.mat');
        
               document.getElementById('li-tema').removeChild(mate);;
          }, 1000);
          setTimeout(function () {


    document.getElementById('painel-questao').classList.remove('flipper');
    document.getElementById('painel-questao').classList.add('card-off');

  }, 500);
  setTimeout(function () {

    document.getElementById('font-questao').classList.remove('flipper');
  }, 1000)
          
}



});

var fecharp = document.querySelector(".fechar-per");

fecharp.addEventListener('click', function(){
  setTimeout(function () {


    document.getElementById('painel-questao').classList.remove('flipper');
    document.getElementById('painel-questao').classList.add('card-off');

  }, 500);
  setTimeout(function () {

    document.getElementById('font-questao').classList.remove('flipper');
  }, 1000)

})

function CriaRequest() {
  try{
      request = new XMLHttpRequest();        
  }catch (IEAtual){
       
      try{
          request = new ActiveXObject("Msxml2.XMLHTTP");       
      }catch(IEAntigo){
       
          try{
              request = new ActiveXObject("Microsoft.XMLHTTP");          
          }catch(falha){
              request = false;
          }
      }
  }
   
  if (!request) 
      alert("Seu Navegador não suporta Ajax!");
  else
      return request;
}

/**
* Função para enviar os dados
*/
function getquest(tema) {
  quest = true;

  var mate = document.querySelector('#mt');
var mateValue = mate.querySelector('span').textContent

  var result = document.getElementById("questao-php");
  var xmlreq = CriaRequest();
   
  // Exibi a imagem de progresso
  result.innerHTML = 'Aguade...';
   
  // Iniciar uma requisição
  xmlreq.open("GET", "prof.php?txtMateria="+ mateValue+"&txtTema="+tema, true);
   
  // Atribui uma função para ser executada sempre que houver uma mudança de ado
  xmlreq.onreadystatechange = function(){
       
      // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
      if (xmlreq.readyState == 4) {
           
          // Verifica se o arquivo foi encontrado com sucesso
          if (xmlreq.status == 200) {
              result.innerHTML = xmlreq.responseText;
          }else{
              result.innerHTML = "Erro: " + xmlreq.statusText;
          }
      }
  };
  xmlreq.send(null);
}

function getTema(elemente) {
  quest = true;

  var mate = document.querySelector('#mt');
var mateValue = mate.querySelector('span').textContent

  var result = document.getElementById("tema-php");
  var xmlreq = CriaRequest();
   
  // Exibi a imagem de progresso
  result.innerHTML = 'Aguade...';
   
  // Iniciar uma requisição
  xmlreq.open("GET", "prof.php?txtMateria="+ mateValue, true);
   
  // Atribui uma função para ser executada sempre que houver uma mudança de ado
  xmlreq.onreadystatechange = function(){
       
      // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
      if (xmlreq.readyState == 4) {
           
          // Verifica se o arquivo foi encontrado com sucesso
          if (xmlreq.status == 200) {
              result.innerHTML = xmlreq.responseText;
          }else{
              result.innerHTML = 'Erro: ' + xmlreq.statusText;
          }
      }
  };
  xmlreq.send(null);
}
function getAluno(elemente) {
  quest = true;

  var turma = document.querySelector('#tm');
var TurValue = turma.querySelector('span').textContent

  var result = document.getElementById("turma-php");
  var xmlreq = CriaRequest();
   
  // Exibi a imagem de progresso
  result.innerHTML = 'Aguade...';
   
  // Iniciar uma requisição
  xmlreq.open("GET", "prof.php?txtTurma="+ TurValue, true);
   
  // Atribui uma função para ser executada sempre que houver uma mudança de ado
  xmlreq.onreadystatechange = function(){
       
      // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
      if (xmlreq.readyState == 4) {
           
          // Verifica se o arquivo foi encontrado com sucesso
          if (xmlreq.status == 200) {
              result.innerHTML = xmlreq.responseText;
          }else{
              result.innerHTML = 'Erro: ' + xmlreq.statusText;
          }
      }
  };
  xmlreq.send(null);
}

function sendquestbtn() {
  var radioquest = document.getElementsByName('send-quest');
  var arrayquest = []
  for(var i = 0; i < radioquest.length; i++)
  {
    if(radioquest[i].checked)
    {
        arrayquest.push(radioquest[i].value);

    }
  }
  var radioaluno = document.getElementsByName('radio-alunos');
 var  arrayaluno = [];
  for (let index = 0; index < radioaluno.length; index++) {
      if(radioaluno[index].checked)
     {
        arrayaluno.push(radioaluno[index].value);
      }
    
  }
  var tema = document.getElementById('tema-php');
  var mate = document.querySelector('#mt');
  var mateValue = mate.querySelector('span').textContent
  sendquest(arrayquest,arrayaluno,tema.textContent, mateValue);
}
function sendquest(quest, aluno,tema,mt) {
  

  var xmlreq = CriaRequest();

   
  // Exibi a imagem de progresso

  Materialize.toast('Aguade...', 3000, 'rounded')
  // Iniciar uma requisição
  xmlreq.open("GET", "prof.php?txtQuest="+ quest+"&txtAlunos="+aluno+"&txtTM="+tema+"&txtMT="+mt, true);
   
  // Atribui uma função para ser executada sempre que houver uma mudança de ado
  xmlreq.onreadystatechange = function(){
       
      // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
      if (xmlreq.readyState == 4) {
           
          // Verifica se o arquivo foi encontrado com sucesso
          if (xmlreq.status == 200) {
           
              Materialize.toast(xmlreq.responseText, 3000, 'rounded')
  
          }else{
             
              Materialize.toast('Erro: ' + xmlreq.statusText, 3000, 'rounded')

          }
      }
  };
  xmlreq.send(null);
}

function getDados() {
  

  var result = document.getElementById("nome-php");


  var xmlreq = CriaRequest();

   
  // Exibi a imagem de progresso

 
  // Iniciar uma requisição
  xmlreq.open("GET", "prof.php?txtNome=true");
   
  // Atribui uma função para ser executada sempre que houver uma mudança de ado
  xmlreq.onreadystatechange = function(){
       
      // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
      if (xmlreq.readyState == 4) {
           
          // Verifica se o arquivo foi encontrado com sucesso
          if (xmlreq.status == 200) {

            if (xmlreq.responseText== 'login')
            {
              location.replace('./login.html');
            }
            else
            {

              result.innerHTML = xmlreq.responseText;
            }
            }else{
             
              
              console.log('Erro: ' + xmlreq.statusText)
          }
      }
  };
  xmlreq.send(null);
}

function sair() {




   

  var xmlreq = CriaRequest();




  // Iniciar uma requisição
  xmlreq.open("GET", "prof.php?Sair=true");

  // Atribui uma função para ser executada sempre que houver uma mudança de ado
  xmlreq.onreadystatechange = function () {

      // Verifica se foi concluído com sucesso e a conexão fechada (readyState=4)
      if (xmlreq.readyState == 4) {

          // Verifica se o arquivo foi encontrado com sucesso
          if (xmlreq.status == 200) {
              
              xmlreq.responseText;
              if ( xmlreq.responseText == "1") {
                  location.replace('./login.html')
                  
              }
              

          } else {
            
              "Erro: " + xmlreq.statusText;
          }
      }
  };
  xmlreq.send(null);
}

