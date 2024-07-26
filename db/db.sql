CREATE DATABASE IF NOT EXISTS db_mbti;
USE db_mbti;

CREATE TABLE preguntas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    pregunta TEXT NOT NULL,
    dim ENUM('E/I', 'S/N', 'T/F', 'J/P') NOT NULL
);

CREATE TABLE respuestas (
    id INT AUTO_INCREMENT PRIMARY KEY,
    Q1 int NOT NULL,
    Q2 int NOT NULL,
    Q3 int NOT NULL,
    Q4 int NOT NULL,
    Q5 int NOT NULL,
    Q6 int NOT NULL,
    Q7 int NOT NULL,
    Q8 int NOT NULL,
    Q9 int NOT NULL,
    Q10 int NOT NULL,
    Q11 int NOT NULL,
    Q12 int NOT NULL,
    Q13 int NOT NULL,
    Q14 int NOT NULL,
    Q15 int NOT NULL,
    Q16 int NOT NULL,
    Q17 int NOT NULL,
    Q18 int NOT NULL,
    Q19 int NOT NULL,
    Q20 int NOT NULL
);

INSERT INTO preguntas (pregunta, dim) VALUES
-- E/I Questions
('¿Haces nuevos amigos con frecuencia?', 'E/I'),
('¿Te sientes cómodo acercándote a alguien que te parece interesante y entablando una conversación?', 'E/I'),
('¿Te gustan más las aficiones o actividades solitarias que las que son en grupo?', 'E/I'),
('¿Tus amigos te describirían como una persona alegre y extrovertida?', 'E/I'),
('¿Evitas llamar por teléfono?', 'E/I'),
-- S/N Questions
('¿Las ideas complejas y novedosas te entusiasman más que las simples y llanas?', 'S/N'),
('¿Te gusta experimentar con enfoques nuevos y no contrastados?', 'S/N'),
('¿Te aburres o pierdes el interés cuando la discusión se vuelve muy teórica?', 'S/N'),
('¿Te atraen diversas formas de expresión creativa, como la escritura?', 'S/N'),
('¿Te gusta explorar ideas y puntos de vista desconocidos?', 'S/N'),
-- T/F Questions
('¿Sueles sentirte más persuadido por lo que resuena emocionalmente en ti que por los argumentos basados en hechos?', 'T/F'),
('¿Las historias y emociones de las personas te hablan más que los números o los datos?', 'T/F'),
('¿Priorizas ser sensible a ser completamente honesto?', 'T/F'),
('¿Favoreces la eficacia en las decisiones, aunque signifique prescindir de algunos aspectos emocionales?', 'T/F'),
('¿Cuándo tomas decisiones, te centras más en cómo podrían sentirse las personas afectadas que en lo que es más lógico o eficaz?', 'T/F'),
-- J/P Questions
('¿Tus espacios vitales y de trabajo están limpios y organizados?', 'J/P'),
('¿Priorizas y planificas las tareas con eficacia, y sueles terminarlas mucho antes de la fecha límite?', 'J/P'),
('¿Te cuesta mantener un horario de trabajo o estudio constante?', 'J/P'),
('¿Te gusta tener una lista de tareas para cada día?', 'J/P'),
('¿Tu estilo personal de trabajo se acerca más a las explosiones espontáneas de energía que a los esfuerzos organizados y constantes?', 'J/P');