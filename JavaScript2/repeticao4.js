/* enquanto determinada condição estiver sendo verdadeira, ele execulta o codigo */

let resposta = prompt(`Sou bonito?`).toLowerCase().trim();

let respostaNaoSatisfatoria = resposta != `sim` && resposta != `s`;

while (respostaNaoSatisfatoria) {
    alert(`Resposta errada! tente novamente`);
    resposta = prompt(`Eu sou bonito?`).toLowerCase().trim();
    respostaNaoSatisfatoria = resposta != `sim` && resposta != `s`;;
}

alert(`Parabéns vc acertou!`);
