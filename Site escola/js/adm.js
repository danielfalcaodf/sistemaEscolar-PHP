$(document).ready(function () {
    $('select').material_select();
    
})

$(".modal-trigger").leanModal();

if(location.href)

function flipTurm() {

        document.getElementById('area-turma').classList.remove('flipper');

    setTimeout(() => {
      
        document.getElementById('area-turma').classList.add('flipper');
    }, 550);
  
    
}
function flipSala(params) {
    console.log(params);
    
    setTimeout(() => {
        document.getElementById('sala-alunos').classList.remove('off');
        document.getElementById('card-turma').classList.add('flipper', 'card-turma');
        document.querySelector('.busca').querySelector('div').classList.add('btn-busca-div');
        
        document.getElementById('header').classList.add('header');
        document.getElementById('body').classList.add('body');
        document.getElementById('list').classList.add('collection');
        document.getElementById('btn-fix').classList.add('foot-bot');
        
    }, 500);
    if (params == 'volta') 
    {
            
    setTimeout(() => {
        document.getElementById('sala-alunos').classList.add('off');
        document.getElementById('card-turma').classList.remove('flipper', 'card-turma');
        document.querySelector('.busca').querySelector('div').classList.remove('btn-busca-div');
        document.getElementById('header').classList.remove('header');
        document.getElementById('body').classList.remove('body');
        document.getElementById('list').classList.remove('collection');
        document.getElementById('btn-fix').classList.remove('foot-bot');
        document.getElementById('area-dados').classList.remove('flipper');
        
        document.getElementById('area-dados').classList.add('off');
        // document.getElementById('card-list').classList.add('off');
        
    }, 500);
    }
    else
    {
        getAlunos(params);   
    }
}


function flipDados(elem)
{
    console.log(elem);

    var inputNome = document.getElementById('nome-aluno');
    var divTurma = document.getElementById('turma-aluno');
    var divEscola = document.getElementById('escola-aluno');
    var inputIdade = document.getElementById('idade-aluno');
    var inputEmail = document.getElementById('email-aluno');

    inputNome.value = '' ;   
    divTurma.textContent =  '' ;
    divEscola.textContent =  '' ;   
    inputIdade.value = ''  ;  
    inputEmail.value =  '';
    
    setTimeout(() => {
       
        document.getElementById('area-dados').classList.add('off');
        if(elem == 'add')
        {
            document.getElementById('salva-aluno-btn').classList.add('off')
            document.getElementById('pro-aluno').classList.add('off')
            document.getElementById('trans-aluno-turma-btn').classList.add('off')
            document.getElementById('trans-aluno-escola-btn').classList.add('off')
            document.getElementById('Novo-cadastro-aluno').classList.remove('off')
            
        }
        else
        {
            document.getElementById('salva-aluno-btn').classList.remove('off')
            document.getElementById('pro-aluno').classList.remove('off')
            document.getElementById('trans-aluno-turma-btn').classList.remove('off')
            document.getElementById('trans-aluno-escola-btn').classList.remove('off')
            
            getDadosAluno(elem) ;
        }
       
    }, 450);
    setTimeout(() => {
       
        document.getElementById('area-dados').classList.remove('flipper');
       
    }, 500);
    setTimeout(() => {
        document.getElementById('area-dados').classList.remove('off');
    }, 450);
    setTimeout(() => {
        
        document.getElementById('area-dados').classList.add('flipper');
      
    }, 800);   
}

var campoFiltro = document.querySelector("#busca-aluno");

campoFiltro.addEventListener("input", function() {
    var alunos = document.querySelectorAll(".aluno-nome");

    if (this.value.length > 0) {
        for (var i = 0; i < alunos.length; i++) {
            
            var nome = alunos[i].textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                alunos[i].classList.add("off");
            } else {
                alunos[i].classList.remove("off");
            }
        }
    } else {
        for (var i = 0; i < alunos.length; i++) {
            var aluno = alunos[i];
            aluno.classList.remove("off");
        }
    }
});


function busca() {

    var campoFiltro = document.querySelector("#busca-aluno");
    var alunos = document.querySelectorAll(".aluno-nome");

    if (campoFiltro.value.length > 0) {
        for (var i = 0; i < alunos.length; i++) {
            
            var nome = alunos[i].textContent;
            var expressao = new RegExp(campoFiltro.value, "i");

            if (!expressao.test(nome)) {
                alunos[i].classList.add("off");
            } else {
                alunos[i].classList.remove("off");
            }
        }
    } else {
        for (var i = 0; i < alunos.length; i++) {
            var aluno = alunos[i];
            aluno.classList.remove("off");
        }
    }
}


// function do prof 


function flipDisci() {

    document.getElementById('area-prof').classList.remove('flipper');

setTimeout(() => {
  
    document.getElementById('area-prof').classList.add('flipper');
}, 550);


}

function flipProf(params) {
    console.log(params);
    
    setTimeout(() => {
        document.getElementById('disciplina-prof').classList.remove('off');
        document.getElementById('card-disciplina').classList.add('flipper', 'card-disciplina');
        document.querySelector('.busca-prof').querySelector('div').classList.add('btn-busca-div');
        
        document.getElementById('header-prof').classList.add('header');
        document.getElementById('body-prof').classList.add('body');
        document.getElementById('list-prof').classList.add('collection');
        document.getElementById('btn-fix-prof').classList.add('foot-bot');
        
    }, 500);
    if (params == 'volta') 
    {
            
    setTimeout(() => {
        document.getElementById('disciplina-prof').classList.add('off');
        document.getElementById('card-disciplina').classList.remove('flipper', 'card-disciplina');
        document.querySelector('.busca-prof').querySelector('div').classList.remove('btn-busca-div');
        document.getElementById('header-prof').classList.remove('header');
        document.getElementById('body-prof').classList.remove('body');
        document.getElementById('list-prof').classList.remove('collection');
        document.getElementById('btn-fix-prof').classList.remove('foot-bot');
        document.getElementById('area-dados-prof').classList.remove('flipper');
        
        document.getElementById('area-dados-prof').classList.add('off');
        var list = document.getElementById('list-prof');
        while (list.firstChild) {
            list.removeChild(list.firstChild);
        }
        // document.getElementById('card-list').classList.add('off');
        
    }, 500);
    }
    else
    {
        getProf(params);
    }
        
}

var campoFiltroProf = document.querySelector("#busca-prof-campo");

campoFiltroProf.addEventListener("input", function() {
    var profes = document.querySelectorAll(".prof-nome");

    if (this.value.length > 0) {
        for (var i = 0; i < profes.length; i++) {
            
            var nome = profes[i].textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                profes[i].classList.add("off");
            } else {
                profes[i].classList.remove("off");
            }
        }
    } else {
        for (var i = 0; i < profes.length; i++) {
            var prof = profes[i];
            prof.classList.remove("off");
        }
    }
});

function buscaprof() {

    var campoFiltro = document.querySelector("#busca-prof-campo");
    var profes = document.querySelectorAll(".prof-nome");

    if (campoFiltro.value.length > 0) {
        for (var i = 0; i < profes.length; i++) {
            
            var nome = profes[i].textContent;
            var expressao = new RegExp(campoFiltro.value, "i");

            if (!expressao.test(nome)) {
                profes[i].classList.add("off");
            } else {
                profes[i].classList.remove("off");
            }
        }
    } else {
        for (var i = 0; i < profes.length; i++) {
            var prof = profes[i];
            prof.classList.remove("off");
        }
    }
}

function flipDadosprof(elem)
{
    console.log(elem);
    
    var inputNome = document.getElementById('nome-prof');
    var divMateria = document.getElementById('materia-do-prof');
    var divEscola = document.getElementById('escola-do-prof');
    var inputIdade = document.getElementById('idade-prof');
    var inputEmail = document.getElementById('email-prof');
    inputNome.value = '';
    divMateria.textContent = '';
    divEscola.textContent = '';
    inputIdade.value = '';
    inputEmail.value = '';

    setTimeout(() => {
       
        document.getElementById('area-dados-prof').classList.add('off');
        document.getElementById('Novo-cadastro-prof').classList.add('off');
        if(elem == 'add')
        {
            document.getElementById('salva-prof-btn').classList.add('off')
            document.getElementById('disciplina-prof-btn').classList.add('off')
            document.getElementById('trans-prof-btn').classList.add('off')
            document.getElementById('trans-prof-escola-btn').classList.add('off')
            document.getElementById('Novo-cadastro-prof').classList.remove('off')
            
        }
        else
        {
            document.getElementById('salva-prof-btn').classList.remove('off')
            document.getElementById('disciplina-prof-btn').classList.remove('off')
            document.getElementById('trans-prof-btn').classList.remove('off')
            document.getElementById('trans-prof-escola-btn').classList.remove('off')
            
            getDadosProf(elem) ;
        }
    }, 450);
    setTimeout(() => {
       
        document.getElementById('area-dados-prof').classList.remove('flipper');
       
    }, 500);
    setTimeout(() => {
        document.getElementById('area-dados-prof').classList.remove('off');
    }, 450);
    setTimeout(() => {
        
        document.getElementById('area-dados-prof').classList.add('flipper');
      
    }, 800); 

 
  
   

}

//flip questao


function flipDisciQuest() {

    document.getElementById('area-questao').classList.remove('flipper');

setTimeout(() => {
  
    document.getElementById('area-questao').classList.add('flipper');
}, 550);



}

function flipQuest(params) {
    console.log(params);
    
    setTimeout(() => {
        document.getElementById('disciplina-questao').classList.remove('off');
        document.getElementById('card-disciplina-questao').classList.add('flipper', 'card-disciplina');
        document.querySelector('.busca-tema').querySelector('div').classList.add('btn-busca-div');
        
        document.getElementById('header-questao').classList.add('header');
        document.getElementById('body-questao').classList.add('body');
        document.getElementById('list-questao').classList.add('collection');
        document.getElementById('btn-fix-questao').classList.add('foot-bot');
        
    }, 500);
    if (params == 'volta') 
    {
            
    setTimeout(() => {
        document.getElementById('disciplina-questao').classList.add('off');
        document.getElementById('card-disciplina-questao').classList.remove('flipper', 'card-disciplina');
        document.querySelector('.busca-tema').querySelector('div').classList.remove('btn-busca-div');
        document.getElementById('header-questao').classList.remove('header');
        document.getElementById('body-questao').classList.remove('body');
        document.getElementById('list-questao').classList.remove('collection');
        document.getElementById('btn-fix-questao').classList.remove('foot-bot');
        document.getElementById('area-dados-questao').classList.remove('flipper');
        
        document.getElementById('area-dados-questao').classList.add('off');
        // document.getElementById('card-list').classList.add('off');
        
    }, 500);
    }
    else
    {
        getTemas(params);
    }
}
function flipDadosQuest(elem, lado)
{
    console.log(elem, lado);


    setTimeout(() => {
        document.getElementById('alterar-quest').classList.add('off');
        document.getElementById('list-quest').classList.remove('off');
        document.getElementById('area-dados-questao').classList.add('off');
        if(lado == 'outro')
        {
            document.getElementById('list-quest').classList.add('off');
            document.getElementById('alterar-quest').classList.remove('off');
        }
    }, 450);
    setTimeout(() => {
       
        document.getElementById('area-dados-questao').classList.remove('flipper');
       
    }, 500);
    setTimeout(() => {
        document.getElementById('area-dados-questao').classList.remove('off');
    }, 450);
    setTimeout(() => {
        
        document.getElementById('area-dados-questao').classList.add('flipper');
        
      
    }, 800);   
   
}
function flipDadosQuestOutro(elem) {
    setTimeout(() => {
       
        document.getElementById('area-dados-questao').classList.add('off');
      
            document.getElementById('list-quest').classList.add('off');
            document.getElementById('alterar-quest').classList.remove('off');
    
    }, 450);
    setTimeout(() => {
       
        document.getElementById('area-dados-questao').classList.remove('flipper');
       
    }, 500);
    setTimeout(() => {
        document.getElementById('area-dados-questao').classList.remove('off');
    }, 450);
    setTimeout(() => {
        
        document.getElementById('area-dados-questao').classList.add('flipper');
        
      
    }, 800);   
}
var campoFiltroTema = document.querySelector("#busca-tema");

campoFiltroTema.addEventListener("input", function() {
    var temas = document.querySelectorAll(".tema-nome");

    if (this.value.length > 0) {
        for (var i = 0; i < temas.length; i++) {
            
            var nome = temas[i].textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                temas[i].classList.add("off");
            } else {
                temas[i].classList.remove("off");
            }
        }
    } else {
        for (var i = 0; i < temas.length; i++) {
            var tema = temas[i];
            tema.classList.remove("off");
        }
    }
});
var campoFiltroQuestao = document.querySelector("#busca-questao");

campoFiltroQuestao.addEventListener("input", function() {
    var questoes = document.querySelectorAll(".questao-nome");

    if (this.value.length > 0) {
        for (var i = 0; i < questoes.length; i++) {
            
            var nome = questoes[i].textContent;
            var expressao = new RegExp(this.value, "i");

            if (!expressao.test(nome)) {
                questoes[i].classList.add("off");
            } else {
                questoes[i].classList.remove("off");
            }
        }
    } else {
        for (var i = 0; i < questoes.length; i++) {
            var questao = questoes[i];
            questao.classList.remove("off");
        }
    }
});






function startSenha(tipo) {
    var senhaInput = document.querySelector("#senhaADM");

    senhaInput.addEventListener("input", function() {
        var msgSenha = document.getElementById('msg-senha');

    if (this.value.length >= 8)
    {
        msgSenha.textContent = 'aguarde... Verificando a senha... se a senha tiver incompleta.. so continuar a digitar...';
        console.log('Teste', tipo, this.value);
        $('#senha-adm').closeModal('close');
    //   senha = getSenhaADM(this.value);

    //   if(senha == true && tipo == 1)
    //   {
    //         postSalva();
    //         $('$senha-adm').modal('close');
    //   }
    //   else if(senha == true && tipo == 2)
    //   {

    //   }

    }
    else
    {
        msgSenha.textContent = 'Digita a Senha de 8 digitos ou mais!';
    } 
    
});
    
  
}

