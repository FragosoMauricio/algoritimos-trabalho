/*Faça um programa que peça uma nota, entre zero e dez. Mostre uma mensagem caso o valor seja 
inválido e continue pedindo até que o usuário informe um valor válido.*/

let nota = parseInt(prompt(`Digite a nota entre 0 e 10:`));
let notaValida = nota >= 0 && nota <= 10;

for (i = 0 ; !notaValida; i++) {
    alert(`nota invalida`);
    nota = prompt(`Digite uma nota válida`);
    notaValida = nota >= 0 && nota <= 10;
};

alert(`Programa encerrado com a ${nota}`);