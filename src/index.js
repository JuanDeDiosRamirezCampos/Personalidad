import express from 'express';
import cors from 'cors';
import routes from './routes/formulario.routes.js';

const app = express();

app.use(express.json());
app.use(cors());

app.use("/api",routes);

app.listen(3001);
console.log("Server running on port 3001")