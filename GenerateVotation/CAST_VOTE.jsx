import  { useState } from 'react';
import './styles.css'; // Importa el archivo CSS externo
const Votacion = () => {
  const [votos, setVotos] = useState({
    candidato_1: 0,
    candidato_2: 0,
    candidato_3: 0
  });

  // Estado para controlar si el usuario ya votó o no
  const [haVotado, setHaVotado] = useState(false);

  const handleVotar = (color) => {
    if (!haVotado) {
      setVotos(prevVotos => ({
        ...prevVotos,
        [color]: prevVotos[color] + 1
      }));
      setHaVotado(true); // Marcar que el usuario ya votó
    } else {
      alert("Ya has votado. No puedes votar de nuevo.");
    }
  };

  return (
    <div>
      <h1>Elección del Candidato</h1>
      <div>
        <button onClick={() => handleVotar('candidato_1')}>Votar por Andres de la Cruz</button>
        <button onClick={() => handleVotar('candidato_2')}>Votar por Maria Solorzano</button>
        <button onClick={() => handleVotar('candidato_3')}>Votar por Pedro Ramirez</button>
      </div>
      <div>
        <h2>Resultados:</h2>
        <p>Candidato 1: {votos.candidato_1}</p>
        <p>Candidato 2: {votos.candidato_2}</p>
        <p>Candidato 3: {votos.candidato_3}</p>
      </div>
    </div>
  );
};

export default Votacion;

