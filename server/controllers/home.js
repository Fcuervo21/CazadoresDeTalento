import {db} from '../database/connection.js';

export const getHome = async (req, res) => {
    try {
        
        res.status(200).render('home/home');

    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getCazador = (req, res) => {
    try {

        res.status(200).render('home/cazadorHome');
        
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};

export const getTalento = (req, res) => {
    try {
        res.status(200).render('home/talentoHome');
    } catch (error) {
        res.status(500).json({ error: error.message });
    }
};