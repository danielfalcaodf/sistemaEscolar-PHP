
function startdrop() 
{


    $(".move-mt").draggable( {revert: true , scroll: false});
    $("#area").droppable({
        accept:".move-mt",
        drop: function (event, ui) {
          $(".move-mt").draggable( {revert: true , scroll: false});
      
          $(this).css('background', 'rgb(0,200,0)');
         
          
          setTimeout(function () {
                  // e.target.removeChild(document.getElementById(data))
               
                  
                  document.getElementById('col-3').classList.remove('col-3');
                  document.getElementById('area-9').classList.remove('col-9');
                  document.getElementById('area-9').classList.add('col-12');
                //   document.getElementById('painel-aluno').classList.remove('card-off');
                //   document.getElementById('materia-text').classList.remove('card-off');
            
            
                
                  document.getElementById('materias-aluno').classList.add('mt-escondito');
                  document.getElementById('area-9').classList.add('flipper');
            
                }, 100);
                setTimeout(function () {
                    var elemente =    ui.draggable.context;
              
                //   elemente.querySelector('.turma').classList.add('collapsible-header');
                //   var elementeNew = elemente.querySelector('.turma');
                //   var clone = elementeNew.cloneNode(true);
                //   clone.setAttribute('id', 'tm');
          
                  document.getElementById('text-questoes').classList.add('flipper');
                //   document.getElementById('li-sala').insertAdjacentElement('afterbegin', clone);
                // elemente.querySelector('.turma').classList.remove('collapsible-header');
                // getAluno(clone);
                getQuestaluno(elemente);
                }, 1000);
                // sala = true;
                // validaMat();
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
