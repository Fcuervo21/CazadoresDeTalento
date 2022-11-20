import {db} from '../database/connection.js';


export const showCazador = (req, res) => {
    try {
        res.status(200).render('cazador/crearCazador');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createCazador = async (req, res) => {
    const {alias, giro_de_proyectos, coordenadas} = req.body;
    try {
        await db.query('INSERT INTO Cazador (alias, giroDeProyecto, coordenadas) VALUES (?, ?, ?)', [alias, giro_de_proyectos, coordenadas]);
        res.status(200).render('cazador/crearCazador');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCazador = async (req, res) => {
    try {
        const [rows, fields] = await db.execute('SELECT * FROM Cazador');
        //console.log(rows);
        res.status(200).render('home/cazadorHome', {'cazador': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteCazador = async (req, res) => {
    try {
        const { id } = req.params;
        await db.execute('DELETE FROM Cazador WHERE id = ?', [id]);
        res.status(200).redirect('/talento');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
}

export const updateCazador = async (req, res) => {
    try {
        const { id } = req.params;
        const { nombre, descripcion } = req.body;
        await db.execute('UPDATE Cazador SET nombre = ?, descripcion = ? WHERE id = ?', [nombre, descripcion, id]);
        res.status(200).redirect('/talento');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};
