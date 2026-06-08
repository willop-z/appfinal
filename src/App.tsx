import { useState } from 'react'
import { IonApp } from '@ionic/react'
import '@ionic/react/css/core.css'
import Login from './Login'

function App() {
  const [usuario, setUsuario] = useState('')
  const [pantallaActual, setPantallaActual] = useState<'home' | 'backhome'>('home')

  return (
    <IonApp>
      {
        usuario === ''
          ? (
            <Login onLogin={setUsuario} />
          )
          : usuario === 'wilmer' || usuario === 'nicolas' || usuario === 'camilo'
          ? (
            pantallaActual === 'home' ? (
            <Home
              usuario={usuario}
              onLogout={() => setUsuario('')}
              onBackhome={() => setPantallaActual('backhome')}
            />
          )
          :(
            <Backhome
              usuario={usuario}
              onVolver={() => setPantallaActual('home')}
              onLogout={() => setUsuario('')}
            />
          )
        )
      }
    </IonApp>
    )
  }



export default App
