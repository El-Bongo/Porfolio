import React from "react"

import { Formik } from "formik"
import { basicSchema } from "../../schemas";
import FormInput from "../FormInputs/FormInput";
import emailjs from "@emailjs/browser"
import Footer from "../Footer/Footer";

function ContactMe(){
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

                    setTimeout(()=>{
                        emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, "#form", process.env.REACT_APP_PUBLIC_KEY)
                        .then((result) => {
                            console.log(result.text);
                            console.log("Mensaje enviado correctamente")
                        }, (error) => {
                            console.log(error.text);
                        });
                    }, 500)

                }}
            >

            {({values, errors, touched, handleChange, handleBlur, handleSubmit}) =>{
          
            const {name, email, reason, message} = values

            return(
                <form className="form_container" id="form">
                    <FormInput 
                        value={name}
                        name="name"
                        error={touched.name && errors.name}
                        placeholder="Escribe tu nombre completo aquí"
                        label="Nombre completo"
                        onChange={handleChange('name')}
                        onBlur={handleBlur("name")}
                    />
                    <FormInput 
                        value={email}
                        name="email"
                        error={touched.email && errors.email}
                        placeholder="Escribe tu email aquí"
                        label="Email"
                        onChange={handleChange('email')}
                        onBlur={handleBlur("email")}
                    />
                    <FormInput 
                        value={reason}
                        name="reason"
                        error={touched.reason && errors.reason}
                        placeholder="Escribe el motivo de tu mensaje aquí"
                        label="Motivo de tu mensaje"
                        onChange={handleChange('reason')}
                        onBlur={handleBlur("reason")}
                    />
                    <FormInput 
                        value={message}
                        name="message"
                        error={touched.message && errors.message}
                        placeholder="Escribe tu mensaje aquí"
                        label="Mensaje"
                        onChange={handleChange('message')}
                        onBlur={handleBlur("message")}
                    />
                    {
                        Object.keys(errors).length > 0 ? 
                        <button className="button" disabled>Enviar</button>
                        :
                        <button className="button" onClick={handleSubmit}>Enviar</button>
                    }
                </form>
            )}}
            </Formik>
        </div>
    )
}

export default ContactMe