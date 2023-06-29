let nota = parseInt(prompt(`Digite a primeira nota: `));

let entradaInvalida = isNaN(nota) || nota < 0 || nota > 10;
let aprovado = nota >=7;
let reprovado = nota <3;

if (entradaInvalida) {
    alert(`Entrada inválidada \n Digite novamente.`);
} else if (aprovado) {
    alert(`aprovado!`);
} else if (reprovado) {
    alert(`Reprovado!`);
} else {
    alert(`Quase la! vc está em recuperação`);
    let notaRecuperacao = parseFloat(prompt(`Digite a nota da recuperação.`));
    let mediaRecuperacao = (nota + notaRecuperacao) / 2;
    aprovado = mediaRecuperacao >= 5;
    if (aprovado){
        alert(`aprovado na recuperação`);
    } else {
        alert (`reprovado na recuperação`);
    }
}