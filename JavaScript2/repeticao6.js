const senha = `12345`;
let feedback = `Bloqueado`;

for (let contador = 0; contador < 4; contador++) {
    senhaDigitada = prompt(`Digite a senha:`);
    if (senhaDigitada == senha) {
        feedback = `Autorizado`;
        break;
    }
    alert(`Senha Invalida! tentativa ${contador + 1} de 4`);
}

alert(feedback)
