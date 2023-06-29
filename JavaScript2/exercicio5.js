let nota1 = parseFloat(prompt(`Digite a primeira nota`));
let nota2 = parseFloat(prompt(`Digite a segunda nota`));

let media = (nota1 + nota2) /2;
let aprovado = media >= 7 && media <= 9.9;
let reprovado = media <= 7;
let aprovadoDinst = media == "10";

if (aprovado) {
    alert(`Aprovado muito bem, sua média foi : ${media} !`);
} else if (reprovado) {
    alert(`Reprovado, sua média foi : ${media}!`);
} else if (aprovadoDinst) {
    alert(`Aprovado com DISTINÇÃO, sua média foi : ${media}`);
}

