create database gamestudy;
use gamestudy;
drop database gamestudy;

create table perfilgamer (
idperfilgamer int primary key auto_increment,
jogo_fav varchar(100),
jogo_plataforma varchar(50),
jogo_estilo varchar(50),
constraint chkjogoplataforma check (jogo_plataforma in ('PC','CONSOLE', 'MOBILE')),
constraint chkjogoestilo check (jogo_estilo in 
('AVENTURA','AÇÃO','RPG','FPS','ESTRATÉGIA','CORRIDA','PLATAFORMA','TERROR'))
);

create table usuario (
idusuario int primary key auto_increment,
nome varchar(50),
email varchar(50),
senha varchar(50),
fkperfilgamer int,
constraint fkperfilgamerusuario foreign key (fkperfilgamer) references perfilgamer (idperfilgamer)
);

create table quiz (
idquiz int primary key auto_increment,
corretas int,
incorretas int,
fkusuario int,
foreign key (fkusuario) references usuario (idusuario)
);


select * from usuario;
select * from perfilgamer;
select * from quiz;

SELECT corretas, incorretas FROM quiz WHERE idquiz = (SELECT max(idquiz) FROM quiz WHERE fkusuario = 'undefined' ) GROUP BY idquiz;

