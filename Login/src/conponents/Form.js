import React from 'react'

export const Form = () => {

    const [formData, setFormData] = React.useState({
        email: '',
        password: ''
    });

    const validateEmail = (email) => {

        if (typeof(email) !== 'string'){
            throw new Error('El parametro ingresado debe ser tipo string');
        }

        if (email.includes('@unsa.edu.pe')){
            return true;
        }
    }

    const emptyField = (email, password) => {
        if (!email || !password) {
            return true;
        }
    }

    const handleInputChange = (event) => {
        setFormData({
            ...formData,
            [event.target.name] : event.target.value
        })
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            if (!validateEmail(formData.email)){
                alert('El correo ingresado no es perteneciente a la UNSA');
            }
            if (emptyField(formData.email, formData.password)){
                alert('Debe llenar ambas casillas para continuar');
            }
        } catch (error) {
            console.error(error);
        }
    };

  return (
    <div className='mainForm'>
        <h2> Login </h2>
        <form onSubmit={handleSubmit}>
            <div>
                <label htmlFor="name">Email:</label>
                <input
                className='campos'
                type="text"
                name="email"
                placeholder='Email...'
                value = {formData.email}
                onChange = {handleInputChange}
                />
            </div>
            <div>
                <label htmlFor="password">Password:</label>
                <input
                className='campos'
                type="password"
                name="password"
                placeholder='Password'
                value = {formData.password}
                onChange={handleInputChange}
                />
            </div>
            <button type="submit">Submit</button>
        </form>    
    </div>
  )
}
