import * as yup from "yup"

export const basicSchema = yup.object().shape({
    name: yup.string("errors.name.letters")
                .min(3, "errors.name.short")
                .max(45, "errors.name.long")
                .matches(/^[a-zA-ZÀ-ÿ\u00f1\u00d1]+(\s*[a-zA-ZÀ-ÿ\u00f1\u00d1]*)*[a-zA-ZÀ-ÿ\u00f1\u00d1]+$/, "errors.name.specialchar")
                .required("errors.required"),
    email: yup.string()
                .email("errors.email.valid")
                .required("errors.required"),
    reason: yup.string()
                .min(10, "errors.reason.short")
                .required("errors.required"),
    message: yup.string("errors.message.letters")
                .min(20, "errors.message.short")
                .max(500, "errors.message.long")
                .required("errors.required")
})