var CPF = [];

function validarCPF(cpf) {
    cpf = cpf.replace(/[^\d]+/g, ''); // Remove tudo que não é dígito
    if (cpf.length !== 11) return false; // CPF deve ter 11 dígitos

    // Calculo do primeiro dígito
    var soma = 0;
    for (var i = 0; i < 9; i++) {
        soma += parseInt(cpf.charAt(i)) * (10 - i);
    }
    var resto = soma % 11;
    var digito1 = resto < 2 ? 0 : 11 - resto;

    // Calculo do segundo dígito
    soma = 0;
    for (var i = 0; i < 10; i++) {
        soma += parseInt(cpf.charAt(i)) * (11 - i);
    }
    resto = soma % 11;
    var digito2 = resto < 2 ? 0 : 11 - resto;

    // Verifica se os dígitos calculados são iguais aos do CPF informado
    return cpf.charAt(9) == digito1 && cpf.charAt(10) == digito2;
}

function validar() {
    const cpfInput = document.getElementById("cpf").value;
    const resultado = document.getElementById("resultado");

    if (validarCPF(cpfInput)) {
        resultado.innerHTML = "CPF válido !";
        resultado.style.color = "green";
    } else {
        resultado.innerHTML = "CPF inválido !";
        resultado.innerHTML = "CPF inválido !";
        resultado.style.color = "red";
    }
}
