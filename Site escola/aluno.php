<?php

session_start();

   include_once("conexao.php");

 
   if((isset($_GET["txtPT"])))
    {
        if((isset($_SESSION['usuarioIdAluno'])))
        {
            $pt = $_GET["txtPT"];
            $idAluno = $_SESSION['usuarioIdAluno'];
     
            $sql_select = "SELECT DISTINCT tema FROM mandarquestoes WHERE idaluno = $idAluno and materia= '$pt' ";
            mysqli_query($conn,"SET NAMES 'utf8'");
                    mysqli_query($conn,'SET character_set_connection=utf8');
                    mysqli_query($conn,'SET character_set_client=utf8');
                    mysqli_query($conn, 'SET character_set_results=utf8');
            $result_select=mysqli_query($conn, $sql_select);
            $cont = mysqli_affected_rows($conn);
            $resturnPT = ' <div class="titulo-mt text-center">
            <i class="material-icons">description</i>
            <span> Português </span>
        </div>';
            if ($cont > 0) {
     
             while($arrayGetQuest =  mysqli_fetch_assoc($result_select))
             {
     
                
                 $temaquest = $arrayGetQuest['tema'];
                
                     $resturnPT.='<div class="move-mt text-center" name="'.$pt.'">
                     <span>'.$temaquest.'</span>
                 </div>';
     
              
     
             
     
             }
            
             
         }
         else 
         {
             $resturnPT.='<div class="not-move text-center">
             <span>Não tem atividade em Português!  :)</span>
                 </div>';
            
     
         }
         echo $resturnPT;
        }
        else {
            echo 'login';
        }
  
}
else if ((isset($_GET["txtMT"])))
        {

            if((isset($_SESSION['usuarioIdAluno'])))
            {
                $mt = $_GET["txtMT"];
                $idAluno = $_SESSION['usuarioIdAluno'];
         $resturnPT = ' <div class="titulo-mt text-center">
                <i class="material-icons">description</i>
                <span> Matemática </span>
            </div>
            ';
                $sql_mt = "SELECT DISTINCT tema FROM mandarquestoes WHERE idaluno = $idAluno and materia= '$mt' ";
                mysqli_query($conn,"SET NAMES 'utf8'");
                        mysqli_query($conn,'SET character_set_connection=utf8');
                        mysqli_query($conn,'SET character_set_client=utf8');
                        mysqli_query($conn, 'SET character_set_results=utf8');
                $result_mt=mysqli_query($conn, $sql_mt);
                $contM = mysqli_affected_rows($conn);
                
                if ($contM > 0) {
            
                 while($arrayGetQuest =  mysqli_fetch_assoc($result_mt))
                 {
                 
         
                 $temaquest = $arrayGetQuest['tema'];
                 
                         $resturnPT.='<div class="move-mt text-center" name="'.$mt.'">
                         <span>'.$temaquest.'</span>
                     </div>';
         
                 
                   
                }
            
    
           }
           else
           {
            $resturnPT.='<div class="not-move text-center">
            <span>Não tem atividade em Matemática!  :)</span>
                </div>';
           }
           echo $resturnPT;
            }
        
   }
   else if((isset($_GET["txtMateria"]))&&(isset($_GET["txtTema"])))
   {
    $mt = $_GET["txtMateria"];
    $tema = $_GET["txtTema"];
    $_SESSION['temaAtual'] = $tema;
    $_SESSION['MtAtual'] = $mt;
    $idAluno = $_SESSION['usuarioIdAluno'];
        $sql_select = "SELECT * FROM mandarquestoes WHERE materia = '$mt' and tema= '$tema' and idaluno=$idAluno ";
        mysqli_query($conn,"SET NAMES 'utf8'");
                mysqli_query($conn,'SET character_set_connection=utf8');
                mysqli_query($conn,'SET character_set_client=utf8');
                mysqli_query($conn, 'SET character_set_results=utf8');
        $result_select=mysqli_query($conn, $sql_select);
        $cont = mysqli_affected_rows($conn);
        $_SESSION['quantQuestao'] = $cont;
       echo 'Total de questões: '.$cont.'<br>'. ' Tema: <span id="tema-php">'.$tema.'</span>';
        if ($cont > 0)
        {
            $return = '';
            $contC=0;
            while ($array =  mysqli_fetch_assoc($result_select))
             {
                $idQuest =  $array['idquestao'];
                $sql= "SELECT * FROM questoes WHERE idquestao = $idQuest";
                mysqli_query($conn,"SET NAMES 'utf8'");
                mysqli_query($conn,'SET character_set_connection=utf8');
                mysqli_query($conn,'SET character_set_client=utf8');
                mysqli_query($conn, 'SET character_set_results=utf8');
                $result_sql=mysqli_query($conn, $sql);
                $contS = mysqli_affected_rows($conn);
                if($contS > 0)
                {

               
                    while ($arraQuest = mysqli_fetch_assoc($result_sql) ) 
                    {
                     
                        mysqli_query($conn,"SET NAMES 'utf8'");
                        mysqli_query($conn,'SET character_set_connection=utf8');
                        mysqli_query($conn,'SET character_set_client=utf8');
                        mysqli_query($conn, 'SET character_set_results=utf8');
                        $alt  = 	preg_split("/[´`]+/", $arraQuest['alternativa']);
                        $questid = $arraQuest['idquestao'];
                        $return.= "<ul class='collection' name='$questid'><li class='collection-item valign-wrapper' id='$questid'><i class='material-icons'>description</i><span>".'Questão '.$arraQuest["numeroQuestao"].': '. $arraQuest["pergunta"] ."</span></li>";
                        $return.= "<li class='collection-item '>";
                        $return.="<div name='A)'><input class=' with-gap ' name='g$contC' type='radio' id='a$contC' value='A)'  /><label class='black-text ' for='a$contC'><span>A) " . $alt[0] . "</span></label></div>";
                        $return.="<div><input class='with-gap' name='g$contC' type='radio' id='b$contC' value='B)' /><label class='black-text' for='b$contC'><span>B) ". $alt[1] . "</span></label></div>";
                        $return.= " <div><input class='with-gap' name='g$contC' type='radio' id='c$contC' value='C)' /><label class='black-text' for='c$contC'><span>C) " . $alt[2] . "</span></label></div>";
                        $return.= " <div><input class='with-gap' name='g$contC' type='radio' id='d$contC' value='D)' /><label class='black-text' for='d$contC'><span>D) " . $alt[3] . "</span></label></div>";
                        $return.= "<div><input class='with-gap' name='g$contC' type='radio' id='e$contC' value='E)' /><label class='black-text' for='e$contC'><span>E) " .$alt[4] . "</span></label></div></p>";
                        $return.="</li>";
                        $return.="</ul>";
                        $contC++;
                    }
                }
            }
                echo $return.='<div class="send-btn text-center"  onclick="sendres()"  id="send-prof">
                <a class="waves-effect waves-light btn   light-blue darken-1"  href="#btns"><i class="material-icons right">send</i>Enviar resposta para professor(a)</a>
                </div><div class="text-center" id="btns">  <div class="progress btn-off  black">
                <div class="indeterminate  light-blue darken-1"></div>
            </div> </div>';
        }


   }
   else if((isset($_GET["txtresposta"]))&&(isset($_GET['txtId'])))
   {
       
     $arrayresposta = preg_split("/[,]+/", $_GET['txtresposta']);
     $arrayId = preg_split("/[,]+/", $_GET['txtId']);
     $contR = count($arrayresposta);
     $contI = count($arrayId);
     $resturnmesg = '';
     $arrayQuestaoCorreta =  array();
     $arrayCorreta = array();
     $arrayQuestaoErrada = array();
     $arrayErrada = array();
        for ($i=0; $i < $contR ; $i++) { 
         
                $id= $arrayId[$i];
                $sql_select = "SELECT * FROM gabarito WHERE idquestao = $id LIMIT 1 ";
                mysqli_query($conn,"SET NAMES 'utf8'");
                        mysqli_query($conn,'SET character_set_connection=utf8');
                        mysqli_query($conn,'SET character_set_client=utf8');
                        mysqli_query($conn, 'SET character_set_results=utf8');
                $result_select=mysqli_query($conn, $sql_select);
                $cont = mysqli_affected_rows($conn);
                
                if($cont >0 )
                {

                    while ($arrayQ  = mysqli_fetch_assoc($result_select))
                    {
                     
                        if($arrayQ['resposta']== $arrayresposta[$i])
                        {
                            $arrayQuestaoCorreta[ $arrayId[$i]] = $arrayresposta[$i];
                            
                            // $resturnmesg.='<script> checkgabarito("certa") </script>';
                       
                        }
                        else
                        {
                          
                            $arrayQuestaoErrada[ $arrayId[$i]] = $arrayresposta[$i];
                            $arrayCorreta[$arrayId[$i]] = $arrayQ['resposta'];;
                           
                            // $arrayCorreta =   array_values($arrayresposta);
                            // var_dump($arrayCorreta);
                
                       

                            // $resturnmesg.= '<h6>Testes</h6><script language="javascript" type="text/javascript">alert("Não foi possível cadastrar esse usuário");</script>';
                        }
                    }

                }   
             
    }

$arrQuestaoCorreta = '';
$arrQuestaoErrada = '';
$arrCorreta = '';
$arrErrada = '';


                foreach ($arrayQuestaoCorreta as $key => $value) {
                    
                    $arrQuestaoCorreta.= '.'.$key.'.'.$arrayQuestaoCorreta[$key]; 
                }
                foreach ($arrayQuestaoErrada as $key => $value) {
                    $arrQuestaoErrada.= '.'.$key.'.'. $arrayQuestaoErrada[$key];
                }
                foreach ($arrayCorreta as $key => $value) {
                    $arrCorreta.= '.'.$key.'.'.$arrayCorreta[$key]; 
                }


    echo $resturnmesg.="<div N class='send-btn text-center' id=btn-php    >
    <a  onclick=fazergabarito('$arrQuestaoCorreta','$arrQuestaoErrada','$arrCorreta') name= $arrQuestaoCorreta;$arrQuestaoErrada;$arrCorreta class='disabled waves-effect waves-light btn   light-blue darken-1' href='#questao-php' id='btn-gab'><i class='material-icons right'>send</i>Ver as corretas?</a>
    </div>";
    
   }

   else if((isset($_GET["txtDadosParaProf"])))
   {    
       
                $arrayDadosProf = preg_split("/[;]+/", $_GET['txtDadosParaProf']);
                $questCerto =  preg_split("/[,]+/", $arrayDadosProf[0]);
                $questErrado =  preg_split("/[,]+/",$arrayDadosProf[1]);
                $idCerto = array();
                $idErrado = array();
                $alteErrado = array();
                $ALLid = array();
                $qtCerto = 0;
                $qtErrado = 0;
                    $IDCorreta = '';
                    $IDErrada = '';
                    $AltErrado = '';
                    $idAluno = $_SESSION['usuarioIdAluno'];
                
                if ($arrayDadosProf[0] != 'errou todas') {
                    for ($o=0; $o < count($questCerto); $o++) { 
                        if($o % 2)
                        {
                        
                        }
                        else
                        {
                            $idCerto[] = $questCerto[$o];
                            $ALLid[] = $questCerto[$o];
                        }
                    
                    
                
                    }
                    $qtCerto =  count($idCerto);
                for ($i=0 ; $i <  $qtCerto   ; $i++    ) { 
                
                    if (($i+1) == $qtCerto )
                    {
                        $IDCorreta .= $idCerto[$i];
                    }
                    else
                    {
                        $IDCorreta .= $idCerto[$i].',';
                    }
                }
                }
                else
                {
                    $IDCorreta = 'Não aceitou nenhuma';
                }
            if ($arrayDadosProf[1] != 'todas estao certa' && !$arrayDadosProf[2] != 'todas estao certa') {
                for ($p=0; $p < count($questErrado); $p++) { 
                    if($p % 2)
                    {
                        $alteErrado[] = $questErrado[$p];
                    }
                    else
                    {
                        $idErrado[] = $questErrado[$p];
                        $ALLid[] = $questErrado[$p];
                    
                    }
                }
                
                $qtErrado =  count($idErrado);
                for ($i=0; $i <    $qtErrado ; $i++) { 
                        if(($i+1) ==   $qtErrado )
                        {
                            $IDErrada .= $idErrado[$i];
                            $AltErrado.= $alteErrado[$i];
                        }
                        else
                        {
                            $IDErrada .= $idErrado[$i].',';
                            $AltErrado.= $alteErrado[$i].',';

                        }

                
                }
            
            }
            else
            {
                $IDErrada= 'Todas estão certas!!';
                $AltErrado = 'Todas estão certas!!';
            }
            $tema = $_SESSION['temaAtual'];
            $mate = $_SESSION['MtAtual'];
            $quant = $_SESSION['quantQuestao'];
            $idAluno = $_SESSION['usuarioIdAluno'];
            $sql_select = "SELECT * FROM respostadoaluno WHERE tema = '$tema' and materia = '$mate' and idaluno = $idAluno  LIMIT 1 ";
            mysqli_query($conn,"SET NAMES 'utf8'");
                    mysqli_query($conn,'SET character_set_connection=utf8');
                    mysqli_query($conn,'SET character_set_client=utf8');
                    mysqli_query($conn, 'SET character_set_results=utf8');
            $result_select=mysqli_query($conn, $sql_select);
            $cont = mysqli_affected_rows($conn);
            $cont = 0;
                        if($cont >0 )
                        {

                                $arrayQ  = mysqli_fetch_assoc($result_select);
                                $quant_BD = $arrayQ['quantQuest'];
                                $idRes = $arrayQ['idResAluno'];
                                $quant_BD = $quant;
                                $sql_insertResposta = "update  respostadoaluno set idsquestoescerta = '$IDCorreta', idsquestoeserrado = '$IDErrada',ALtErrado = '$AltErrado',quantCerto = $qtCerto, quantErros = $qtErrado, quantQuest = $quant_BD where  idResAluno = $idRes" ;
                                mysqli_query($conn,"SET NAMES 'utf8'");
                                mysqli_query($conn,'SET character_set_connection=utf8');
                                mysqli_query($conn,'SET character_set_client=utf8');
                                mysqli_query($conn, 'SET character_set_results=utf8');
                                if(!$result=mysqli_query($conn, $sql_insertResposta))
                                {
                                echo 'Erro';
                                
                                }
                                else
                                {

                                    $deucerto = false;
                                    for ($i=0  ; $i < count($ALLid) ; $i++ ) { 
                                        $id = $ALLid[$i];
                                        $sql_insertResposta = "delete from mandarquestoes where idquestao = $id;";
                                        mysqli_query($conn,"SET NAMES 'utf8'");
                                        mysqli_query($conn,'SET character_set_connection=utf8');
                                        mysqli_query($conn,'SET character_set_client=utf8');
                                        mysqli_query($conn, 'SET character_set_results=utf8');
                                        if(!$result=mysqli_query($conn, $sql_insertResposta))
                                        {
                                        
                                            $deucerto = false;
                                            break;
                                        }
                                        else
                                        {
                                            $deucerto = true;
                            
                                        
                                        }
                            
                                    
                                    }
                                    if ($deucerto == true) {
                                        echo 'Sucesso';
                                    } else {
                                    echo 'Erro falta';
                                    }
                                }
                        }
                        else
                        {

                $sql_insertResposta = "insert into respostadoaluno (idaluno, idsquestoescerta,idsquestoeserrado,ALtErrado,quantCerto  ,quantErros,tema,materia,quantQuest) values ($idAluno,'$IDCorreta','$IDErrada','$AltErrado', $qtCerto, $qtErrado,'$tema', '$mate', $quant)";
                mysqli_query($conn,"SET NAMES 'utf8'");
                mysqli_query($conn,'SET character_set_connection=utf8');
                mysqli_query($conn,'SET character_set_client=utf8');
                mysqli_query($conn, 'SET character_set_results=utf8');
                if(!$result=mysqli_query($conn, $sql_insertResposta))
                {
                echo 'Erro';
                
                }
                else 
                {
                        $deucerto = false;
                    for ($i=0  ; $i < count($ALLid) ; $i++ ) { 
                        $id = $ALLid[$i];
                        $sql_insertResposta = "delete from mandarquestoes where idquestao = $id;";
                        mysqli_query($conn,"SET NAMES 'utf8'");
                        mysqli_query($conn,'SET character_set_connection=utf8');
                        mysqli_query($conn,'SET character_set_client=utf8');
                        mysqli_query($conn, 'SET character_set_results=utf8');
                        if(!$result=mysqli_query($conn, $sql_insertResposta))
                        {
                        
                            $deucerto = false;
                            break;
                        }
                        else
                        {
                            $deucerto = true;

                        
                        }

                    
                    }
                    if ($deucerto == true) {
                        echo 'Sucesso';
                    } else {
                        echo 'Erro fatal';
                    }
                }

                        }

    

   }
   else if((isset($_GET["txtName"])))
   {   

    echo "Olá Aluno(a) ".$_SESSION['NomeAluno'];    

      
    }
    else if((isset($_GET["txtSair"])))
   {
    unset(
        $_SESSION['usuarioEmailAluno'],
        $_SESSION['usuarioSenhaAluno'],
        $_SESSION['usuarioIdAluno']  ,
        $_SESSION['usuarioTurmaAluno'] ,
        $_SESSION['usuarioIdadeAluno'],
        $_SESSION['usuarioEscolaAluno'] ,
        $_SESSION['NomeAluno']
    );
    echo '1';
   }
?>