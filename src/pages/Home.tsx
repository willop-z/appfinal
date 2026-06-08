import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/react'

import './Home.css'

interface Props {
  onLogout: () => void
  onWilmer: () => void
  onCamilo: () => void
  onNicolas: () => void
}

function Home({
  onLogout,
  onWilmer,
  onCamilo,
  onNicolas
}: Props) {
  return (
    <IonPage>
      <IonContent className="fondo-home">

        <h1 className="titulo-home">
          Bienvenidos al Grupo del Rincón
        </h1>

        <IonCard className="card-home">

          <IonCardHeader>
            <IonCardTitle>
              Hola 👋
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>

            <p className="texto-home">
              Este es nuestro proyecto desarrollado del grupo
            </p>

            <div className="lista-home">

              <IonButton
                expand="block"
                onClick={onWilmer}
              >
                👨‍💻 Wilmer Garcia
              </IonButton>

              <IonButton
                expand="block"
                onClick={onCamilo}
              >
                👨‍💻 Camilo Quiroga
              </IonButton>

              <IonButton
                expand="block"
                onClick={onNicolas}
              >
                👨‍💻 Nicolas Bonilla
              </IonButton>

            </div>

            <p>
              Gracias por visitar nuestra aplicación.
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

