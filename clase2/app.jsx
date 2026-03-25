import React from 'react'                 // Importamos React para poder usar JSX
import ReactDOM from 'react-dom/client'   // Importamos ReactDOM para renderizar nuestro componente en el DOM
//import './app.css'  
import  Card from './src/componentes/Card';                     


// Creamos un componente funcional llamado App
function App() {
    const items = ['React', 'JavaScript', 'Vite'];  // Creamos un array de tecnologías para mostrar en la lista
    
    return (
        <section>
            <h1>Lista de Tecnologías</h1>
            <Card title="Card 1" description="Descripción de la tarjeta 1"></Card>
            <Card title="Card 2" description="Descripción de la tarjeta 2"></Card>
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