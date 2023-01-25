
import squares from "../../images/ninesquares.svg"
import wiggle from "../../images/wiggle.svg"
import wiggle2 from "../../images/wiggle2.svg"
import space from "../../images/space.svg"
import space1 from "../../images/space1.svg"
import succeed from "../../images/succeed.svg"
import objective from "../../images/objective.svg"
import contact from "../../images/contact.svg"
import chatting from "../../images/chatting.svg"

function FrontPage(){

    return(
        <>
            <div className='frontpage_container'>
                <div className='frontpage_textcontainer section' id="sectionHome">
                    <div className='frontpage_maintext'>
                        <h1>Nicolás Hernán Silva</h1>
                        <h2>Desarrollador web fullstack</h2>
                        <p>Descubrí la programación y diseño hace 5 años, todo comenzo como un hobbie, haciendo mods para videojuegos. Disfrute mucho modeando, haciendo pixelart y texturas 2D, dediqué mi tiempo a aprender nuevos lenguajes, buscar código y ayudar a otros programadores. Termine descubriendo la programacion web, que mezcla lo que más me gusta, la lógica de programar y el estilo en diseño.</p>
                    </div>
                <div className='frontpage_cornerdetail'></div>
                </div>
                <div className='frontpage_stack'>
                <ul>
                    <li><p>JavaScript</p></li>
                    <li><p>React</p></li>
                    <li><p>React-Native</p></li>
                    <li><p>Sequelize</p></li>
                    <li><p>Express</p></li>
                    <li><p>GitHub</p></li>
                    <li><p>Node.js</p></li>
                    <li><p>Material-UI</p></li>
                    <li><p>Sass</p></li>
                    <li><p>Redux-Toolkit</p></li>
                    <li><p>Tailwind</p></li>
                    <li><p>CSS3</p></li>
                    <li><p>HTML5</p></li>
                </ul>
            </div>
            </div>
            <div>
                <img className="detail" src={squares} alt="detail square background"/>
                <img className="detail" src={squares} alt="detail square background"/>
                <img className="detail" src={squares} alt="detail square background"/>
                <span className="detail"></span>
                <span className="detail"></span>
                <img className="detail" src={wiggle} alt="detail wiggle background"/>
                <img className="detail" src={wiggle} alt="detail wiggle background"/>
                <img className="detail" src={wiggle} alt="detail wiggle background"/>
                <img className="detail" src={squares} alt="detail square background"/>
                <img className="detail" src={wiggle} alt="detail wiggle background"/>
                {/* 10 */}
                <span className="detail"></span>
                <img className="detail" src={space} alt="detail space background"/>
                <img className="detail" src={space1} alt="detail space background"/>
                <img className="detail" src={squares} alt="detail square background"/>
                <img className="detail" src={succeed} alt="detail succeed background"/>
                <span className="detail"></span>
                <img className="detail" src={objective} alt="detail objective background"/>
                <img className="detail" src={squares} alt="detail square background"/>
                <img className="detail" src={wiggle} alt="detail wiggle background"/>
                <img className="detail" src={wiggle2} alt="detail wiggle background"/>
                {/* 20 */}
                <img className="detail" src={contact} alt="detail contact background"/>
                <img className="detail" src={chatting} alt="detail chatting background"/>
                <img className="detail" src={squares} alt="detail square background"/>
                <img className="detail" src={wiggle} alt="detail wiggle background"/>
            </div>
        </>
    )
}

export default FrontPage;