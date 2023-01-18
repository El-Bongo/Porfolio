import React from "react";

const FormInput = props =>{

  const {placeholder, label, error} = props

  return(
      <div className="form_container">
        <p className="text">{label}</p>
        <input {...props} placeholder={placeholder} />
        {error ? (
        <p className="error">{error}</p>) : null
        }
      </div>
  )
}

export default FormInput