import {db} from '../database/connection.js';

export const showAllTalents = async (req, res) => {
    try {
        const [rows, fields] = await db.execute('SELECT * FROM Talento t, Habilidad h WHERE t.habilidad = h.idHabilidad');
        console.log(rows);

        res.status(200).render('talento/mostrarTalento', {'talento': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};