import { useState } from 'react'
import { IonApp } from '@ionic/react'
import '@ionic/react/css/core.css'
import Login from './pages/Login'

function App() {
  const [usuario, setUsuario] = useState('')
  const [pantallaActual, setPantallaActual] = useState<'home' | 'backhome'>('home')

  return (
    <IonApp>
      { usuario === '' ? (
      <Login onLogin={setUsuario} /> )
      : (usuario === 'wilmer' || usuario === 'nicolas' || usuario === 'camilo') ? (
          pantallaActual === 'home' ? (
        <Home
          usuario={usuario}
          onLogout={() => setUsuario('')}
          onBackhome={() => setPantallaActual('backhome')}
        /> )
        : (
        <Backhome // cada portafolio
          usuario={usuario}
          onVolver={() => setPantallaActual('home')}
          onLogout={() => setUsuario('')}
        />
      ) )
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
