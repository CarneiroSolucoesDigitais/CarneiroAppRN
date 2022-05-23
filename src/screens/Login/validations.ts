import * as yup from 'yup';

export const schemaLogin = yup.object({
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    password: yup.string().required("Senha é obrigatória").min(8, "Pelo menos oito caracteres")
}).required()