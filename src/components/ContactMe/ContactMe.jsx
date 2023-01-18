import React from "react"

import { Formik } from "formik"
import { basicSchema } from "../../schemas";
import FormInput from "../FormInputs/FormInput";


function ContactMe(){


    function handleSubmit() {
        console.log("hola")
    }

    return(
        <div className="form_main section" id="sectionContact">
            <h2>Contacta conmigo</h2>
            <Formik
                initialValues={{name: '', email: '', reason: '', message: ''}}
                validationSchema={basicSchema}
                onSubmit={(values, formikActions) =>{

                    const data = {
                        name: values.name,
                        email: values.email,
                        reason: values.reason,
                        message: values.message
                    }
                    console.log("Mensaje enviado(En realidad no xd)")

                }}
            >

            {({values, errors, touched, handleChange, handleBlur, handleSubmit}) =>{
          
            const {name, email, reason, message} = values

            return(
                <div>
                <FormInput 
                    value={name}
                    error={touched.name && errors.name}
                    placeholder="Escribe tu nombre completo aquí"
                    label="Nombre completo"
                    onChange={handleChange('name')}
                    onBlur={handleBlur("name")}
                />
                <FormInput 
                    value={email}
                    error={touched.email && errors.email}
                    placeholder="Escribe tu email aquí"
                    label="Email"
                    onChange={handleChange('email')}
                    onBlur={handleBlur("email")}
                />
                <FormInput 
                    value={reason}
                    error={touched.reason && errors.reason}
                    placeholder="Escribe el motivo de tu mensaje aquí"
                    label="Motivo de tu mensaje"
                    onChange={handleChange('reason')}
                    onBlur={handleBlur("reason")}
                />
                <FormInput 
                    value={message}
                    error={touched.message && errors.message}
                    placeholder="Escribe tu mensaje aquí"
                    label="Mensaje"
                    onChange={handleChange('message')}
                    onBlur={handleBlur("message")}
                />
                {
                    Object.keys(errors).length > 0 ? 
                    <button disabled>Enviar</button>
                    :
                    <button onClick={handleSubmit}>Enviar</button>
                }
                </div>
            )}}
            </Formik>
        </div>
    )
}

export default ContactMe