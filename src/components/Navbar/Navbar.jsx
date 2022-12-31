import { useEffect, useState } from "react";
import logo from "../../images/Logo.svg"

function NavBar(){

    const [dataScroll, setDataScroll] = useState(0)

    

    return(
        <div className=' navbar_container '>
            <img src={logo} alt="logo de la pagina" />
            <div className='navbar_bulletcontainer'>
                <ul clas>
                    <li><p>Inicio</p></li>
                    <li><p>Stack</p></li>
                    <li><p>Porfolio</p></li>
                    <li><p>Acerca de mi</p></li>
                    <li><p>Extras</p></li>
                    <li><p>Contacto</p></li>
                </ul>
                <ul className='navbar_bulletlist'>
                    <li className={dataScroll > 0 && dataScroll < 499 ? "navbar_bulletlist_selected" : null}></li>
                    <li className={dataScroll >= 500 && dataScroll <= 799 ? "navbar_bulletlist_selected" : null}></li>
                    <li className={dataScroll >= 800 ? "navbar_bulletlist_selected" : null}></li>
                    <li className={dataScroll > 5000 ? "navbar_bulletlist_selected" : null}></li>
                    <li className={dataScroll > 5000 ? "navbar_bulletlist_selected" : null}></li>
                    <li className={dataScroll > 5000 ? "navbar_bulletlist_selected" : null}></li>
                </ul>
            </div>
            <div>
                <p>Links a redes</p>
            </div>
        </div>
    )
}

export default NavBar;