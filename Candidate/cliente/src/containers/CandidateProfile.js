import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

function CandidateProfile() {
    const [candidates, setCandidates] = useState([]);
    const navigate = useNavigate();
    useEffect(() => {
        axios.get('http://localhost:8800/getCandidates') //Obtiene la lista de candidatos
            .then(response => {
                setCandidates(response.data);
            })
            .catch(error => {
                console.error("Error al obtener los candidatos:", error);
            });
    }, []);

    return ( //Imprime tablas de candidatos
        <div>
            <table>
                <thead>
                    <tr>
                        <th>Nombre</th>
                        <th>Descripción</th>
                        <th>Redes Sociales</th>
                        <th>Lista</th>
                    </tr>
                </thead>
                <tbody>
                    {candidates.map(candidate => (
                        <tr key={candidate.name}>
                            <td>{candidate.name}</td>
                            <td>{candidate.description}</td>
                            <td>{candidate.socials}</td>
                            <td>{candidate.numlist}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <button 
                type='button'
                onClick={() => navigate(-1)}
                className='backButton'
            >Volver
            </button>
        </div>
    );
}

export default CandidateProfile;