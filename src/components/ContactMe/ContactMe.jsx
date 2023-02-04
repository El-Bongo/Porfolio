import React from "react"

import { Formik } from "formik"
import { basicSchema } from "../../schemas";
import FormInput from "../FormInputs/FormInput";
import emailjs from "@emailjs/browser"
import Footer from "../Footer/Footer";
import { Trans, useTranslation } from "react-i18next";
import i18next from "i18next";

function ContactMe(){

    const [t, i18n] = useTranslation()

    return(
        <div className="form_main section" id="sectionContact">
            <h2>
                <Trans i18nKey="contact.title">
                    Contacta conmigo
                </Trans>
            </h2>
            <Formik
                initialValues={{name: '', email: '', reason: '', message: ''}}
                validationSchema={basicSchema}
                onSubmit={(values, {resetForm}) =>{

                    const data = {
                        name: values.name,
                        email: values.email,
                        reason: values.reason,
                        message: values.message
                    }

                    emailjs.sendForm(process.env.REACT_APP_SERVICE_ID, process.env.REACT_APP_TEMPLATE_ID, "#form", process.env.REACT_APP_PUBLIC_KEY)

                    resetForm()
                    
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
                        placeholder="contact.form.placeholder1"
                        label="contact.form.name1"
                        onChange={handleChange('name')}
                        onBlur={handleBlur("name")}
                    />
                    <FormInput 
                        value={email}
                        name="email"
                        error={touched.email && errors.email}
                        placeholder="contact.form.placeholder2"
                        label="Email"
                        onChange={handleChange('email')}
                        onBlur={handleBlur("email")}
                    />
                    <FormInput 
                        value={reason}
                        name="reason"
                        error={touched.reason && errors.reason}
                        placeholder="contact.form.placeholder3"
                        label="contact.form.name3"
                        onChange={handleChange('reason')}
                        onBlur={handleBlur("reason")}
                    />
                    <FormInput 
                        value={message}
                        name="message"
                        error={touched.message && errors.message}
                        placeholder="contact.form.placeholder4"
                        label="contact.form.name4"
                        onChange={handleChange('message')}
                        onBlur={handleBlur("message")}
                    />
                    {
                        Object.keys(errors).length > 0 ? 
                        <button className="button" disabled>{i18next.t("contact.form.button")}</button>
                        :
                        <button className="button" onClick={handleSubmit}>{i18next.t("contact.form.button")}</button>
                    }
                </form>
            )}}
            </Formik>
        </div>
    )
}

export default ContactMe