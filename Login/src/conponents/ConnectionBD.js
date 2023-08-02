export default class ConnectionBD {

    #host;
    #user;
    #dataBase;
    #password;
    #con;
  
    constructor(host, user, dataBase, password) {
  
        let mysql = require('mysql')
  
        this.#host = host;
        this.#user = user;
        this.#dataBase = dataBase;
        this.#password = password;
        this.#con = mysql.createConnection({
            host: host,
            user: user,
            password: password,
            dataBase: dataBase
        });
    }
  
    getConnection() {
        return this.#con;
    }
  
    connect() {
      this.#con.connect( (e) => {
        if (e) {
          console.error(e);
        }
        else {
          console.log('Conectado');
        }
      } )
    }
  
    desconnect() {
      this.#con.end( (e) => {
        if (e) {
          console.error(e);
        }
        else {
          console.log('Desconectado');
        }
      } )
    }
  }