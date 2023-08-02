
class Result {
    constructor() {
        this.Candidate_id = null;
        this.Party_Symbol = null;
        this.votesCount = 0;
        this.resultsGenerated = false; // Bandera para verificar si los resultados han sido generados
    }

    getVotesCount() {
        return this.votesCount;
    }

    increaseVotes() {
        this.votesCount++;
    }

    processVotes(votes) {
        // Método para procesar los votos recibidos durante la elección y calcular los resultados.
        if (this.resultsGenerated) {
            console.log("Los resultados ya han sido generados. No se pueden procesar más votos.");
            return;
        }

        // Verificar que los votos sean válidos y coherentes.
        if (this.validateVotes(votes)) {
            votes.forEach(vote => this.increaseVotes());
            this.resultsGenerated = true;
            console.log("Los votos han sido procesados y los resultados han sido generados.");
        } else {
            console.log("Los votos no han sido verificados o hay alguna inconsistencia. No se generan los resultados.");
        }
    }

    validateVotes(votes) {
        // Verificar si el array de votos está vacío
        if (votes.length === 0) {
            console.log("No se han recibido votos.");
            return false;
        }

        // Verificar que todos los votos sean números enteros
        if (!votes.every(vote => Number.isInteger(vote))) {
            console.log("Todos los votos deben ser números enteros.");
            return false;
        }

        // Verificar que los votos estén dentro del rango válido (1 a 5 en este caso)
        if (!votes.every(vote => vote >= 1 && vote <= 5)) {
            console.log("Los votos deben estar entre 1 y 5 (inclusive).");
            return false;
        }

        // Aquí puedes agregar más lógica de validación si es necesario, por ejemplo, asegurarse de que cada votante solo pueda votar una vez, etc.

        // Si todas las validaciones pasan, consideramos los votos como válidos
        return true;
    }

    displayResults() {
        // Método para mostrar los resultados generados.
        if (this.resultsGenerated) {
            console.log(`Candidate ID: ${this.Candidate_id}`);
            console.log(`Party Symbol: ${this.Party_Symbol}`);
            console.log(`Votes Count: ${this.votesCount}`);
        } else {
            console.log("Los resultados aún no están disponibles.");
        }
    }
}
