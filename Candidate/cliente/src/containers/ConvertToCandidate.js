
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';


import axios from 'axios'

const emailVoter = 'a@unsa.edu.pe';  //Reemplazar por Cookie de email.
const passwordCookie = 'a'; //Reemplazar por Cookie de password.

function ConvertToCandidate() {
  const [IsValid, setIsValid] = useState(false); //Verifica que el usuario haya puesto correctamente su contraseña
  const [password, setPassword] = useState(''); 
  const [isLogged, setIsLogged] = useState(false);//Verifica que sea un usuario valido/logueado
  const [user, setUser] = useState({
    
    email: emailVoter,
    name: '',
    description: '',
    socials: '',
    numlist: '',
    votes: 0 //Inicializa los votos en 0 para cada candidato.
  });

  const navigate = useNavigate();
  useEffect(() => { 
    const checkLogin = async () => {
      try { //Verifica que el usuario se haya logueado de antemano.
        const userdata = {
          email: emailVoter,
          password: passwordCookie
        };
        const response = await axios.post('http://localhost:8800/checkUser', userdata); 
        if (response.data === true) { //Si pasa el verificar, vuelve valido al usuario
          setIsLogged(true); 
        }else{
          setIsLogged(false); 
          
 
        }

      } catch (error) {
          console.error(error);
          navigate(-1); 

      }
    }
    checkLogin();
  },[navigate]);
  useEffect(() => { 
    const checkifCandidate = async () => {
      if(isLogged){
        try { //Verifica si ya es candidato o no. En caso lo sea, lo bota de la pagina
          const response = await axios.post('http://localhost:8800/isCandidate', {email: user.email});
          if (response.data === true) {
              
              navigate(-1);
              alert('El usuario ya es un candidato');
              return;
          }
        } catch (error) {
            console.error(error);
        }
      }
      
    }
    checkifCandidate();
  }, [isLogged, navigate,user.email]);
      

  const handleConvert = async ()=> {//Verifica la contraseña colocada
    
    try {
      const userdata = {
        email: emailVoter,
        password: password
      };
      const response = await axios.post('http://localhost:8800/checkUser', userdata); //Usa login con la contraseña proporcionada

      if (response.data === true) {
          
          setIsValid(true); //Usuario valido
      }
      else {
          alert('Contraseña Incorrecta, intente otra vez');
      }

    } catch (error) {
        console.error(error);
    }
  }
 
  const handleAccept = async (event)=> {//Activado al aceptar. Inserta el candidato
    event.preventDefault();
    if (user.name !== '') {
      try {
        const response = await axios.post('http://localhost:8800/insertCandidate', user);//Inserta al usuario como candidato en la base de datos.

        if (response.data === 'Candidato insertado correctamente') { 
            setIsValid(false);//Ya no necesita estos atributos
            setIsLogged(false);
            navigate(-1); //Sale de la pagina. No funciona de momento
            window.location.reload();
            return;
        }

      } catch (error) {
          console.error(error);
      }
     
  
    } else {
      alert('Por favor, introduce un nombre');
      
    }     
  }

  return (
    <div className="ConvertToCandidate">
      {isLogged ? ( //Si no esta logueado, carga otra pagina
        <>
          {!IsValid ? (//El usuario aun no es valido
          <div>
            <input
              type="password"
              placeholder="Contraseña"
              value={password}
              onChange={e => setPassword(e.target.value)} 
            />
            <button onClick={handleConvert}>Convertir a candidato</button> {/*Ejecuta codigo para verificar la contraseña */}
          </div>
          ) : ( //Ya fue verificado
            <form onSubmit={handleAccept}> {/* Verificar que los datos sean correcto y agregar al usuario a la base de datos */}
              <input 
                type="text" 
                placeholder="Nombre completo"
                value={user.name}
                onChange={e => setUser({ ...user, name: e.target.value })}
              />
               <input
                type="text"
                placeholder="Número de lista"
                value={user.numlist}
                onChange={e => setUser({ ...user, numlist: e.target.value })}
              />
              <textarea
                placeholder="Descripción"
                value={user.description}
                onChange={e => setUser({ ...user, description: e.target.value })}
              />

              <input
                type="text"
                placeholder="Enlaces a cuentas de redes sociales"
                value={user.socials}
                onChange={e => setUser({ ...user, socials: e.target.value })}
              />
              <button type="submit">Aceptar</button>
            </form>
          )}      
        </>
      ): ( //No esta logueado
        <>
          <p>No tienes acceso a esta página. Por favor, inicia sesión.</p> {/*Manda a la pagina anterior */}
            <button onClick={() => navigate(-1)}>
              Volver
          </button>
        </>
        
      )}
      </div>
  );
}

export default ConvertToCandidate;