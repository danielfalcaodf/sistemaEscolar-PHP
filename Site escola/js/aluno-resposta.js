function fazergabarito(questaoCorreta, questaoErrado, correta) {
    
    var questaoCIDS = [];
    var corretaLetra = [];
    var questoescorretaIDS = [];
    var questaoEIDS = [];
    var erradoLetra = [];
    var questoeserradoIDS = [];
    var gabaritos= [];
    var gabaQuestao = [];
    var gabaLetra = [];
    var corretaIDS = questaoCorreta.split('.');
    var ErradaIDS = questaoErrado.split('.')
    var gabaritoCerto = correta.split('.')

    for (let index = 1; index < corretaIDS.length; index++) {


        if (index % 2) {
            questaoCIDS.push(corretaIDS[index])
        }
        else {
            corretaLetra.push(corretaIDS[index])
        }

    }
    for (let ix = 0; ix < corretaLetra.length; ix++) {

        questoescorretaIDS.push({ id: questaoCIDS[ix], letracerta: corretaLetra[ix] });
    }
    for (let inx = 1; inx < ErradaIDS.length; inx++) {
        if (inx % 2)
        {
            questaoEIDS.push(ErradaIDS[inx]);

        }
        else
        {
            erradoLetra.push(ErradaIDS[inx]);
        }
        
    }
    
    for (let ndex = 0; ndex <  questaoEIDS.length; ndex++)
    {
       questoeserradoIDS.push({id: questaoEIDS[ndex], letraerrada: erradoLetra[ndex]});

    } 
    for (let nd = 1; nd < gabaritoCerto.length; nd++) {
        if(nd % 2)
        {
            gabaQuestao.push(gabaritoCerto[nd]);
        }
        else
        {
            gabaLetra.push(gabaritoCerto[nd]);
        }
        
    } 
    for (let int = 0; int < gabaQuestao.length; int++) {
      gabaritos.push({id: gabaQuestao[int], letragaba: gabaLetra[int]});
        
    }


    mostragabarito(questoescorretaIDS, questoeserradoIDS, gabaritos );

}

function mostragabarito(questoesCIDS, questoesEIDS, gabaritos) 
{
    questoesCIDS.forEach(element => {
        var questaocertaID = document.getElementById(element.id);
        var questaocertaName = document.getElementsByName(element.id);
        questaocertaID.classList.add('questao-certa');
        for (let index = 0; index < questaocertaName[0].children[1].querySelectorAll('div').length; index++) {
            if(questaocertaName[0].children[1].querySelectorAll('div')[index].querySelector('input').value == element.letracerta)
            {
                questaocertaName[0].children[1].querySelectorAll('div')[index].querySelector('span').classList.add('questao-certa');
                
            }
            
        }
      
    });
    questoesEIDS.forEach(objeto => {
        var questaoerrdaID = document.getElementById(objeto.id);
        var questaoerrdaName = document.getElementsByName(objeto.id);

        questaoerrdaID.classList.add('questao-errada');
        for (let index = 0; index < questaoerrdaName[0].children[1].querySelectorAll('div').length; index++) {
            if(questaoerrdaName[0].children[1].querySelectorAll('div')[index].querySelector('input').value == objeto.letraerrada)
            {
                questaoerrdaName[0].children[1].querySelectorAll('div')[index].querySelector('span').classList.add('questao-errada');
            }
            
        }
    });
    gabaritos.forEach(element => {
        var certaName = document.getElementsByName(element.id);
        for (let index = 0; index < certaName[0].children[1].querySelectorAll('div').length; index++) {
            if(certaName[0].children[1].querySelectorAll('div')[index].querySelector('input').value == element.letragaba)
            {
                certaName[0].children[1].querySelectorAll('div')[index].querySelector('span').classList.add('questao-certa');
            }
            
        }
        
    });
       
    var btnGab = document.getElementById("btns");

    if(btnGab.querySelectorAll("a")[1] == null )
    {
        btnGab.innerHTML += '<a class="waves-effect waves-light btn   light-blue darken-1" href="./aluno.html">Home</a>'
    }

  
   
    
}


function RespostaParaProf(dadosResposta) {
    
    var respostas = dadosResposta.split(';')

    
    var queIDeAL = respostas[0].split('.')
    var questaocaertoIDeAL = [];
    var queErrIDeaAL = respostas[1].split('.');
    var questaoerradoIDeAl = []
    var queGabIDeAL = respostas[2].split('.');
    var  questaoGabaritoIDeAl = [];



    for (let index = 1; index < queIDeAL.length; index++) {
        questaocaertoIDeAL.push(queIDeAL[index]);
        
    }
    for (let index = 1; index < queErrIDeaAL.length; index++) {
       questaoerradoIDeAl.push(queErrIDeaAL[index]);
        
    }
    for (let index = 1; index < queGabIDeAL.length; index++) {
        questaoGabaritoIDeAl.push(queGabIDeAL[index])
        
    }

    if(questaocaertoIDeAL.toString() == '')
    {
       questaocaertoIDeAL.push('errou todas');
    }
    if(questaoerradoIDeAl.toString() == '' && questaoGabaritoIDeAl.toString()=='')
    {
        questaoerradoIDeAl.push('todas estao certa');
        questaoGabaritoIDeAl.push('todas estao certa');
    }

  
    SendRespostaParaProf(questaocaertoIDeAL,questaoerradoIDeAl,questaoGabaritoIDeAl);



}
