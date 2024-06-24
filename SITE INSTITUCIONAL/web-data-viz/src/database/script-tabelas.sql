-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database gamestudy;
use gamestudy;

create table usuario (
idusuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50),
constraint fkperfilgamerusuario foreign key (fkperfilgamer) references perfilgamer (idperfilgamer)
);

create table quiz (
idquiz int primary key auto_increment,
corretas int,
incorretas int,
fkusuario int,
foreign key (fkusuario) references usuario (idusuario)
);

create table perfil (
idperfil int primary key auto_increment,
jogo_fav varchar(100),
jogo_estilo varchar(40),
jogo_plat varchar(40),
fkusuario int,
foreign key (fkusuario) references usuario(idusuario)
);

select * from usuario;
select * from perfilgamer;
select * from quiz;
