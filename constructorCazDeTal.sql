-- Active: 1668497181718@@127.0.0.1@3310@CazDeTal
drop database if exists CazDeTal;
CREATE DATABASE CazDeTal;
USE CazDeTal;

CREATE TABLE Cazador(
    idCazador INT AUTO_INCREMENT,
    alias VARCHAR(70),
    giroDeProyecto VARCHAR(25),
    coordenadas VARCHAR(25),
    reputacion JSON,
    promedioReputacion FLOAT DEFAULT 0,

    Primary Key(idCazador)
);

CREATE TABLE Habilidad(
    idHabilidad INT AUTO_INCREMENT,
    nombre VARCHAR(70),
    descripcion VARCHAR(200),

    Primary Key(idHabilidad)
);

CREATE TABLE Talento(
    idTalento INT AUTO_INCREMENT,
    alias VARCHAR(70),
    profesion VARCHAR(40),
    horario VARCHAR(25),
    lugar VARCHAR(25),
    costos FLOAT,
    habilidad INT,
    reputacion JSON ,
    promedioReputacion FLOAT DEFAULT 0,
    
    Foreign Key(habilidad) References Habilidad(idHabilidad),
    Primary Key(idTalento)
);

CREATE TABLE Proyecto(
    idProyecto INT AUTO_INCREMENT,
    cazador INT,
    nombre VARCHAR(70),
    descripcion VARCHAR(100),
    cuotas FLOAT,
    habilidad INT,

    Foreign Key(cazador) References Cazador(idCazador),
    Foreign Key(habilidad) References Habilidad(idHabilidad),
    Primary Key(idProyecto)
);

CREATE TABLE Citas(
    idCita INT AUTO_INCREMENT,
    idProyecto INT,
    cazador INT,
    talento INT,
    fechaHora DATETIME,
    lugar VARCHAR(20),
    
    Foreign Key(cazador) References Cazador(idCazador),
    Foreign Key (idProyecto) REFERENCES Proyecto(idProyecto),
    Foreign Key(talento) References Talento(idTalento),
    Primary Key(idCita)
);


CREATE TABLE Contrato(
    idContrato INT AUTO_INCREMENT,
    cazador INT,
    talento INT,
    proyecto INT,
    cuotaFinal FLOAT,
    
    Foreign Key(cazador) References Cazador(idCazador),
    Foreign Key(talento) References Talento(idTalento),
    Foreign Key(proyecto) References Proyecto(idProyecto),
    Primary Key(idContrato)
);




