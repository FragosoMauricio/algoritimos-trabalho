/*Altere o programa anterior permitindo ao usuário informar as populações e as taxas de
 crescimento iniciais. Valide a entrada e permita repetir a operação*/


let populacaoA = parseInt(prompt(`Digite a população do primeiro Pais:`));
let populacaoB = parseInt(prompt(`Digite a população do segundo Pais:`));
let taxaCrescimentoA = parseFloat(prompt(`Digite a taxa de crescimento primeiro Pais:`));
let taxaCrescimentoB = parseFloat(prompt(`Digite a taxa de crescimento segundo Pais:`));
let anos = 0;

while (populacaoA < populacaoB) {
  populacaoA += populacaoA * taxaCrescimentoA;
  populacaoB += populacaoB * taxaCrescimentoB;
  anos++;
}

console.log(`Serão necessários ${anos} anos para a população do país A ultrapassar ou igualar a população do país B.`);
