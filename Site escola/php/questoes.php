<?php

session_start();


    include_once("conexao.php");
    
    $sql_select = "SELECT * FROM questoes LIMIT 1";
					$result_select=mysqli_query($conn, $sql_select);
					$array =  mysqli_fetch_assoc($result_select);
					$peguntas = $array['pergunta'];


                    $_SESSION['questao'] = $peguntas; 




?>