import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/react'

import './Nicolas.css'

interface Props {
  usuario: string
  onLogout: () => void
}

function Home({ usuario, onLogout }: Props) {
  return (
    <IonPage>
      <IonContent className="ion-padding fondo-home">

        <h1 className="titulo-home">
          Bienvenido a mi espacio personal
        </h1>

        <IonCard className="card-home">

          <IonCardHeader>
            <IonCardTitle>
              Hola, {usuario} 👋
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>

            <p className="texto-home">
              Este es mi proyecto personal desarrollado con Ionic React.
            </p>

            <h3>Sobre mí</h3>

            <ul className="lista-home">
              <li>⚽ Me gusta el fútbol</li>
              <li>💻 Apasionado por la programación</li>
              <li>🌐 Interesado en redes y desarrollo web</li>
              <li>🥅 Disfruto ver partidos</li>
            </ul>

            <p>
              Gracias por visitar mi aplicación.
            </p>

            <IonButton
              color="danger"
              expand="block"
              className="boton-logout"
              onClick={onLogout}
            >
              Cerrar sesión
            </IonButton>

          </IonCardContent>

        </IonCard>

      </IonContent>
    </IonPage>
  )
}

export default Home