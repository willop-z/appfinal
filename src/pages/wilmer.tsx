import {
  IonPage,
  IonContent,
  IonCard,
  IonCardHeader,
  IonCardTitle,
  IonCardContent,
  IonButton
} from '@ionic/react'

import './wilmer.css'

interface Props {
  usuario: string
  onLogout: () => void
  onToContacto: () => void 
}

function Home({ usuario, onLogout, onToContacto }: Props) {

  return (

    <IonPage>

      <IonContent className="ion-padding fondo-home">

        <h1 className="titulo-home">
          Wilmer Alexander García Lopez
        </h1>

        <IonButton
              color= "danger"
              className="boton-logout"
              onClick={onLogout}
            >
              Cerrar sesión
        </IonButton>

        <IonCard className="card-home">

          <IonCardHeader>

            <IonCardTitle>
              Bienvenido, este es el portafolio personal de {usuario} García
            </IonCardTitle>

          </IonCardHeader>

          

          <IonCardContent>
          <section className="presentacion">
            <p className="texto-home">
              Hola, que tal. Me llamo Wilmer y tengo 27 años, soy estudiante de codificación en software en TecAlianza y próximamente entraré en la etapa productiva; vivo en Toberin, tengo dos gatas y trabajo de forma remota como transcriptor de datos para una aseguradora en salud. En mis tiempos libres me dedico a jugar en el celular o practicar un idioma, algunas veces leo un poco de algún libro o veo un capítulo de alguna serie, pero no mientras trabajo porque me distraigo y no trabajo. No suelo salir mucho de casa, ni de hacer deporte o ir a un gimnasio; aunque sé cocinar no me gusta hacerlo, pero sí comer: mi restaurante favorito es Sr. Wok. No me gusta mucho el alcohol, pero algunos fines de semana salgo a tomar unas polas con mis amigos de estudio.
            </p>
          </section>

          <section className="gustos">
              <h2>Gustos personales</h2>
              <p>A continuación algunos de los temas que más me gustan.</p>

            <div className="bloqueGustos">
                <div className="item">
                    <strong>Música favorita</strong>
                    <ul>
                        <li>Rap</li>
                        <li>Regguetón</li>
                        <li>Tecno</li>
                        <li>Hip-Hop</li>
                        <li>Pop en inglés</li>
                    </ul>
                </div>
                <div className="item">
                    <strong>Comida favorita</strong>
                    <ul>
                        <li>Pizza</li>
                        <li>Arroz al wok</li>
                        <li>Alistas en salsa</li>
                        <li>Chicharrón</li>
                        <li>Carne de cerdo</li>
                    </ul>
                </div>
                <div className="item">
                    <strong>Película o serie favorita</strong>
                    <ul>
                        <li>Rick & Morty</li>
                        <li>IntensaMente</li>
                        <li>(Des)encanto</li>
                        <li>Kun-Fu Panda</li>
                        <li>Yo soy Betty, la fea</li>
                    </ul>
                </div>
                <div className="item">
                    <strong>Actividades de interés</strong>
                    <ul>
                        <li>Jugar Cod Mobile</li>
                        <li>Estudiar en Duolingo</li>
                        <li>Escuchar música</li>
                        <li>Salir a caminar</li>
                        <li>Museos</li>
                    </ul>
                </div>
            </div>
          </section>

          <section id="habilidadesEintereses">
            <h2>Habilidades e intereses</h2>
            <p>En esta parte relaciono algunas de las habilidades que más destaco de mi y mis intereses generales.</p>
              <div className="bloqueHabilidades">

                <div className="habilidades">
                    <h4>Habilidades</h4>
                        <div className="hab1">Resolución de puzzles</div>
                        <div className="hab3">Digitación</div>
                        <div className="hab2">Aprendizaje continuo</div>
                        <div className="hab4">Organización</div>
                        <div className="hab5">Expresión textual</div>
                </div>

                <div className="intereses">
                    <h4>Intereses</h4>
                        <div className="int1">Comida</div>
                        <div className="int2">Nueva música</div>
                        <div className="int3">Juegos de lógica</div>
                        <div className="int4">Escritura</div>
                        <div className="int5">Idioma italiano</div>
                        <div className="int6">Tecnología</div>
                </div>
              </div>
          </section>

                <IonButton
                    color= "danger"
                    expand="block"
                    className="boton-contacto"
                    onClick={onToContacto}
                  >
                    Para contactarme, haz click aquí
                </IonButton>

          </IonCardContent>

        </IonCard>

      </IonContent>

    </IonPage>
  )
}

export default Home