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
  usuario: string
  onLogout: () => void
  onWilmer: () => void
  onCamilo: () => void
  onNicolas: () => void
}

function Home({ usuario, onLogout, onWilmer, onCamilo, onNicolas }: Props) {
  return (
    <IonPage>
      <IonContent className="fondo-home">

        <h1 className="titulo-home">
          Bienvenidos al Grupo del Rincón
        </h1>

        <IonButton
            color="danger"
            className="boton-logout"
            onClick={onLogout}
        >
            Cerrar sesión
        </IonButton>

        <IonCard className="card-home">

          <IonCardHeader>
            <IonCardTitle className="saludo-usuario">
              Hola {usuario} 👋
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>
            <section className="presentacion-home">
            <p className="texto-home">
              Este es nuestro proyecto aplicativo web desarrollado con Ionic React. Aquí podrás conocer a los integrantes del grupo y explorar un poco acerca de nosotros ¡Gracias por visitarnos!
            </p>
            </section>

            <section className="lista-home">
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
            </section>
            <br />
              <section className="agradecimiento">
            <p>
              Gracias por visitar nuestra aplicación web.
            </p>
            </section>

          </IonCardContent>

        </IonCard>

      </IonContent>
    </IonPage>
  )
}

export default Home
