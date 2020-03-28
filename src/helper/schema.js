import * as Yup from 'yup';

export const schema = Yup.object().shape({
    number: Yup.string()
        .min(19, 'Digite o código completo').max(22, 'Maximo de 22 caracteres')
        .required('Número de cartão inválido'),
    name: Yup.string()
        .min(3, 'Digite o nome completo')
        .max(50, 'Máximo de 50 caracteres')
        .required('Inseria um nome válido'),
    cvv: Yup.string().min(3, 'Código inválido').max(4).required('Insira um código válido'),
    expiry: Yup.string().required('Digite a data'),
    parcelas: Yup.number().required('Insira o número de parcelas')
});