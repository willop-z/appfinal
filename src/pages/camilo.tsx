import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/react'

import './Camilo.css'

interface Props {
  usuario: string
  onLogout: () => void
  onVolver: () => void
}

function Camilo({onLogout, onVolver }: Props) {
  return (
    <IonPage>
      <IonContent className="ion-padding fondo-home">

        <h1 className="tituloHome">
          Camilo Quiroga Ardila
        </h1>

        <IonButton
          expand="block"
          className="botonReturn"
          onClick={onVolver}
        >
          ← Volver al inicio
        </IonButton>

        <IonButton
            color="danger"
            className="botonLogout"
            onClick={onLogout}
        >
            Cerrar sesión
        </IonButton>

        <IonCard className="cardHome">

          <IonCardHeader>
            <IonCardTitle>
              Bienvenido, este es el portafolio personal de Camilo Quiroga
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>

            <section className="presentacionIntegrante">
            <p className="textoHome">
              Soy estudiante de tecnico de codificacion de software en TecAlianza y proximamente entrare a la etapa productiva, tengo 23 años, estoy laborando en redeban entregando datafonos para los diferentes comercios a nivel Bogotá y a veces por fuera de Bogotá, en mi tiempo libre me gusta escuchar música, jugar xbox.
            </p>
            </section>

            <h3>Acerca de mí</h3>

            <ul className="listaHome">
              <li>🎵 Me gusta escuchar música</li>
              <li>💻 Apasionado por la programación</li>
              <li>🌐 Interesado en redes y desarrollo web</li>
              <li>🎬 Disfruto ver películas de acción y terror</li>
            </ul>

            <p>
              Gracias por visitar mi página web.
            </p>


          </IonCardContent>

        </IonCard>

      </IonContent>
    </IonPage>
  )
}

export default Camilo

