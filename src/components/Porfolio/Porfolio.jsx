// import service from "../../images/services.jpg"
// import ecomm from "../../images/ecomm.jpg"
// import code from "../../images/code.png"


function Porfolio(){

    function handleShow(e) {

        const projects = document.querySelectorAll('.project');
        projects.forEach((link) => {
          link.classList.remove('active');
          if(link.getAttribute('id') === e.target.id){
            link.classList.add('active');
          }
        });
        
    }

    return(
        <div className='porfolio_container section' id="sectionPorfolio">
            <h2>Porfolio</h2>
            <div className="porfolio_projects">
                <div className="projects_name">
                    <h3 onClick={handleShow} id="1" >MateWeb</h3>
                    <h3 onClick={handleShow} id="2" >SinnelReparaciones</h3>
                    <h3 onClick={handleShow} id="3" >E-commerce SoyHenry</h3>
                </div>
                <div className="projects_text">
                    <div id="1" className="project">
                        <p>Un proyecto personal, que era para ofrecer mis servicios en internet, en ese momento solo sabia JavaScript, HTML y CSS.</p>
                        <div className="project_links">
                            <a href="https://github.com/Koppeks/Mateweb">Github</a>
                        </div>
                    </div>
                    <div id="2" className="project">
                        <p >Era un local de reparaciones de computadoras, necesitaba una pagina para tener mas visibilidad y aumentar el flujo de clientes.</p>
                        <div className="project_links">
                            <a href="https://github.com/Koppeks/sinnelreparaciones">Github</a>
                        </div>
                    </div>
                    <div id="3" className="project">
                        <p >El proyecto final de el bootcamp de SoyHenry, un e-commerce de venta de componentes de pc, con API de MercadoPago, MetaMask y Auth0.</p>
                        <div className="project_links">
                            <a href="https://ecommerce-frontend-30b.vercel.app/">Ver el sitio</a>
                            <a href="https://github.com/Koppeks/Ecommerce-Frontend-30b">Github</a>
                        </div>
                    </div>
                </div>
            </div>

            {/* <div className='porfolio_cards'>
                <div className='porfolio_card'>
                    <div className='porfolio_imagedet'>
                        <section></section>
                        <div className='porfolio_imgzoomeffect'>
                            <img src={service} alt="" />
                        </div>
                    </div>
                    <div className='porfolio_info'>
                        <h3>titulo de prueba</h3>
                        <p>texto random de prueba holaaaa</p>
                    </div>
                </div>
                <div className='porfolio_card'>
                    <div className='porfolio_imagedet'>
                        <section></section>
                        <div className='porfolio_imgzoomeffect'>
                            <img src={code} alt="" />
                        </div>
                    </div>
                    <div className='porfolio_info'>
                        <h3>titulo de prueba</h3>
                        <p>texto random de prueba holaaaa</p>
                    </div>
                </div>
                <div className='porfolio_card'>
                    <div className='porfolio_imagedet'>
                        <section></section>
                        <div className='porfolio_imgzoomeffect'>
                            <img src={ecomm} alt="" />
                        </div>
                    </div>
                    <div className='porfolio_info'>
                        <h3>titulo de prueba</h3>
                        <p>texto random de prueba holaaaa</p>
                    </div>
                </div>
            </div>
            <div className='porfolio_seemore'>
                <a href="#">Ver más ...</a> 
            </div> */}
        </div>
    )
}

export default Porfolio