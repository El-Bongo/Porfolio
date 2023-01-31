import csharp from "../../images/StackLogos/Extras/csharp.svg"
import cplus from "../../images/StackLogos/Extras/cplus.svg"
import figma from "../../images/StackLogos/Extras/figma.svg"
import jira from "../../images/StackLogos/Extras/jira.svg"
import notion from "../../images/StackLogos/Extras/notion.svg"
import php from "../../images/StackLogos/Extras/php.svg"
import xml from "../../images/StackLogos/Extras/xml.svg"
import { Trans, useTranslation } from "react-i18next"

function ExtraAbilities(){

    const [t, i18n] = useTranslation()

    return(
        <div className='extra_container section' id="sectionExtras">
            <div className='extra_holder'>
                <div className='extra_list'>
                    <h2>
                        <Trans i18nKey="extra.extratitle1">
                            Habilidades extra
                        </Trans>
                    </h2>
                    <ul>
                        <li><p>Figma</p></li>
                        <li><p>Gimp</p></li>
                        <li><p>XML</p></li>
                        <li><p>Notion</p></li>
                        <li><p>Jira</p></li>
                        <li><p>Diseño SVG</p></li>
                        <li><p>Ingles C1</p></li>
                        <li><p>Portugues B1</p></li>
                    </ul>
                </div>
                <div className='extra_rotation'>
                    <ul className="orbit-wrap">
                        <li>
                            <ul className="ring-1">
                                <li><img className="orbit-icon" src={xml}/></li>
                                <li><img className="orbit-icon" src={jira}/></li>
                                <li><img className="orbit-icon" src={notion}/></li>
                                <li><img className="orbit-icon" src={figma}/></li>
                            </ul>             
                        </li>
                    </ul>
                </div>
            </div>
            <div className='extra_holder'>
                <div className='extra_rotation'>
                    <ul className="orbit-wrap">
                        <li>
                            <ul className="ring-0">
                                <li><img className="orbit-icon" src={php}/></li>
                                <li><img className="orbit-icon" src={csharp}/></li>
                                <li><img className="orbit-icon" src={cplus}/></li>
                            </ul>
                        </li>
                    </ul>
                </div>
                <div className='extra_text'>
                    <h2>
                        <Trans i18nKey="extra.extratitle2">
                            Tecnologías objetivo
                        </Trans>
                    </h2>
                    <p>
                        <Trans i18nKey="extra.description2">
                            Quiero seguir expandiendo mi conocimiento dentro de otras tecnologias en un futuro, he raspado la superficie de algunas como PHP, C# y C++. En un futuro estoy intrigado por ver que puedo aprender de esos lenguajes.
                        </Trans>
                    </p>
                </div>
            </div>

        </div>
    )
}

export default ExtraAbilities