<<<<<<< HEAD
import { pool } from "../db.js";

export const getPreguntas = async (req,res) =>{
    try{
        const result = await pool.query('SELECT id, pregunta FROM preguntas');
        res.json(result[0]); 

    } catch (error) {
        console.error('Error al obtener los datos:', error);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
}

export const saveDatos = async (req, res) => {
  try {
      const {
          Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10,
          Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20
      } = req.body;

      const query = `
          INSERT INTO respuestas (Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20];

      const [result] = await pool.query(query, values);

      res.status(200).json({ message: 'Data saved successfully', id: result.insertId });
  } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Error saving data' });
  }
};

export const getData = async (req,res) => {
    try{
        const result = await pool.query('SELECT * FROM respuestas');
        res.json(result[0]);

    }catch (error){
        console.error('Error al obtener los datos:', error);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
}
=======
import { pool } from "../db.js";

export const getPreguntas = async (req,res) =>{
    try{
        const result = await pool.query('SELECT id, pregunta FROM preguntas');
        res.json(result[0]); 

    } catch (error) {
        console.error('Error al obtener los datos:', error);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
}

export const saveDatos = async (req, res) => {
  try {
      const {
          Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10,
          Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20
      } = req.body;

      const query = `
          INSERT INTO respuestas (Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20)
          VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)
      `;

      const values = [Q1, Q2, Q3, Q4, Q5, Q6, Q7, Q8, Q9, Q10, Q11, Q12, Q13, Q14, Q15, Q16, Q17, Q18, Q19, Q20];

      const [result] = await pool.query(query, values);

      res.status(200).json({ message: 'Data saved successfully', id: result.insertId });
  } catch (error) {
      console.error('Error saving data:', error);
      res.status(500).json({ error: 'Error saving data' });
  }
};

export const getData = async (req,res) => {
    try{
        const result = await pool.query('SELECT * FROM respuestas');
        res.json(result[0]);

    }catch (error){
        console.error('Error al obtener los datos:', error);
        res.status(500).json({ error: 'Error al obtener los datos' });
    }
}
>>>>>>> 5d8326e49b537f90f42067333fc5144675a17bae
