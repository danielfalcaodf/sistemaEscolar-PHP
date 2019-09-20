
function postDadosProf(dados)
{
    

    var inputNome = document.getElementById('nome-prof');
    var divMateria = document.getElementById('materia-do-prof');
    var divEscola = document.getElementById('escola-do-prof');
    var inputIdade = document.getElementById('idade-prof');
    var inputEmail = document.getElementById('email-prof');
    var msgprof = document.getElementById('msg-prof');


        if(dados == 'Não achamos o Professor dever ser um problema no Banco de Dados')
        {
            msgprof.textContent = 'Não achamos o Professor dever ser um problema no Banco de Dados'
        }
        else
        {
            var arrDados = dados.split('|');
            if(arrDados[4] == 'Não achamos o login do Professor, mas pode criar aqui')
            {
                msgprof.textContent = arrDados[4];
            }
            else
            {
                inputNome.value = arrDados[0];
                divMateria.textContent = arrDados[1];
                divEscola.textContent = arrDados[2];
                inputIdade.value = arrDados[3];
                inputEmail.value = arrDados[4];
    
            }
            
        }



    



}
function postDadosAluno(dados)
{
    

    var inputNome = document.getElementById('nome-aluno');
    var divTurma = document.getElementById('turma-aluno');
    var divEscola = document.getElementById('escola-aluno');
    var inputIdade = document.getElementById('idade-aluno');
    var inputEmail = document.getElementById('email-aluno');
    var msgaluno = document.getElementById('msg-aluno');


        if(dados == 'Não achamos o Aluno(a) dever ser um problema no Banco de Dados')
        {
            msgaluno.textContent = 'Não achamos o Aluno(a) dever ser um problema no Banco de Dados';
        }
        else
        {
            var arrDados = dados.split('|');
            if(arrDados[4] == 'Não achamos o login do Aluno(a), mas pode criar aqui')
            {
                msgaluno.textContent = arrDados[4];
            }
            else
            {
                inputNome.value = arrDados[0];
                divTurma.textContent = arrDados[1];
                divEscola.textContent = arrDados[2];
                inputIdade.value = arrDados[3];
                inputEmail.value = arrDados[4];
    
            }
            
        }



    



}