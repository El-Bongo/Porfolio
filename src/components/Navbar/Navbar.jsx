import * as ReactDOM from 'react-dom';
import React, { useEffect, useState} from "react";
import logo from "../../images/Logo.svg"
import discord from "../../images/Social/discord.svg"
import github from "../../images/Social/github.svg"
import linkedin from "../../images/Social/linkedin.svg"
import { Trans, useTranslation } from 'react-i18next';



function NavBar(){

  const [activeSection, setActiveSection] = useState(null);
  const [isOpen, setIsOpen] = useState(false);

  const [t, i18n] = useTranslation()

  useEffect(() => {
    const sections = document.querySelectorAll('.section');
    function handleScroll() {
      const scrollPos = window.scrollY + (window.innerHeight/3);
      sections.forEach((section) => {
        if (scrollPos >= section.offsetTop && scrollPos < section.offsetTop + section.offsetHeight) {
          setActiveSection(section.id);
        }
      });
    }
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks.forEach((link) => {
      link.classList.remove('active');
      if (link.getAttribute('href') === `#${activeSection}`) {
        link.classList.add('active');
      }
    });
    const navCuadrao = document.querySelectorAll('.nav-cuadrao');
    navCuadrao.forEach((link) => {
      link.classList.remove('activefig');
      if (link.getAttribute('href') === `#${activeSection}`) {
        link.classList.add('activefig');
      }
    });
  }, [activeSection]);

  useEffect(() => {
    const navLinks = document.querySelectorAll('.nav-link');
    navLinks[0].classList.add('active');
    const navCuadrao = document.querySelectorAll('.nav-cuadrao');
    navCuadrao[0].classList.add('activefig');
  }, []);

  const changeLanguage = (lang) =>{
    i18n.changeLanguage(lang)
  }

    return(
        <div className=' navbar_container '>
            <img src={logo} alt="logo de la pagina" />
            <div>

              <div className="dropdown" onClick={() => setIsOpen(!isOpen)}>
                <button className="dropdown_button">{i18n.language === "es" ? "Español" : "English"}</button>
                <div className={`dropdown_menu ${isOpen ? "dropdown_menu--active" : ""}`}>
                  <h4 className="dropdown_option" onClick={()=> changeLanguage("es")}>Esp</h4>
                  <h4 className="dropdown_option" onClick={()=> changeLanguage("en")}>Eng</h4>
                </div>
              </div>

              {/* <button onClick={()=> changeLanguage("es")}>ES</button>
              <button onClick={()=> changeLanguage("en")}>EN</button> */}
            </div>
            <div className='nav-scrollspy'>
                <nav>
                    <a className="nav-link active" href="#sectionHome">
                      <Trans i18nKey="navbar.one">
                        Inicio
                      </Trans>
                    </a>
                    <a className="nav-link" href="#sectionStack">Stack</a>
                    <a className="nav-link" href="#sectionPorfolio">Porfolio</a>
                    <a className="nav-link" href="#sectionAbout">
                      <Trans i18nKey="navbar.four">
                        Acerca de mi
                      </Trans>
                    </a>
                    <a className="nav-link" href="#sectionExtras">
                      <Trans i18nKey="navbar.five">
                        Extras
                      </Trans>
                    </a>
                    <a className="nav-link" href="#sectionContact">
                      <Trans i18nKey="navbar.six">
                        Contacto
                      </Trans>
                    </a>
                </nav>
                <section>
                    <a className="nav-cuadrao activefig" href="#sectionHome"></a>
                    <a className="nav-cuadrao" href="#sectionStack"></a>
                    <a className="nav-cuadrao" href="#sectionPorfolio"></a>
                    <a className="nav-cuadrao" href="#sectionAbout"></a>
                    <a className="nav-cuadrao" href="#sectionExtras"></a>
                    <a className="nav-cuadrao" href="#sectionContact"></a>
                </section>
            </div>
            <div className="navbar_social">
                <ul>
                  <li><a href="https://www.discord.com/users/360895618966880259" target="_blank" rel="noopener noreferrer"><img src={discord} alt="logo discord"/></a></li>
                  <li><a href="https://www.linkedin.com/in/nicolas-silva/" target="_blank" rel="noopener noreferrer"><img src={linkedin} alt="logo linkedin"/></a></li>
                  <li><a href="https://github.com/Koppeks" target="_blank" rel="noopener noreferrer"><img src={github} alt="logo github"/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;