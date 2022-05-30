import * as yup from 'yup';

const phoneRegExp = /^\s(\d{2}|\d{0})[-. ]?(\d{5}|\d{4})[-. ]?(\d{4})[-. ]?\s$/

export const schemaCreateAccount = yup.object({
    name: yup.string().required("Nome é obrigatório"),
    email: yup.string().email("E-mail inválido").required("E-mail é obrigatório"),
    phoneNumber: yup.string().matches(phoneRegExp, 'Número de telefone não é válido').required("Telefone é obrigatório").min(11, 'Mínimo de onze caracteres').max(11, ''),
    password: yup.string().required("Senha é obrigatória").min(8, "Pelo menos oito caracteres")
}).required()