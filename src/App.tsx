import { useState } from 'react'
import { IonApp } from '@ionic/react'
import '@ionic/react/css/core.css'

import Login from './pages/Login'
import Home from './pages/Home'
import Wilmer from './pages/wilmer'
import Camilo from './pages/camilo'
import Nicolas from './pages/Nicolas'

function App() {
  const [usuario, setUsuario] = useState('')

  const [pantallaActual, setPantallaActual] = useState<
    'home' | 'wilmer' | 'camilo' | 'nicolas'
  >('home')

  return (
    <IonApp>

      {usuario === '' ? (

        <Login onLogin={setUsuario} />

      ) : usuario === 'wilmer' ||
          usuario === 'camilo' ||
          usuario === 'nicolas' ? (

        <>
          {pantallaActual === 'home' && (
            <Home
              onLogout={() => setUsuario('')}
              onWilmer={() => setPantallaActual('wilmer')}
              onCamilo={() => setPantallaActual('camilo')}
              onNicolas={() => setPantallaActual('nicolas')}
            />
          )}

          {pantallaActual === 'wilmer' && (
            <Wilmer
              usuario={usuario}
              onLogout={() => setUsuario('')}
              onVolver={() => setPantallaActual('home')}
              onToContacto={() =>
                alert('Aquí puedes agregar la página de contacto')
              }
            />
          )}

          {pantallaActual === 'camilo' && (
            <Camilo
              usuario={usuario}
              onLogout={() => setUsuario('')}
              onVolver={() => setPantallaActual('home')}
            />
          )}

          {pantallaActual === 'nicolas' && (
            <Nicolas
              usuario={usuario}
              onLogout={() => setUsuario('')}
              onVolver={() => setPantallaActual('home')}
            />
          )}
        </>

      ) : (

        <div className="pantalla-error">
          <h2>Error de Acceso</h2>
          <p>El usuario "{usuario}" no está autorizado.</p>
          <button onClick={() => setUsuario('')}>
            Volver
          </button>
        </div>

      )}

    </IonApp>
  )
}

export default App


