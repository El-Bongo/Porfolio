import me from "../../images/caricatura.png"
import cararrow from "../../images/cararrow.svg"

function AboutMe () {
    return(
        <div className='aboutme_container'>
            <h2>Acerca de mi</h2>
            <div>
                <div className='aboutme_image'>
                    <img className="aboutme_arrow" src={cararrow}/>
                    <img src={me} alt="Texto acerca de mi" />
                </div>
                <p>Vivo en Argentina, tengo 25 años, soy una persona tranquila y paciente, 
                    me gusta el futbol, los videojuegos, hacer ejercicio que además de mejorar 
                    la salud lo utilizo de forma terapeutica, las playas, el diseño en 2D/3D, 
                    el taekwondo y claro, lo que antes consideraba un hobbie, 
                    hoy es mi fuente de ingresos, la programación.</p>
            </div>
        </div>
    )
}

export default AboutMe