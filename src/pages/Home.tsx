import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton,
  IonRouterLink
} from '@ionic/react'

import './Home.css'

interface Props {
  usuario: string
  onLogout: () => void
}

function Home({ onLogout }: Props) {
  return (
    <IonPage>
      <IonContent className="ion-padding fondo-home">

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
              Este es nuestro proyecto desarrollado con Ionic React.
            </p>

            <ul className="lista-home">
              <li>
                <IonRouterLink routerLink="/wilmer">
                  👨‍💻 Wilmer Garcia
                </IonRouterLink>
              </li>

              <li>
                <IonRouterLink routerLink="/camilo">
                  👨‍💻 Camilo Quiroga
                </IonRouterLink>
              </li>

              <li>
                <IonRouterLink routerLink="/nicolas">
                  👨‍💻 Nicolas Bonilla
                </IonRouterLink>
              </li>
            </ul>

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