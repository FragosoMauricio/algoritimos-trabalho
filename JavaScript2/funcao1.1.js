function bemVindo() {
    return `Bem vindo`;
}

function pegaNome() {
    let nome = document.getElementById(`nome`).value;
    let resposta = `${bemVindo()}, ${nome}!`;
    document.getElementById(`saida`).innerHTML = resposta;
}

function media(numero1, numero2) {
    let media = (numero1 + numero2) / 2;
    return media.toFixed(2);
}

function situacao(media) {
    if (media >= 70) {
        return `aprovado`;
    }
    return `Reprovado`;
}

function calcular() {
    let nota1 = parseFloat(document.getElementById(`nota1`).value);
    let nota2 = parseFloat(document.getElementById(`nota2`).value);
    let mediaReal = media(nota1, nota2);
    document.getElementById(`media`).value = mediaReal;
    document.getElementById(`situacao`).value = situacao(mediaReal);
}