let num = parseInt(prompt(`Digite a primeira nota: `)); //solicita informação
let num2 = parseInt(prompt(`Digite a segunda nota: `));
let num3 = parseInt(prompt(`Digite a terceira nota: `));
let num4 = parseInt(prompt(`Digite a quarta nota: `));
let Bim = parseInt(prompt(`Digite quantidade de Bimestres: `));

//num = parseInt(num);
//num2 = parseInt(num2);

let media = (num + num2 + num3 + num4) / Bim;

//semantica do código.
let entradaInvalida = isNaN(num);
let aprovado = media >= 7;
let reprovado = media < 3;
//semantica do código. É uma boa prática.

if (entradaInvalida) {
    alert(`Entrada inválida \n Digite novamente`);
}
else if (aprovado) {
    alert(`Aprovado! parabéns.`);
} else if (reprovado) {
    alert(`Reprovado!`);
} else {
    alert (`recuperação`);
}

//let soma = num + num2;

//alert(`A sua média anual é:  ${media}`); //mostra informação