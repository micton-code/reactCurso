import { useState } from "react"; // Importamos el hook useState para manejar el estado del contador

const Contador = () => {
    const [count, setCount] = useState(0); // Inicializamos el estado del contador en 0 (count) y la función para actualizarlo (setCount)

    return (
        <div>
            <p>El contador está en: {count}</p>
            <button onClick={() => setCount(count +1)}>Incrementar</button>
            <button onClick={() => setCount(count -1)}>Decrementar</button>
        </div>
    )
}

export default Contador;