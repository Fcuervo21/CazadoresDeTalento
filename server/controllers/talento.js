import {db} from '../database/connection.js';

export const showTalento = (req, res) => {
    try {
        res.status(200).render('talento/crearTalento');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createTalento = async (req, res) => {
    const { alias, actividad_profesional, horario, lugar, costo, habilidad} = req.body;
    try {
        await db.query('INSERT INTO Talento (alias, profesion, horario, lugar, costos, habilidad) VALUES (?, ?, ?, ?, ?, ?)', [alias, actividad_profesional, horario, lugar, costo, habilidad]);
        console.log(alias, actividad_profesional, horario, lugar, costo, habilidad);
        res.status(200).render('talento/crearTalento');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const getTalento = async (req, res) => {
    try {
        const [rows, fields] = await db.execute('SELECT * FROM Talento');
        //console.log(rows);
        res.status(200).render('home/home', {'talento': talento});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteTalento = async (req, res) => {
    try {
        const { id } = req.params;
        await db.execute('DELETE FROM Talento WHERE id = ?', [id]);
        res.status(200).redirect('/talento');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const updateTalento = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        await db.execute('UPDATE Talento SET nombre = ?, descripcion = ? WHERE id = ?', [nombre, descripcion, id]);
        res.status(200).redirect('/talento');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}