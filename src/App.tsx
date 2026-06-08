import { useState } from 'react'
import { IonApp } from '@ionic/react'
import '@ionic/react/css/core.css'
import Login from './pages/Login'
import Home from './pages/Home'

function App() {
  const [usuario, setUsuario] = useState('')
  

  return (
    <IonApp>
      { usuario === '' ? (
      <Login onLogin={setUsuario} /> )
      : (usuario === 'wilmer' || usuario === 'nicolas' || usuario === 'camilo') ? (
        <Home
          usuario={usuario}
          onLogout={() => setUsuario('')}
        /> )
        : (
          <div className="pantalla-error">
            <h2>Error de Acceso</h2>
            <p>El usuario "{usuario}" no está autorizado.</p>
            <button onClick={() => setUsuario('')}>Volver</button>
          </div>
    )}
    </IonApp>
  )
}




export default App
