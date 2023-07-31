import './App.css';
import React, { useState } from 'react';

function ConvertirACandidato() {
  const [esValido, setesValido] = useState(false);//Verifica que sea un usuario valido
  const [Contraseña, setContraseña] = useState('');
  const [esCandidato, setesCandidato] = useState(false);
  const [usuario, setUsuario] = useState({
    nombre: '',
    descripcion: '',
    foto: null,
    redes: ''
  });


  //Cuando se tenga la base de datos, verificar si ya se es candidato
  //Y poner "esCandidato" como true.


  //Verificar Login.


  const handleConvert = () => {//Placeholder, verifica la contraseña.
    if (Contraseña === 'e') {
      
      if(!esCandidato){
        setesValido(true);
      } else{
        alert('Error, usted ya es candidato')
      }
    } else {
      alert('Contraseña incorrecta');
    }
  }

  const handleAccept = (e) => {//Verificar que exista el nombre.
    
    if (usuario.nombre !== '') {
      //Cambiar a candidato en la base de datos, volver al inicio.
      setesValido(false);
      setesCandidato(true); 
    } else {
      alert('Por favor, introduce un nombre');
      e.preventDefault();
    }
  }

  const handleFileChange = (e) => {//Foto
    setUsuario({ ...usuario, foto: e.target.files[0] });
  }

  return (
    <div className="ConvertirACandidato">
      {!esValido ? (//El usuario aun no es valido
        <div>
          <input
            type="Contraseña"
            placeholder="Contraseña"
            value={Contraseña}
            onChange={e => setContraseña(e.target.value)}
          />
          <button onClick={handleConvert}>Convertir a candidato</button>
        </div>
      ) : ( //Ya fue verificado
        <form onSubmit={handleAccept}> {/* Verificar que todo sea correcto y asignar el rol de candidato */}
          <input 
            type="text" 
            placeholder="Nombre completo"
            value={usuario.nombre}
            onChange={e => setUsuario({ ...usuario, nombre: e.target.value })}
          />
          <textarea
            placeholder="Descripción"
            value={usuario.descripcion}
            onChange={e => setUsuario({ ...usuario, descripcion: e.target.value })}
          />
          <input
            type="file"
            placeholder="Foto"
            onChange={handleFileChange}
          />
          <input
            type="text"
            placeholder="Enlaces a cuentas de redes sociales"
            value={usuario.redes}
            onChange={e => setUsuario({ ...usuario, redes: e.target.value })}
          />
          <button type="submit">Aceptar</button>
        </form>
      )}
    </div>
  );
}

export default ConvertirACandidato;