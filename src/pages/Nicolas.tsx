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
  onVolver: () => void
}

function Nicolas({onLogout, onVolver }: Props) {
  return (
    <IonPage>
      <IonContent className="ion-padding fondo-home">

        <h1 className="tituloHome">
          Nicolás Guillermo Bonilla Padilla
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
              Bienvenido, este es el portafolio personal de Nicolás Bonilla
            </IonCardTitle>
          </IonCardHeader>

          <IonCardContent>

            <section className="presentacionIntegrante">
                <p className="textoHome">
                Hola, soy Nicolas Bonilla, tengo 28 años y soy estudiante de TEC Alianza, donde actualmente curso la carrera de Codificación de Software. En mis tiempos libres me gusta leer y practicar deporte, especialmente fútbol, ya que desde muy pequeño ha sido una de mis mayores pasiones. Además, soy fiel hincha del equipo Millonarios Fútbol Club y, cuando tengo la oportunidad, asisto al estadio para apoyar a mi equipo. Vivo con mis padres, mis dos hermanos y mi perro.
                </p>
            </section>

            <h3>Sobre mí</h3>

            <ul className="listaHome">
              <li>⚽ Me gusta el fútbol</li>
              <li>💻 Apasionado por la programación</li>
              <li>🌐 Interesado en redes y desarrollo web</li>
              <li>🥅 Disfruto ver partidos</li>
            </ul>

            <p>
              Gracias por visitar mi página personal.
            </p>

          </IonCardContent>

        </IonCard>

      </IonContent>
    </IonPage>
  )
}

export default Nicolas

