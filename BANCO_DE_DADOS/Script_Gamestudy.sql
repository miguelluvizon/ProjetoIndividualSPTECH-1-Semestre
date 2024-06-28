create database gamestudy;
use gamestudy;

drop database gamestudy;

create table usuario (
idusuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50)
);

create table quiz (
idquiz int primary key auto_increment,
corretas int,
incorretas int,
fkusuario int,
foreign key (fkusuario) references usuario (idusuario)
);

select * from usuario;
select * from quiz;

select * from usuario join quiz on fkusuario = idusuario;
select nome, corretas, incorretas from usuario join quiz where fkusuario = idusuario; 

SELECT corretas, incorretas FROM quiz WHERE idquiz = (SELECT max(idquiz) FROM quiz WHERE fkusuario = 1);
-- Select utilizado em algumas funções do models para puxar sempre o id mais alto de um quiz feito por um determinado usuario


