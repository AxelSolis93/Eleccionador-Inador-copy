import express from 'express';
import mysql from 'mysql'
import cors from 'cors'
const app = express(); 

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'voting'
})

app.use(express.json())
app.use(cors())

app.get('/', (req, res) => {
    res.json('Entrando a backend');
})

app.post('/checkUser', (req, res) => {
    const email = req.body.email
    const password = req.body.password

    const instrucSQL = 'SELECT * FROM voter';

    db.query(instrucSQL, (error, results, fields) => {
        if (error) {
            console.error(error);
        }

        const checkUser = results.find(object => 
            object.voter_email === email 
            && object.voter_password === password);

        if (checkUser) {
            return res.json(true);
        }
        else {
            return res.json(false);
        }
    })
})



app.post('/isCandidate', (req, res) => {
    const email = req.body.email
    
    const instrucSQL = 'SELECT * FROM candidate WHERE email = ?'; //Seleciona data del email correspondiente

    db.query(instrucSQL, [email], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: "Error al consultar la base de datos." });
        }

        if (results.length > 0) { //Si tiene informacion, el candidato existe
            return res.json(true);
        } else { //No hay informacion, el usuario no es candidato
            return res.json(false);
        }
    })
})


app.post('/insertCandidate', (req, res) => { //Inserta los datos de los candidatos
    const { email, name, description, socials, numlist, votes } = req.body;

    const instrucSQL = 'INSERT INTO candidate (email, name, description, socials, numlist, votes) VALUES (?, ?, ?, ?, ?, ?)';

    db.query(instrucSQL, [email, name, description, socials, numlist, votes], (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al insertar el candidato.' });
        }

        if (results.affectedRows > 0) { //Se lograron cambios
            res.json({ message: 'Candidato insertado correctamente' });
        } else {
            res.status(500).json({ message: 'No se pudo insertar el candidato' });
        }
    });
});

app.get('/getCandidates', (req, res) => { //perfil de candidatos
    
    const instrucSQL = 'SELECT name, description, socials, numlist FROM candidate ORDER BY numlist ASC'; //Selecciona informacion relevante en orden.

    db.query(instrucSQL, (error, results) => {
        if (error) {
            console.error(error);
            return res.status(500).json({ message: 'Error al obtener los candidatos.' });
        }

        if (results.length > 0) { //Se encontraron resultados
            res.json(results);
        } else {
            res.status(404).json({ message: 'No se encontraron candidatos' });
        }
    });
});


app.listen(8800, () => {
    console.log('Conectado');
})