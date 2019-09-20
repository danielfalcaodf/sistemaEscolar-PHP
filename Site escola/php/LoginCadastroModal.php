<?php

// 	if((isset($_POST['email'])) && (isset($_POST['senha'] ))){
//
//
//
// }


/**
 *
 */
class LoginCadastro
{
	private $login;
	private	$senha;
	private $nomeCompleto;
	private $escola;
	private $turma;
	private $nivel;
	function __construct($login,$senha)
	{


			$this->login = $login;
			$this->senha = MD5($senha);

	}

	public function CriarConta($nomeCompleto, $escola, $turma, $nivel)
	{	$this->nomeCompleto= $nomeCompleto;
		$this->escola = $escola;
		$this->turma = $turma;
		$this->nivel = $nivel;
		include_once("../conexao.php");

		if($this->nomeCompleto == "" || $this->nomeCompleto == null){
		return "<span class='msg-errado'>O campo nome ou Sobrenome deve ser preenchido<span>";

		 }
		 if($this->login == ""||$this->login == null)
		 {
				return "<span class='msg-errado'>O campo email  deve ser preenchido</span>";
		 }

		 if ($this->senha == "" || $this->senha==null)
		 {
			return "<span class='msg-errado'>O campo senha deve ser preenchido</span>";
		 }
			else
				{

					$sql_select = "SELECT email FROM usuarios WHERE email = '$this->login'LIMIT 1";
					mysqli_query($conn,"SET NAMES 'utf8'");
					mysqli_query($conn,'SET character_set_connection=utf8');
					mysqli_query($conn,'SET character_set_client=utf8');
					mysqli_query($conn, 'SET character_set_results=utf8');
					$result_select=mysqli_query($conn, $sql_select);
					$array =  mysqli_fetch_assoc($result_select);
					$logarray = $array['email'];
					if($logarray == $this->login){

							return	"<span class='msg-errado'>Esse login já existe</span>";
							die();

						}
						else{


								$sql_user = "insert into usuarios (email,senha,niveisacessoID) values ('$this->login','$this->senha','$this->nivel')";
								mysqli_query($conn,"SET NAMES 'utf8'");
								mysqli_query($conn,'SET character_set_connection=utf8');
								mysqli_query($conn,'SET character_set_client=utf8');
								mysqli_query($conn, 'SET character_set_results=utf8');
								
								if(!$result=mysqli_query($conn, $sql_user))
								{
									return "<span class='msg-errado'>Não foi possível cadastrar esse usuário</span>";

												die ();
								}
									else{
										
										$sql_select = "SELECT idUser FROM usuarios WHERE email = '$this->login'LIMIT 1";
										mysqli_query($conn,"SET NAMES 'utf8'");
										mysqli_query($conn,'SET character_set_connection=utf8');
										mysqli_query($conn,'SET character_set_client=utf8');
										mysqli_query($conn, 'SET character_set_results=utf8');
										$result_select=mysqli_query($conn, $sql_select);
										$array =  mysqli_fetch_assoc($result_select);
										$idarray = $array['idUser'];
										if($idarray == '' || $idarray == null)
										{
											return "<span class='msg-errado'>Não foi possível cadastrar esse usuário</span>";

											die ();
										}
										else
										{
										$sql="insert into alunos (nome,turma,escola,idUser) values ('$this->nomeCompleto','$this->turma','$this->escola','$idarray')";
									
										mysqli_query($conn,"SET NAMES 'utf8'");
										mysqli_query($conn,'SET character_set_connection=utf8');
										mysqli_query($conn,'SET character_set_client=utf8');
										mysqli_query($conn, 'SET character_set_results=utf8');
										if(!$result=mysqli_query($conn, $sql))
										{
											return "<span class='msg-errado'>Não foi possível cadastrar esse usuário</span>";

											die ();
										}
										else {
											return '<span class="msg-certo">Usuário cadastrado com sucesso!</span> <div class="white-text">
									<a class="waves-effect waves-light btn" href="./login.html" >Login</a>
								  </div>';
										}
										}
									
									}

							 }
				// $db->close(); //fecha


			}



	}
		public function Login()
		{
			session_start();
			//Incluindo a conexão com banco de dados
			include_once("../conexao.php");
			//O campo usuário e senha preenchido entra no if para validar
			if((isset($this->login)) && (isset($this->senha))){
				$usuario = mysqli_real_escape_string($conn, $this->login); //Escapar de caracteres especiais, como aspas, prevenindo SQL injection
				$senha = mysqli_real_escape_string($conn, $this->senha);
				

				//Buscar na tabela usuario o usuário que corresponde com os dados digitado no formulário
				$result_usuario = "SELECT * FROM usuarios WHERE email = '$usuario' and senha = '$senha' LIMIT 1";
				$resultado_usuario = mysqli_query($conn, $result_usuario);
				$resultado = mysqli_fetch_assoc($resultado_usuario);

				//Encontrado um usuario na tabela usuário com os mesmos dados digitado no formulário
				if(isset($resultado)){
					$idUser = $resultado['idUser'];
					// $_SESSION['usuarioNome'] = $resultado['nome'];
					$_SESSION['usuarioNiveisAcessoId'] = $resultado['niveisacessoID'];
				
					if($_SESSION['usuarioNiveisAcessoId'] == "1"){
						$result_prof = "SELECT * FROM professor WHERE idUser = '$idUser' ";
						mysqli_query($conn,"SET NAMES 'utf8'");
						mysqli_query($conn,'SET character_set_connection=utf8');
						mysqli_query($conn,'SET character_set_client=utf8');
						mysqli_query($conn, 'SET character_set_results=utf8');
						$resultado_prof = mysqli_query($conn, $result_prof);
						$resultadoprof = mysqli_fetch_assoc($resultado_prof);
						if(isset($resultadoprof))
						{
							$_SESSION['usuarioEmailProf'] = $resultado['email'];
							$_SESSION['usuarioSenhaProf'] = $resultado['senha'];
							$_SESSION['usuarioIdProf'] = $resultadoprof['idprof'];
							$_SESSION['usuarioIdadeProf'] = $resultadoprof['idade'];
							$_SESSION['usuarioEscolaProf'] = $resultadoprof['escola'];
							$_SESSION['NomeProf'] = $resultadoprof['nome'];
							return	"1";	
						}
				
					}elseif($_SESSION['usuarioNiveisAcessoId'] == "2"){
						$result_aluno = "SELECT * FROM alunos WHERE idUser = '$idUser' ";
						mysqli_query($conn,"SET NAMES 'utf8'");
						mysqli_query($conn,'SET character_set_connection=utf8');
						mysqli_query($conn,'SET character_set_client=utf8');
						mysqli_query($conn, 'SET character_set_results=utf8');
						$resultado_aluno = mysqli_query($conn, $result_aluno);
						$resultadoaluno = mysqli_fetch_assoc($resultado_aluno);
						if(isset($resultadoaluno))
						{
							$_SESSION['usuarioEmailAluno'] = $resultado['email'];
							$_SESSION['usuarioSenhaAluno'] = $resultado['senha'];
							$_SESSION['usuarioIdAluno'] = $resultadoaluno['idaluno'];
							$_SESSION['usuarioTurmaAluno'] = $resultadoaluno['turma'];
							$_SESSION['usuarioIdadeAluno'] = $resultadoaluno['idade'];
							$_SESSION['usuarioEscolaAluno'] = $resultadoaluno['escola'];
							$_SESSION['NomeAluno'] = $resultadoaluno['nome'];
							return	"2";	
						}
				
					
					}
				//Não foi encontrado um usuario na tabela usuário com os mesmos dados digitado no formulário
				//redireciona o usuario para a página de login
				}else{
					//Váriavel global recebendo a mensagem de erro
					
					return'<span class="msg-errado">Usuário ou senha Inválido</span>';
				
					
				}
			//O campo usuário e senha não preenchido entra no else e redireciona o usuário para a página de login
			}else{
				
				return'<span class="msg-errado">Usuário ou senha Inválido</span>';
			}
		}
}
?>