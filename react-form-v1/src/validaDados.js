export default function validaDados(values) {
    let errors = {}

    if(!values.username.trim()) {
        errors.username = "Campo obrigatório"
    }

    if(!values.email) {
        errors.email = "Insira um e-mail"
    } else if(!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
        errors.email = "Email inválido"
    }

    if(!values.senha) {
        errors.senha = "Insira uma senha"
    } else if (values.senha.length < 6) {
        errors.senha = "Senha deve ter no mínimo 6 caracteres"
    }

    if(!values.senha2) {
        errors.senha2 = "Insira uma senha"
    } else if (values.senha2 !== values.senha) {
        errors.senha2 = "Senha deve ser igual"
    }

    return errors;
}