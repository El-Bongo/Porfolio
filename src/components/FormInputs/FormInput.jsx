import i18next from "i18next";
import React from "react";
import { useTranslation } from "react-i18next";

const FormInput = props =>{

  const [t, i18n] = useTranslation()

  const {placeholder, label, error} = props

  return(
      <div className="form_container">
        <p className="text">{i18next.t(label)}</p>
        <input {...props} placeholder={i18next.t(placeholder)} />
        {error ? (
        <p className="error">{i18next.t(error)}</p>) : null
        }
      </div>
  )
}

export default FormInput