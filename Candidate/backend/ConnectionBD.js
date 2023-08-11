
export class ConnectionBD {
    host;
    user;
    password;
    database;
    conn;

    constructor() {
        if (new.target == ConnectionBD) {
            throw Error('No se puede inicialiar un clase abstracta');
        }
    }

    connect() {
        throw Error('No se puede usar un metodo de una clase abstracta');
    }

    desconnect() {
        throw Error('No se puede usar un metodo de una clase abstracta');
    }
}