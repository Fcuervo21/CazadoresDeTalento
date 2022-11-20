import {db} from '../database/connection.js';


export const showCreateProyecto = async (req, res) => {
    try {
        const [rows, fields] = await db.execute('SELECT idCazador, alias FROM Cazador');
        res.status(200).render('proyecto/crearProyecto', {'cazador': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createProyecto = async (req, res) => {
    const { idCazador, nombre, descripcion, cuota, habilidad } = req.body;
    try {
        await db.query('INSERT INTO Proyecto (cazador, nombre, descripcion, cuotas, habilidad) VALUES (?, ?, ?, ?, ?)', [idCazador, nombre, descripcion, cuota, habilidad]);

        const [rows, fields] = await db.execute('SELECT idCazador, alias FROM Cazador');
        res.status(200).render('proyecto/crearProyecto', {'cazador': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
        
};

export const getProyectos = async (req, res) => {
    try {
        
        const [rows, fields] = await db.execute('SELECT p.idProyecto, p.nombre, p.descripcion, p.cuotas, h.nombre as habilidad, c.alias, c.giroDeProyecto, c.promedioReputacion FROM Proyecto p inner join Cazador c on p.cazador = c.idCazador INNER JOIN Habilidad h on p.habilidad = h.idHabilidad ORDER BY p.idProyecto ASC');
        console.log(rows);
        res.status(200).render('proyecto/mostrarProyectos', {'proyectos': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const getProyectosCazador = async (req, res) => {
    try {
        const [rows, fields] = await db.execute('SELECT p.idProyecto, p.nombre, p.descripcion, p.cuotas, h.nombre as habilidad, c.alias, c.giroDeProyecto FROM Proyecto p inner join Cazador c on p.cazador = c.idCazador INNER JOIN Habilidad h on p.habilidad = h.idHabilidad ORDER BY p.idProyecto ASC');
        res.status(200).render('proyecto/mostrarProyectosCazador', {'proyectos': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const updateProyecto = async (req, res) => {
    const { idProyecto, cuota } = req.body;
    try {
        await db.query('UPDATE Proyecto SET cuotas = ? WHERE idProyecto = ?', [cuota, idProyecto]);
        const [rows, fields] = await db.execute('SELECT p.idProyecto, p.nombre, p.descripcion, p.cuotas, h.nombre as habilidad, c.alias, c.giroDeProyecto FROM Proyecto p inner join Cazador c on p.cazador = c.idCazador INNER JOIN Habilidad h on p.habilidad = h.idHabilidad ORDER BY p.idProyecto ASC');
        res.status(200).render('proyecto/mostrarProyectosCazador', {'proyectos': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteProyecto = async (req, res) => {
    const { idProyecto } = req.body;
    try {
        await db.query('DELETE  from Citas WHERE idProyecto = ?', [idProyecto]);
        await db.query('DELETE  from Contrato WHERE proyecto = ?', [idProyecto]);
        await db.query('DELETE FROM Proyecto WHERE idProyecto = ?', [idProyecto]);

        const [rows, fields] = await db.execute('SELECT p.idProyecto, p.nombre, p.descripcion, p.cuotas, h.nombre as habilidad, c.alias, c.giroDeProyecto FROM Proyecto p inner join Cazador c on p.cazador = c.idCazador INNER JOIN Habilidad h on p.habilidad = h.idHabilidad ORDER BY p.idProyecto ASC');
        res.status(200).render('proyecto/mostrarProyectosCazador', {'proyectos': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};