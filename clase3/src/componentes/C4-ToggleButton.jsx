import { useState } from "react"; // Importamos el hook useState para manejar el estado del botón de encendido/apagado 


//ToggleButton es un componente que representa un botón de encendido/apagado. Utiliza el hook useState para manejar su estado interno (encendido o apagado) y cambia su apariencia y texto según su estado actual.
const ToggleButton = () => {
    const [isActive, setIsActive] = useState(false); // Inicializamos el estado del botón en "apagado" (false) y la función para actualizarlo (setIsActive)

    return (
        <button onClick={() => setIsActive(!isActive)}>
            {isActive ? "Encendido" : "Apagado"}
        </button>// En este caso onClick es un evento que se dispara cuando el usuario hace clic en el botón. La función setIsActive(!isActive) cambia el estado del botón al valor opuesto (si estaba apagado, se enciende; si estaba encendido, se apaga).
    )
}

export default ToggleButton;