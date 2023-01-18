import * as yup from "yup"

export const basicSchema = yup.object().shape({
    name: yup.string("El nombre debe contener letras")
                .min(3, "El nombre es demasiado corto")
                .max(45, "El nombre es demasiado largo")
                .matches(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/, "Tu nombre no puede contener números o caracteres especiales")
                .required("Campo requerido"),
    email: yup.string()
                .email("Debes ingresar un email valido")
                .required("Campo requerido"),
    reason: yup.string()
                .min(10, "La razon es demasiado corta")
                .required("Campo requerido"),
    message: yup.string("El mensaje debe contener letras")
                .min(20, "El mensaje es demasiado corto")
                .max(500, "El nombre es demasiado largo")
                .required("Campo requerido"),
    
})