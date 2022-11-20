import {db} from '../database/connection.js';

export const createCitaTalentoCazador = async (req, res) => {
    const { idTalento, idProyecto, fechaHora, lugar } = req.body;
    try {
        // Obtener el id del cazador
        const idCazador = await db.query('SELECT idCazador FROM Cazador c, Proyecto p WHERE c.idCazador = p.cazador AND p.idProyecto = ?', [idProyecto]);
        // Insertar cita
        await db.query('INSERT INTO Citas (idProyecto, cazador, talento, fechaHora, lugar) VALUES (?, ?, ?, ?, ?)', [idProyecto, idCazador[0][0].idCazador, idTalento, fechaHora, lugar]);

        const [rows, fields] = await db.execute('SELECT p.idProyecto, p.nombre, p.descripcion, p.cuotas, h.nombre as habilidad, c.alias, c.giroDeProyecto FROM Proyecto p inner join Cazador c on p.cazador = c.idCazador INNER JOIN Habilidad h on p.habilidad = h.idHabilidad ORDER BY p.idProyecto ASC');
        res.status(200).render('proyecto/mostrarProyectos', {'proyectos': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createCitaCazadorTalento = async (req, res) => {
    const { idCazador, idProyecto, idTalento, fechaHora, lugar } = req.body;
    try {
        await db.query('INSERT INTO Citas (idProyecto, cazador, talento, fechaHora, lugar) VALUES (?, ?, ?, ?, ?)', [idProyecto, idCazador, idTalento, fechaHora, lugar]);

        const [rows, fields] = await db.execute('SELECT * FROM Talento t, Habilidad h WHERE t.habilidad = h.idHabilidad');
        res.status(200).render('talento/mostrarTalento', {'talento': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCitas = async (req, res) => {
    try {
        const [rows, fields] = await db.execute('SELECT c.idCita, c.fechaHora, c.lugar, t.alias as talento, ca.alias as cazador, p.nombre as proyecto FROM Citas c INNER JOIN Talento t ON c.talento = t.idTalento INNER JOIN Proyecto p ON c.idProyecto = p.idProyecto INNER JOIN Cazador ca ON c.cazador = ca.idCazador ORDER BY c.idCita ASC');
        console.log(rows);
        res.status(200).render('cita/mostrarCitas', {'citas': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateCita = async (req, res) => {
    const { idCita, fechaHora, lugar } = req.body;
    try {
        await db.query('UPDATE Citas SET fechaHora = ?, lugar = ? WHERE idCita = ?', [fechaHora, lugar, idCita]);
        
        const [rows, fields] = await db.execute('SELECT c.idCita, c.fechaHora, c.lugar, t.alias as talento, ca.alias as cazador, p.nombre as proyecto FROM Citas c INNER JOIN Talento t ON c.talento = t.idTalento INNER JOIN Proyecto p ON c.idProyecto = p.idProyecto INNER JOIN Cazador ca ON c.cazador = ca.idCazador ORDER BY c.idCita ASC');
        res.status(200).render('cita/mostrarCitas', {'citas': rows});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteCita = async (req, res) => {
    const { idCita } = req.body;
    try {
        await db.query('DELETE FROM Citas WHERE idCita = ?', [idCita]);

        const [rows, fields] = await db.execute('SELECT c.idCita, c.fechaHora, c.lugar, t.alias as talento, ca.alias as cazador, p.nombre as proyecto FROM Citas c INNER JOIN Talento t ON c.talento = t.idTalento INNER JOIN Proyecto p ON c.idProyecto = p.idProyecto INNER JOIN Cazador ca ON c.cazador = ca.idCazador ORDER BY c.idCita ASC');
        res.status(200).render('cita/mostrarCitas', {'citas': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};