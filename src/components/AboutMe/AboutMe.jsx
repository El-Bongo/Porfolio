import me from "../../images/caricatura.png"
import cararrow from "../../images/cararrow.svg"
import { Trans, useTranslation } from "react-i18next"

function AboutMe () {

    const [t, i18n] = useTranslation()

    return(
        <div className='aboutme_container section' id="sectionAbout">
            <h2>
                <Trans i18nKey="aboutme.title">
                    Acerca de mi
                </Trans>
            </h2>
            <div>
                <div className='aboutme_image'>
                    <img className="aboutme_arrow" src={cararrow}/>
                    <img src={me} alt="Texto acerca de mi" />
                </div>
                <p>
                    <Trans i18nKey="aboutme.description">
                        Vivo en Argentina, tengo 25 años, soy una persona tranquila y paciente, 
                        me gusta el futbol, los videojuegos, hacer ejercicio que además de mejorar 
                        la salud lo utilizo de forma terapeutica, las playas, el diseño en 2D/3D, 
                        el taekwondo y claro, lo que antes consideraba un hobbie, 
                        hoy es mi fuente de ingresos, la programación.
                    </Trans>
                    </p>
            </div>
        </div>
    )
}

export default AboutMe