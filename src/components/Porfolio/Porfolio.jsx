import service from "../../images/services.jpg"
import ecomm from "../../images/ecomm.jpg"
import code from "../../images/code.png"

function Porfolio(){
    return(
        <div className='porfolio_container section' id="sectionPorfolio">
            <h2>Porfolio</h2>
            <div className='porfolio_cards'>
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
            </div>
        </div>
    )
}

export default Porfolio