-- Active: 1668497181718@@127.0.0.1@3310@CazDeTal
INSERT INTO Cazador(alias, giroDeProyecto, coordenadas, reputacion) VALUES ("Juan", "Analisis de datos", "2434.3454.543", '[]');
INSERT INTO Cazador(alias, giroDeProyecto, coordenadas, reputacion) VALUES ("Raul", "Inteligencia Artificial", "26744.442.231", '[]');
INSERT INTO Cazador(alias, giroDeProyecto, coordenadas, reputacion) VALUES ("Jorge", "Desarrollo web", "2334.232.1345", '[]');
INSERT INTO Cazador(alias, giroDeProyecto, coordenadas, reputacion) VALUES ("Ernesto", "Bases de datos", "98985.4973873.26783", '[]');
INSERT INTO Cazador(alias, giroDeProyecto, coordenadas, reputacion) VALUES ("Alonso", "Seguridad informatica", "574.437495.387434", '[]');

INSERT INTO Habilidad(nombre, descripcion) VALUES ("HTML", "Lenguaje de marcado para la elaboracion de paginas web");
INSERT INTO Habilidad(nombre, descripcion) VALUES ("CSS", "Lenguaje de hojas de estilo para la elaboracion de paginas web");
INSERT INTO Habilidad(nombre, descripcion) VALUES ("JavaScript", "Lenguaje de programacion interpretado, dialecto del estandar ECMAScript");
INSERT INTO Habilidad(nombre, descripcion) VALUES ("Full-Stack developer", "Desarrollador que puede trabajar en todas las capas de una aplicacion");
INSERT INTO Habilidad(nombre, descripcion) VALUES ("Data Scientist", "Profesional que se encarga de analizar grandes cantidades de datos para extraer informacion relevante");
INSERT INTO Habilidad(nombre, descripcion) VALUES ("React", "Libreria de JavaScript para la creacion de interfaces de usuario");
INSERT INTO Habilidad(nombre, descripcion) VALUES ("MongoDB", "Base de datos no relacional orientada a documentos y de codigo abierto");
INSERT INTO Habilidad(nombre, descripcion) VALUES ("MySQL", "Sistema de gestion de base de datos relacional, que utiliza lenguaje SQL como interfaz");

INSERT INTO Talento(alias, profesion, horario, lugar, costos, habilidad, reputacion) VALUES ("Julio", "Abogado", '09:00:00', "Puebla", 1550, 1, '[]');
INSERT INTO Talento(alias, profesion, horario, lugar, costos, habilidad, reputacion) VALUES ("Eduardo", "Ing de Software", '08:00:00', "Puebla", 2950.55, 3, '[]');
INSERT INTO Talento(alias, profesion, horario, lugar, costos, habilidad, reputacion) VALUES ("Roberto ", "Analista de datos",'10:00:00', "Cholula", 2550, 2, '[]');
INSERT INTO Talento(alias, profesion, horario, lugar, costos, habilidad, reputacion) VALUES ("Antonio", "No estudios",'07:00:00', "Cdmx", 2350, 4, '[]');
INSERT INTO Talento(alias, profesion, horario, lugar, costos, habilidad, reputacion) VALUES ("Gabriel", "Cientifico de datos",'15:00:00', "Guadalajara", 2800, 5, '[]');

INSERT INTO Proyecto(cazador, nombre, descripcion, cuotas, habilidad) VALUES (1, "Recomendacion de Peliculas", "Analizar datos de suscriptores de plataformas para recomendar peliculas", 2900, 5);
INSERT INTO Proyecto(cazador, nombre, descripcion, cuotas, habilidad) VALUES (4, "Base de datos de activos", "Crear una base de datos para el manejo de los activos",1600 , 1);
INSERT INTO Proyecto(cazador, nombre, descripcion, cuotas, habilidad) VALUES (2, "Detector de emociones", "Crear una CNN para que ayude a detectar emociones a travez de expresiones faciales", 2700, 2);
INSERT INTO Proyecto(cazador, nombre, descripcion, cuotas, habilidad) VALUES (5, "Seguridad para banco", "Implementacion de metodos de criptografia para seguridad de las cuentas", 3000, 3);
INSERT INTO Proyecto(cazador, nombre, descripcion, cuotas, habilidad) VALUES (3, "Pagina de ventas", "Desarrollar una pagina web que permita la venta de diferentes articulos", 2200, 4);

INSERT INTO Citas(idProyecto, cazador, talento, fechaHora, lugar) VALUES (1, 4, 1, '2022-12-05 12:30:00', "Puebla");
INSERT INTO Citas(idProyecto, cazador, talento, fechaHora, lugar) VALUES (2, 2, 3, '2022-11-22 09:30:00', "Puebla");
INSERT INTO Citas(idProyecto, cazador, talento, fechaHora, lugar) VALUES (3, 1, 5, '2022-12-12 08:00:00', "Cholula");
INSERT INTO Citas(idProyecto, cazador, talento, fechaHora, lugar) VALUES (4, 5, 2, '2023-01-10 14:45:00', "Cdmx");
INSERT INTO Citas(idProyecto, cazador, talento, fechaHora, lugar) VALUES (5, 3, 4, '2022-12-28 11:30:00', "Guadalajara");

INSERT INTO Contrato(cazador, talento, proyecto, cuotaFinal) VALUES (2, 3, 3, 6000.0);
INSERT INTO Contrato(cazador, talento, proyecto, cuotaFinal) VALUES (4, 1, 2, 5500.0);
INSERT INTO Contrato(cazador, talento, proyecto, cuotaFinal) VALUES (5, 2, 4, 4600.0);
INSERT INTO Contrato(cazador, talento, proyecto, cuotaFinal) VALUES (1, 5, 1, 3400.0);
INSERT INTO Contrato(cazador, talento, proyecto, cuotaFinal) VALUES (3, 4, 5, 6800.0);