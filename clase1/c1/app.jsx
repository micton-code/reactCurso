import React from 'react'                 // Importamos React para poder usar JSX
import ReactDOM from 'react-dom/client'   // Importamos ReactDOM para renderizar nuestro componente en el DOM
import './app.css'                        // Importamos un archivo CSS para darle estilos a nuestra aplicación    


// Creamos un componente funcional llamado App
function App() {
    const items = ['React', 'JavaScript', 'Vite'];  // Creamos un array de tecnologías para mostrar en la lista
    
    return (
        <section>
            <h1>Lista de Tecnologías</h1>
            <ul>
                {
                    items.map((item, index) => (
                        <li key={index}>{item}</li>
                    ))
                }
            </ul>
        </section>
    )
    // En este componente, usamos el método map para iterar sobre el array de items y renderizar cada uno dentro de un elemento <li>.
}

// Buscamos el div con id "app" que creaste en el HTML
const container = document.getElementById('app');
const root = ReactDOM.createRoot(container);

// Le decimos a React: "Dibuja el componente App dentro de ese div"
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);