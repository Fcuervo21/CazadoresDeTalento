import {db} from '../database/connection.js';

export const getContratos = async (req, res) => {
    try {
        const [rows, fields] = await db.execute('SELECT c.idContrato, t.alias as talento, ca.alias as cazador, p.nombre as proyecto, c.cuotaFinal FROM Contrato c INNER JOIN Talento t ON c.talento = t.idTalento INNER JOIN Proyecto p ON c.Proyecto = p.idProyecto INNER JOIN Cazador ca ON c.cazador = ca.idCazador ORDER BY c.proyecto ASC');
        console.log(rows);
        res.status(200).render('contrato/mostrarContratos', {'contratos': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};


export const showCreateContrato = async (req, res) => {
    try {
        const [rows, fields] = await db.execute('SELECT p.idProyecto, p.nombre, c.alias, c.idCazador FROM Proyecto p INNER JOIN Cazador c ON p.cazador = c.idCazador');
        const [talentoRows, talentoFields] = await db.execute('SELECT idTalento, alias FROM Talento');
        res.status(200).render('contrato/crearContrato', {'proyectos': rows, 'talentos': talentoRows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const createContrato = async (req, res) => {
    const { idProyecto, idTalento, cuotaFinal } = req.body;
    try {
        const idCazador = await db.execute('SELECT cazador FROM Proyecto WHERE idProyecto = ?', [idProyecto]);
        
        await db.execute('INSERT INTO Contrato (cazador, talento, proyecto, cuotaFinal) VALUES (?, ?, ?, ?)', [idCazador[0][0].cazador, idTalento, idProyecto, cuotaFinal]);

        const [rows, fields] = await db.execute('SELECT p.idProyecto, p.nombre, c.alias, c.idCazador FROM Proyecto p INNER JOIN Cazador c ON p.cazador = c.idCazador');
        const [talentoRows, talentoFields] = await db.execute('SELECT idTalento, alias FROM Talento');
        res.status(200).render('contrato/crearContrato', {'proyectos': rows, 'talentos': talentoRows});

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const deleteContrato = async (req, res) => {
    const { idContrato } = req.body;
    try {
        await db.execute('DELETE FROM Contrato WHERE idContrato = ?', [idContrato]);
        const [rows, fields] = await db.execute('SELECT c.idContrato, t.alias as talento, ca.alias as cazador, p.nombre as proyecto, c.cuotaFinal FROM Contrato c INNER JOIN Talento t ON c.talento = t.idTalento INNER JOIN Proyecto p ON c.Proyecto = p.idProyecto INNER JOIN Cazador ca ON c.cazador = ca.idCazador ORDER BY c.proyecto ASC');
        res.status(200).render('contrato/mostrarContratos', {'contratos': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const rateCazador = async (req, res) => {
    const { idCazador, cazadorRating} = req.body;
    try {
        //Calificar
        const rate = parseInt(cazadorRating);
        await db.execute('Update Cazador SET reputacion = JSON_ARRAY_APPEND(reputacion, "$", ?) WHERE alias = ?', [rate, idCazador]);


        // Obtener promedio
        const [rep, promeFields] = await db.execute('SELECT reputacion FROM Cazador WHERE alias = ?', [idCazador]);
        const final = rep[0].reputacion;
        let sum = 0;
        
        for (let i = 0; i < final.length; i++) {
            sum += final[i];
        }
        const promedio = sum / final.length;

        // Actualizar promedio
        await db.execute('UPDATE Cazador SET promedioReputacion = ? WHERE alias = ?', [promedio, idCazador]);

        // Resultado
        const [rows, fields] = await db.execute('SELECT c.idContrato, t.alias as talento, ca.alias as cazador, p.nombre as proyecto, c.cuotaFinal FROM Contrato c INNER JOIN Talento t ON c.talento = t.idTalento INNER JOIN Proyecto p ON c.Proyecto = p.idProyecto INNER JOIN Cazador ca ON c.cazador = ca.idCazador ORDER BY c.proyecto ASC');

        res.status(200).render('contrato/mostrarContratos', {'contratos': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const rateTalento = async (req, res) => {
    const { nombreTalento, talentoRating } = req.body;
    try {
        //Calificar
        const rate = parseInt(talentoRating);
        await db.execute('Update Talento SET reputacion = JSON_ARRAY_APPEND(reputacion, "$", ?) WHERE alias = ?', [rate, nombreTalento]);

        // Obtener promedio
        const [rep, promeFields] = await db.execute('SELECT reputacion FROM Talento WHERE alias = ?', [nombreTalento]);
        const final = rep[0].reputacion;
        let sum = 0;
        for (let i = 0; i < final.length; i++) {
            sum += final[i];
        }
        const promedio = sum / final.length;

        // Actualizar promedio
        await db.execute('UPDATE Talento SET promedioReputacion = ? WHERE alias = ?', [promedio, nombreTalento]);


        // Resultado
        const [rows, fields] = await db.execute('SELECT c.idContrato, t.alias as talento, ca.alias as cazador, p.nombre as proyecto, c.cuotaFinal FROM Contrato c INNER JOIN Talento t ON c.talento = t.idTalento INNER JOIN Proyecto p ON c.Proyecto = p.idProyecto INNER JOIN Cazador ca ON c.cazador = ca.idCazador ORDER BY c.proyecto ASC');
        res.status(200).render('contrato/mostrarContratos', {'contratos': rows});
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

