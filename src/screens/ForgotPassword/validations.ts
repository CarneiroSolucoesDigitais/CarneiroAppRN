import * as yup from 'yup';

export const schemaForgotPassword = yup.object({
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório")
}).required()