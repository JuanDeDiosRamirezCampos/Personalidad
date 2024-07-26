import { pool } from "../db.js";

export const getAllData = async (req,res) => {
    try{
        const result = await pool.query('SELECT * FROM respuestas');
    }catch (error){
        console.error('Error al obtener los datos:', error);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
}