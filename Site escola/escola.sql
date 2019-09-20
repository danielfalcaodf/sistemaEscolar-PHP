create database escola DEFAULT CHARACTER SET utf8  ;

use escola;

CREATE TABLE `questoes` (
  `idquestao` int(4) NOT NULL AUTO_INCREMENT,
  `numeroQuestao` int(4) NOT NULL,
  `materia` varchar(30) NOT NULL,
  `tema` varchar (30) not null,
  `pergunta` varchar(1000) NOT NULL,
  `alternativa` varchar(500) NOT NULL,
  PRIMARY KEY (`idquestao`)
) ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

create table gabarito (
idgabarito int(4) not null auto_increment primary key,
resposta  char(2) not null,
idquestao int(4)  not null,
foreign key (idquestao) references questoes (idquestao) on delete cascade
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

create table usuarios(
idUser int (4) not null auto_increment primary key,
email varchar(520) NOT NULL,
 senha varchar(50) NOT NULL,
  niveisacessoID int(11) NOT NULL ,
  created timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  modified timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

create table alunos(
idaluno int (4) not null auto_increment primary key,
nome varchar (50) not null,
turma varchar (30) not null,
escola varchar (520) not null,
idade int (3) not null,
idUser int(4) NOT NULL,
foreign key (idUser) references usuarios (idUser) on delete cascade
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

create table professor 
(
idprof int (4) not null auto_increment primary key,
nome varchar (50) not null,
escola varchar (520) not null,
materia varchar (50) not null,
idade int (3) not null,
idUser int(11) NOT NULL,
foreign key (idUser) references usuarios (idUser) on delete cascade
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

create table mandarquestoes(
idmq int(4) not null auto_increment primary key,
idaluno int (4) not null,
idquestao int (4) not null,
tema varchar (30) not null,
materia varchar(30) NOT NULL,
foreign key (idquestao) references questoes (idquestao) on delete cascade,
foreign key (idaluno) references alunos (idaluno) on delete cascade

);

create table respostadoaluno(
idResAluno int(4) not null auto_increment primary key,
idaluno int (4) not null,
idsquestoescerta varchar(1000) not null,
idsquestoeserrado varchar(1000) not null,
ALtErrado varchar (1000) not null,
quantCerto int(4) not null,
quantErros int(4) not null,
tema varchar (30) not null,
materia varchar(30) NOT NULL,
quantQuest int (4) not null, 
foreign key (idaluno) references alunos (idaluno) on delete cascade
)ENGINE=InnoDB AUTO_INCREMENT=1 DEFAULT CHARSET=utf8;

select * from respostadoaluno;

insert into questoes (numeroQuestao, materia,tema,pergunta,alternativa) values (89,'Português','123Pe','Quantos anos tem João?', 'A) 15 anos, B) 20  anos, C) 12 anos, D) 10 anos, E) 53 anos');
insert into gabarito (resposta,idquestao) values ('E)',14);

insert into usuarios (email,senha,niveisacessoID) values ('teste1@teste.com','25d55ad283aa400af464c76d713c07ad',1); -- > login do professor -  senha:12345678 




insert into alunos (nome,turma,escola,idade) values ('alunoTeste1', 'escolaX', '1ºA',6);
insert into alunos (nome,turma,escola,idade) values ('alunoTeste2', 'escolaX','1ºA',6);
insert into alunos (nome,turma,escola,idade) values ('alunoTeste3','escolaX','1ºA',6);
insert into alunos (nome,turma,escola,idade) values ('alunoTeste4', 'escolaX','1ºA',6);
insert into alunos (nome,turma,escola,idade) values ('alunoTeste5', 'escolaX','1ºA',6);

insert into professor (nome, escola,idade,iduser,materia) value ('Daniel Mat','Echico',19,6,'Português/Matemática');
insert into mandarquestoes (idaluno, idquestao, tema, materia) values (1,7,'123Pe', 'Português');
select * from alunos;
select * from usuarios;
select * from professor;
select * from questoes;
select * from gabarito;
select * from 	respostadoaluno;
delete from questoes where materia = 'ASP.Net';
delete from	respostadoaluno where idaluno = 3;
SELECT * FROM questoes WHERE materia ='Português'  ;
SELECT idquestao FROM questoes WHERE pergunta = 'Joao quantos anos tem?' LIMIT 1;
drop database escola;
drop table alunos;
drop table professor;
drop table usuarios;
drop table questoes;
drop table respostadoaluno;
SELECT distinct idaluno,materia FROM respostadoaluno;
update  respostadoaluno set idsquestoescerta = '', idsquestoeserrado = '',ALtErrado = '',quantCerto = '', quantErros = '', quantQuest = '' where  idResAluno = $idRes;
delete  from mandarquestoes where idmq = 1;
select * from mandarquestoes where idaluno=1   ;
insert into mandarquestoes (idaluno,idquestao,tema,materia) values (1,2,'Anos A','Matemática');

ALTER TABLE professor ADD materia varchar(50) not null;

 insert into questoes (numeroQuestao, materia,tema,pergunta,alternativa) values (58,'Português','qual?','Leia: "Causo'" de amor Boldrin, paulista de São Joaquim da Barra, criado em Guaíra, perto de Barretos, tem, digamos, um causo de amor com o Brasil. (Texto adaptado. Fonte: Jornal do Brasil. Caderno B, 27/07/2005) Observe a palavra causo, empregada no texto. Ela faz parte de uma variante regional da língua portuguesa, encontrada especialmente no sertão brasileiro. No texto, retirado de um jornal, ela aparece entre aspas ("causo") e em itálico (causo). Esse destaque na redação do termo sugere que o autor quer:','afirmar que ele pertence ao grupo de falantes de uma variante, regional. ´`ensinar a forma correta de escrever essa palavra na variante padrão culta. ´` abolir o uso dessa expressão nos textos publicados pela imprensa escrita.´` marcar o uso intencional dessa palavra dentro do texto em norma culta.´` informar que esta palavra é um neologismo.')