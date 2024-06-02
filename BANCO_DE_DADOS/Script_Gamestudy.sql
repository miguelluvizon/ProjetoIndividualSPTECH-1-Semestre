create database gamestudy;
use gamestudy;

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


