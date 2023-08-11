import mysql from 'mysql';
import { ConnectionBD } from './ConnectionBD';

export class ConnectionBDVoter extends ConnectionBD {

    constructor() {
        super();
        this.host = 'localhost';
        this.user = 'root';
        this.password = '';
        this.database = 'voting';
        this.conn = mysql.createConnection({
            host: this.host,
            user: this.user,
            password: this.password,
            database: this.database
        })
    }

    connect() {
        this.conn.connect((e) => {
            if (e) { console.error(e); }
            else { console.log('Se connecto a la base de datos ' + this.database) }
        })
    }

    desconnect() {
        this.conn.end( (e) => {
            if (e) { console.error(e); }
            else { console.log('Se desconnecto a la base de datos' + this.database) }
        })
    }
  
    getAllUsers() {
        const instrucSQL = 'SELECT * FROM voter;'

        this.conn.query(instrucSQL, (error, results, fields) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
            }
            return results;
        })
    }
  
    checkUser(email, password) {  

        const users = this.getAllUsers();

        const checkUser = users.find(object => 
            object.voter_email === email 
            && object.voter_password === password);
              
        if (checkUser !== undefined) {
            return true;
        }
    }



    
    isCandidate(email) { 
        const instrucSQL = 'SELECT * FROM candidate WHERE email = ?'; //Busca la informacion del candidato con el email correcto
    
        return new Promise((resolve, reject) => {
            this.conn.query(instrucSQL, [email], (error, results, fields) => {
                if (error) {
                    console.error('Error al ejecutar la consulta:', error);
                    reject(error);
                } else {
                    resolve(results.length === 0); 
                }
            });
        });
    }


    insertCandidate(email, name, description, socials, votes) { //Inserta la informacion del candidato
        const instrucSQL = `
            INSERT INTO candidate (email, name, description, socials, numlist, votes)  
            VALUES (?, ?, ?, ?, ?, ?)`;
        this.conn.query(instrucSQL, [email, name, description, socials, numlist, votes], (error, results, fields) => {
            if (error) {
                console.error('Error al ejecutar la consulta:', error);
            }
        });
    }

    getCandidates() { //Obtiene informacion relevante del candidato y la ordena por numero de lista
        const instrucSQL = 'SELECT name, description, socials, numlist FROM candidate ORDER BY numlist ASC';
        
        return new Promise((resolve, reject) => {
            this.conn.query(instrucSQL, (error, results, fields) => {
                if (error) {
                    console.error('Error al ejecutar la consulta:', error);
                    reject(error);
                } else {
                    resolve(results);
                }
            });
        });

        
    }


}

