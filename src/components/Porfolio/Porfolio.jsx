import { Trans, useTranslation } from "react-i18next";
import squares from "../../images/ninesquares.svg";
import wiggle from "../../images/wiggle.svg";

function Porfolio() {
  const [t, i18n] = useTranslation();

  function handleShow(e) {
    const projects = document.querySelectorAll(".project");
    projects.forEach((link) => {
      link.classList.remove("active");
      if (link.getAttribute("id") === e.target.id) {
        link.classList.add("active");
      }
    });
  }

  return (
    <div className="porfolio_container section" id="sectionPorfolio">
      <h2>Porfolio</h2>
      <div className="porfolio_projects">
        <div className="projects_name">
          <h3 onClick={handleShow} id="1">
            MateWeb
          </h3>
          <h3 onClick={handleShow} id="2">
            SinnelReparaciones
          </h3>
          <h3 onClick={handleShow} id="3">
            E-commerce SoyHenry
          </h3>
          <h3 onClick={handleShow} id="4">
            Alan Urri porfolio
          </h3>
        </div>
        <div className="projects_text">
          <div id="1" className="project">
            <p>
              <Trans i18nKey="porfolio.mateweb">
                Un proyecto personal, que era para ofrecer mis servicios en
                internet, en ese momento solo sabia JavaScript, HTML y CSS.
              </Trans>
            </p>
            <div className="project_links">
              <a
                href="https://github.com/Koppeks/Mateweb"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div id="2" className="project">
            <p>
              <Trans i18nKey="porfolio.sinnel">
                Era un local de reparaciones de computadoras, necesitaba una
                pagina para tener mas visibilidad y aumentar el flujo de
                clientes.
              </Trans>
            </p>
            <div className="project_links">
              <a
                href="https://github.com/Koppeks/sinnelreparaciones"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div id="3" className="project">
            <p>
              <Trans i18nKey="porfolio.soyhenry">
                El proyecto final de el bootcamp de SoyHenry, un e-commerce de
                venta de componentes de pc, con API de MercadoPago, MetaMask y
                Auth0.
              </Trans>
            </p>
            <div className="project_links">
              <a
                href="https://ecommerce-frontend-30b.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Trans i18nKey="porfolio.link">Ver el sitio</Trans>
              </a>
              <a
                href="https://github.com/Koppeks/Ecommerce-Frontend-30b"
                target="_blank"
                rel="noopener noreferrer"
              >
                Github
              </a>
            </div>
          </div>
          <div id="4" className="project">
            <p>
              <Trans i18nKey="porfolio.alan">
                Una Landing page para un profesional del marketing y contenido
                digital.
              </Trans>
            </p>
            <div className="project_links">
              <a
                href="https://alan-porfolio.vercel.app/"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Trans i18nKey="porfolio.link">Ver el sitio</Trans>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Porfolio;
