<?php
// echo '<meta charset="utf-8">';
require "LoginCadastroModal.php";



  if((isset($_GET['txtDadoscadastro'])))
  {
    $dadoscadatro =  preg_split("/[|]+/", $_GET['txtDadoscadastro']);
   

      $cadastro  = new LoginCadastro($dadoscadatro[1],$dadoscadatro[2]);

    echo $cadastro->CriarConta($dadoscadatro[0],$dadoscadatro[4],$dadoscadatro[3], $dadoscadatro[5]);


  }
  // $nome = $_POST['nomefunc'];

  if((isset($_POST['nomefunc']))&&(isset($_POST['sobrenomefunc']))&&(isset($_POST['numerofunc']))&&(isset($_POST['funcaofunc'])))
  {
      $nome = $_POST['nomefunc'];
      $sobrenome = $_POST['sobrenomefunc'];
      $funcao = $_POST['funcaofunc'];
      $inicialNome = substr($nome,0,1);
      $inicialsobre = substr($sobrenome,0,1);
      $gera = rand(1,500);

      $email = $nome.".".$sobrenome.$inicialNome.$inicialsobre.$gera."@empresa.com";
      $senha =  gerar_senha(8, true, true, true, true);
      
   
        if((strcasecmp($funcao, "Auto Atendimento"))==0)
        {
          $nivel = 1;
         
          $textoEmail = "Seu email é: ".$email;
          $textoSenha  = "Sua senha é: ".$senha;
          echo '<script language="javascript" type="text/javascript">alert("'.$textoEmail.'");</script>';
          echo '<script language="javascript" type="text/javascript">alert("'.$textoSenha.'");</script>';
          $cadastro  = new LoginCadastro( $email , $senha) ;
          echo $cadastro->CriarConta($nome." ".$sobrenome, $nivel);


        }
        else if((strcasecmp($funcao, "Intérprete"))==0)
        {
          $nivel = 2;
          $textoEmail = "Seu email é: ".$email;
          $textoSenha  = "Sua senha é: ".$senha;
          echo '<script language="javascript" type="text/javascript">alert("'.$textoEmail.'");</script>';
          echo '<script language="javascript" type="text/javascript">alert("'.$textoSenha.'");</script>';
          $cadastro  = new LoginCadastro( $email , $senha) ;
          echo $cadastro->CriarConta($nome." ".$sobrenome, $nivel);

        }
        else if((strcasecmp($funcao, "Escolher..."))==0)
        {
         echo "<script language='javascript' type='text/javascript'>alert('Escolher uma função');window.location.href='../cadastrodaempresa.html'</script>";
        }
  }
  



 
  if(isset($_GET['txtDadoslogin']))
  {
     $dadoslogin = preg_split("/[,]+/", $_GET['txtDadoslogin']);
    $login = new LoginCadastro ($dadoslogin[0],$dadoslogin[1]);
    echo $login->Login();
  }

 




  function gerar_senha($tamanho, $maiusculas, $minusculas, $numeros, $simbolos){
    $ma = "ABCDEFGHIJKLMNOPQRSTUVYXWZ"; // $ma contem as letras maiúsculas
    $mi = "abcdefghijklmnopqrstuvyxwz"; // $mi contem as letras minusculas
    $nu = "0123456789"; // $nu contem os números
    $si = "!@#$%¨&*()_+="; // $si contem os símbolos
    $senha = null;
   
    if ($maiusculas){
          // se $maiusculas for "true", a variável $ma é embaralhada e adicionada para a variável $senha
          $senha .= str_shuffle($ma);
    }
   
      if ($minusculas){
          // se $minusculas for "true", a variável $mi é embaralhada e adicionada para a variável $senha
          $senha .= str_shuffle($mi);
      }
   
      if ($numeros){
          // se $numeros for "true", a variável $nu é embaralhada e adicionada para a variável $senha
          $senha .= str_shuffle($nu);
      }
   
      if ($simbolos){
          // se $simbolos for "true", a variável $si é embaralhada e adicionada para a variável $senha
          $senha .= str_shuffle($si);
      }
   
      // retorna a senha embaralhada com "str_shuffle" com o tamanho definido pela variável $tamanho
      return substr(str_shuffle($senha),0,$tamanho);
  }












?>
