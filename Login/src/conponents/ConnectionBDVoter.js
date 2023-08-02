import ConnectionBD from "./ConnectionBD";

export default class ConnectionBDVoter extends ConnectionBD{
  constructor() {
      super('localhost', 'root', 'votantes', 'root12345');
  }

  getAllUsers() {

      this.connect();

      this.con.query(`SELECT vot_email FROM votantes`, (error, results, fields) => {
          if (error) {
            console.error('Error al ejecutar la consulta:', error);
            return;
          }

          const dataUsers = results.map(row => row['vot_email']);

          console.log('Usuarios: ', dataUsers);
      })

      this.desconnect();
  }
}