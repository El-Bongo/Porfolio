import * as ReactDOM from 'react-dom';
import React, { useEffect, useState} from "react";
import logo from "../../images/Logo.svg"
import discord from "../../images/Social/discord.svg"
import github from "../../images/Social/github.svg"
import linkedin from "../../images/Social/linkedin.svg"



function NavBar(){

  const [activeSection, setActiveSection] = useState(null);

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
    return(
        <div className=' navbar_container '>
            <img src={logo} alt="logo de la pagina" />
            <div className='nav-scrollspy'>
                <nav>
                    <a className="nav-link active" href="#sectionHome">Inicio</a>
                    <a className="nav-link" href="#sectionStack">Stack</a>
                    <a className="nav-link" href="#sectionPorfolio">Porfolio</a>
                    <a className="nav-link" href="#sectionAbout">Acerca de mi</a>
                    <a className="nav-link" href="#sectionExtras">Extras</a>
                    <a className="nav-link" href="#sectionContact">Contacto</a>
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
                  <li><a href="https://www.discord.com/users/360895618966880259"><img src={discord} alt="logo discord"/></a></li>
                  <li><a href="https://www.linkedin.com/in/nicolas-silva/"><img src={linkedin} alt="logo linkedin"/></a></li>
                  <li><a href="https://github.com/Koppeks"><img src={github} alt="logo github"/></a></li>
                </ul>
            </div>
        </div>
    )
}

export default NavBar;