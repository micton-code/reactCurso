import { useState, useEffect } from "react";

const CounterWithEffect = () => {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log(`El contador ha cambiado a: ${count}`);
    }, [count]) 
        // El efecto se ejecutará cada vez que el valor de "count" cambie
        // El segundo argumento del useEffect es un array de dependencias, en este caso, solo "count". Esto significa que el efecto se ejecutará cada vez que "count" cambie.

    return (
        <div>
            <p>El contador está en: {count}</p>
            <button onClick={() => setCount(count +1)}>Incrementar</button>
        </div>
    )
}

export default CounterWithEffect;