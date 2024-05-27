-- Arquivo de apoio, caso você queira criar tabelas como as aqui criadas para a API funcionar.
-- Você precisa executar os comandos no banco de dados para criar as tabelas,
-- ter este arquivo aqui não significa que a tabela em seu BD estará como abaixo!

/*
comandos para mysql server
*/

create database gamestudy;
use gamestudy;

create table perfilgamer (
idperfilgamer int primary key auto_increment,
jogo_fav varchar(100),
jogo_plataforma varchar(50),
jogo_estilo varchar(50),
constraint chkjogoplataforma check (jogo_plataforma in ('PC','CONSOLE', 'MOBILE')),
constraint chkjogoestilo check (jogo_estilo in 
('AVENTURA','AÇÃO','RPG','FPS','ESTRATÉGIA','CORRIDA','ESPORTE','PLATAFORMA','INDIE','TERROR'))
);

create table usuario (
idusuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50),
fkperfilgamer int,
constraint fkperfilgamerusuario foreign key (fkperfilgamer) references perfilgamer (idperfilgamer)
);

create table postagem (
idpostagem int primary key auto_increment,
titulo varchar(45),
descricao varchar(255),
dthora datetime,
fkusuario int,
constraint fkusuariopostagem foreign key (fkusuario) references usuario (idusuario)
);

-- insert into empresa (razao_social, cnpj) values ('Empresa 1', '00000000000000');
-- insert into aquario (descricao, fk_empresa) values ('Aquário de Estrela-do-mar', 1);