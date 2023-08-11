import React from 'react'
import { Link } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <h1>Sistema de Votacion</h1>
      <div>
        <p><Link to="/LoginVoting">Entrar a Votacion</Link></p>
        <p><Link to="/CreateVote">Crear Votacion</Link></p>
        <p><Link to="/ConvertToCandidate">Convertir a Candidato</Link></p>
        <p><Link to="/CandidateProfile">Perfiles de Candidatos</Link></p>
      </div>
    </div>
  )
}

export default Main