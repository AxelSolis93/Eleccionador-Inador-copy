import React, { useState, useEffect } from 'react';
import './estilos.css';
// Función auxiliar para obtener los resultados reales desde algún lugar (ahora simularemos los datos, aun no esta implementado el resto)
async function obtenerResultadosReales() {
  return new Promise((resolve) => {
    // Simulación de los datos (posteriormente sera reemplazado por los resultados reales)
    const resultadosSimulados = {
      candidatos: ['Candidato A', 'Candidato B', 'Candidato C'],
      votos: [120, 150, 90],
    };
    setTimeout(() => {
      resolve(resultadosSimulados);
    }, 1000); // Simulamos una pequeño tiempo de espera
  });
}

const Resultados = () => {
  const [resultados, setResultados] = useState(null);

  useEffect(() => {
    obtenerResultadosReales()
      .then((data) => setResultados(data))
      .catch((error) => setResultados(null));
  }, []);

  const generarGraficoResultados = () => {
    if (!resultados) {
      return null;
    }

    const maxVotos = Math.max(...resultados.votos);

    return (
      <div className="grafico-container">
        {resultados.candidatos.map((candidato, index) => (
          <div key={candidato} className="barra">
            <div className="nombre-candidato">{candidato}</div>
            <svg width="100%" height="30">
              <rect
                width={`${(resultados.votos[index] / maxVotos) * 100}%`}
                height="30"
                fill="#007bff"
                rx="15"
              />
              <text x="5" y="18" fill="white" fontSize="14">
                {resultados.votos[index]}
              </text>
            </svg>
          </div>
        ))}
      </div>
    );
  };

  return (
    <div>
      <h1>Resultados de la elección</h1>
      {resultados ? (
        generarGraficoResultados()
      ) : (
        <p>Obteniendo resultados...</p>
      )}
    </div>
  );
};

export default Resultados;
