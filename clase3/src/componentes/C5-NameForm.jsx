import { useState } from 'react';

const NameForm = () => {
    const [name, setName] = useState(''); // Inicializamos el estado del nombre como una cadena vacía y la función para actualizarlo (setName)


    return(
        <div>
            <input 
                type="text" 
                placeholder='Ingresa tu nombre'
                value={name}
                onChange={(event) => setName(event.target.value)} // El evento onChange se dispara cada vez que el usuario escribe en el campo de texto. La función setName(event.target.value) actualiza el estado del nombre con el valor actual del campo de texto.
            />
            <p>Hola, {name || 'Visitante' }</p>
        </div>
    )
}

export default NameForm;