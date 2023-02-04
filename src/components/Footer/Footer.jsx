import React from "react";
import { Trans, useTranslation } from "react-i18next";

function Footer() {

    const [t, i18n] = useTranslation()
    
    return(
        <div className="footer_container">
            <h4>
                <Trans i18nKey={"footer"}>
                    Diseñado y construido por
                </Trans>
                 <a href="https://github.com/Koppeks" target="_blank" rel="noopener noreferrer"> Nicolás H. Silva</a></h4>
        </div>
    )
}

export default Footer;

