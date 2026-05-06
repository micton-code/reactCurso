import Contador from './componentes/Contador'
import ToggleButton from './componentes/C4-ToggleButton'
import NameForm from './componentes/C5-NameForm'
import CounterWithEffect from './componentes/C7-CounterWithEffect'
import './App.css'

function App() {
  return (
    <>
      <h1>Aplicación de React</h1>
      <h2>Contador c3</h2>
      <Contador></Contador> {/*(clase3)*/}
      <h2>Botón Toggle c4</h2>
      <ToggleButton /> {/*(clase4)*/}
      <h2>Formulario de Nombre c5</h2>
      <NameForm /> {/*(clase5)*/}
      <h2>Contador con useEffect c7</h2>
      <CounterWithEffect /> {/*(clase7)*/}
    </>
  )
}

export default App
