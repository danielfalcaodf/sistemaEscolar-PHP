<?php

session_start();

   include_once("conexao.php");

     
   if((isset($_GET["txtBuscaProf"])))
    {
        $mt = $_GET["txtBuscaProf"];
        $sql_select = "SELECT * FROM professor WHERE materia= '$mt' OR materia = 'Português/Matemática'";
        mysqli_query($conn,"SET NAMES 'utf8'");
        mysqli_query($conn,'SET character_set_connection=utf8');
        mysqli_query($conn,'SET character_set_client=utf8');
        mysqli_query($conn, 'SET character_set_results=utf8');
        $result_select=mysqli_query($conn, $sql_select);
        $cont = mysqli_affected_rows($conn);
        $listprof='';
        if ($cont > 0) {

        while($arrayProf =  mysqli_fetch_assoc($result_select))
        {
            
            $nome = $arrayProf['nome'];
            $idProf = $arrayProf['idprof'];
            $materia = $arrayProf['materia'];
            $listprof .= "<a class='collection-item prof-nome waves-effect black-text'
            onclick=flipDadosprof(this) id='$idProf-$materia'>".$nome."</a>";
            
            
        }
        echo $listprof;
        }
    }
    if((isset($_GET["txtGetProf"])))
    {
        $arrIDeMT = preg_split("/[-]+/", $_GET["txtGetProf"]);
        $idProf = $arrIDeMT[0];
        $idUserBD;
        $escolaBD;
        $materiaBD;
        $nomeProfBD;
        $idadeBD;
        $emailBD;
    
        $sql_select = "SELECT * FROM professor WHERE idprof = $idProf";
        mysqli_query($conn,"SET NAMES 'utf8'");
        mysqli_query($conn,'SET character_set_connection=utf8');
        mysqli_query($conn,'SET character_set_client=utf8');
        mysqli_query($conn, 'SET character_set_results=utf8');
        $result_select=mysqli_query($conn, $sql_select);
        $cont = mysqli_affected_rows($conn);
        $listprof='';
        if ($cont > 0) {

            $arrayProf =  mysqli_fetch_assoc($result_select);

            $idUserBD = $arrayProf['idUser'];
            $nomeProfBD  = $arrayProf['nome'];
            $materiaBD = $arrayProf['materia'];
            $escolaBD  = $arrayProf['escola'];
            $idadeBD = $arrayProf['idade'];
            $sql_selectUser = "SELECT * FROM usuarios WHERE idUser = $idProf";
            mysqli_query($conn,"SET NAMES 'utf8'");
            mysqli_query($conn,'SET character_set_connection=utf8');
            mysqli_query($conn,'SET character_set_client=utf8');
            mysqli_query($conn, 'SET character_set_results=utf8');
            $result_selectUser=mysqli_query($conn, $sql_selectUser);
            $contUser = mysqli_affected_rows($conn);
            if ($contUser >  0) 
            {
                $arrayProfUser = mysqli_fetch_assoc( $result_selectUser);
                $emailBD = $arrayProfUser['email'];
                
                echo $nomeProfBD.'|'.$materiaBD.'|'.$escolaBD.'|'.$idadeBD.'|'.$emailBD;

            }
            else
            {
                echo $nomeProfBD.'|'.$materiaBD.'|'.$escolaBD.'|'.$idadeBD.'|'.'Não achamos o login do Professor, mas pode criar aqui';
            }

        }
        else
        {
            echo "Não achamos o Professor dever ser um problema no Banco de Dados";
        }

    }
    if((isset($_GET["txtBuscaAluno"])))
    {
        $turma = $_GET["txtBuscaAluno"];
        $sql_select = "SELECT * FROM alunos WHERE turma= '$turma'";
        mysqli_query($conn,"SET NAMES 'utf8'");
        mysqli_query($conn,'SET character_set_connection=utf8');
        mysqli_query($conn,'SET character_set_client=utf8');
        mysqli_query($conn, 'SET character_set_results=utf8');
        $result_select=mysqli_query($conn, $sql_select);
        $cont = mysqli_affected_rows($conn);
        $listaluno='';
        if ($cont > 0) {

        while($arrayAluno =  mysqli_fetch_assoc($result_select))
        {
            
            $nome = $arrayAluno['nome'];
            $idAluno = $arrayAluno['idaluno'];
            $turmaBD = $arrayAluno['turma'];
            $listaluno .= "<a class=collection-item prof-nome waves-effect black-text'
            onclick=flipDados(this) id='$idAluno-$turmaBD'>".$nome."</a>";
            
            
        }
        echo $listaluno;
        }
    }
    if((isset($_GET["txtGetAluno"])))
    {
        $arrIDeMT = preg_split("/[-]+/", $_GET["txtGetAluno"]);
        $idAluno = $arrIDeMT[0];
        $idUserBD;
        $escolaBD;
        $turmaBD;
        $nomeAlunoBD;
        $idadeBD;
        $emailBD;
    
        $sql_select = "SELECT * FROM alunos WHERE idaluno = $idAluno";
        mysqli_query($conn,"SET NAMES 'utf8'");
        mysqli_query($conn,'SET character_set_connection=utf8');
        mysqli_query($conn,'SET character_set_client=utf8');
        mysqli_query($conn, 'SET character_set_results=utf8');
        $result_select=mysqli_query($conn, $sql_select);
        $cont = mysqli_affected_rows($conn);
        $listAluno='';
        if ($cont > 0) {

            $arrayProf =  mysqli_fetch_assoc($result_select);

            $idUserBD = $arrayProf['idUser'];
            $nomeAlunoBD  = $arrayProf['nome'];
            $turmaBD = $arrayProf['turma'];
            $escolaBD  = $arrayProf['escola'];
            $idadeBD = $arrayProf['idade'];
            $sql_selectUser = "SELECT * FROM usuarios WHERE idUser = $idAluno";
            mysqli_query($conn,"SET NAMES 'utf8'");
            mysqli_query($conn,'SET character_set_connection=utf8');
            mysqli_query($conn,'SET character_set_client=utf8');
            mysqli_query($conn, 'SET character_set_results=utf8');
            $result_selectUser=mysqli_query($conn, $sql_selectUser);
            $contUser = mysqli_affected_rows($conn);
            if ($contUser >  0) 
            {
                $arrayProfUser = mysqli_fetch_assoc( $result_selectUser);
                $emailBD = $arrayProfUser['email'];
                
                echo $nomeAlunoBD.'|'.$turmaBD.'|'.$escolaBD.'|'.$idadeBD.'|'.$emailBD;

            }
            else
            {
                echo $nomeAlunoBD.'|'.$turmaBD.'|'.$escolaBD.'|'.$idadeBD.'|'.'Não achamos o login do Aluno(a), mas pode criar aqui';
            }

        }
        else
        {
            echo "Não achamos o Aluno(a) dever ser um problema no Banco de Dados";
        }

    } 
    if((isset($_GET["txtBuscaTema"])))
    {
        $mt = $_GET["txtBuscaTema"];
        $sql_select = "SELECT DISTINCT tema FROM questoes WHERE materia= '$mt'";
        mysqli_query($conn,"SET NAMES 'utf8'");
        mysqli_query($conn,'SET character_set_connection=utf8');
        mysqli_query($conn,'SET character_set_client=utf8');
        mysqli_query($conn, 'SET character_set_results=utf8');
        $result_select=mysqli_query($conn, $sql_select);
        $cont = mysqli_affected_rows($conn);
        $listTema='';
        if ($cont > 0) {

        while($arrayTema =  mysqli_fetch_assoc($result_select))
        {
            
            $nomeTema = $arrayTema['tema'];
            
            
            $listTema .= '<a class="collection-item tema-nome waves-effect black-text"
            onclick="flipDadosQuest(this)" id="'.$nomeTema.'-'.$mt.'">'.$nomeTema.'</a>';
            
            
        }
        echo $listTema;
        }
    }
    if((isset($_GET["txtListQuestao"])))
    {
        $arrIDeMT = preg_split("/[-]+/", $_GET["txtListQuestao"]);
        $tema = $arrIDeMT[0];
        $materia = $arrIDeMT[1];
        $questao;
    
        $sql_select = "SELECT * FROM alunos WHERE idaluno = $idAluno";
        mysqli_query($conn,"SET NAMES 'utf8'");
        mysqli_query($conn,'SET character_set_connection=utf8');
        mysqli_query($conn,'SET character_set_client=utf8');
        mysqli_query($conn, 'SET character_set_results=utf8');
        $result_select=mysqli_query($conn, $sql_select);
        $cont = mysqli_affected_rows($conn);
        $listAluno='';
        if ($cont > 0) {

            $arrayProf =  mysqli_fetch_assoc($result_select);

            $idUserBD = $arrayProf['idUser'];
            $nomeAlunoBD  = $arrayProf['nome'];
            $turmaBD = $arrayProf['turma'];
            $escolaBD  = $arrayProf['escola'];
            $idadeBD = $arrayProf['idade'];
            $sql_selectUser = "SELECT * FROM usuarios WHERE idUser = $idAluno";
            mysqli_query($conn,"SET NAMES 'utf8'");
            mysqli_query($conn,'SET character_set_connection=utf8');
            mysqli_query($conn,'SET character_set_client=utf8');
            mysqli_query($conn, 'SET character_set_results=utf8');
            $result_selectUser=mysqli_query($conn, $sql_selectUser);
            $contUser = mysqli_affected_rows($conn);
            if ($contUser >  0) 
            {
                $arrayProfUser = mysqli_fetch_assoc( $result_selectUser);
                $emailBD = $arrayProfUser['email'];
                
                echo $nomeAlunoBD.'|'.$turmaBD.'|'.$escolaBD.'|'.$idadeBD.'|'.$emailBD;

            }
            else
            {
                echo $nomeAlunoBD.'|'.$turmaBD.'|'.$escolaBD.'|'.$idadeBD.'|'.'Não achamos o login do Aluno(a), mas pode criar aqui';
            }

        }
        else
        {
            echo "Não achamos o Aluno(a) dever ser um problema no Banco de Dados";
        }

    } 





?>