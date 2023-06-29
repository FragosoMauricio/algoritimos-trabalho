let num1 = parseFloat(prompt(`Digite um numero:`));
let num2 = parseFloat(prompt(`Digite outro numero:`));

let maior1 = num1 > num2;
let maior2 = num2 > num1;

if (maior1) {
    alert(`O numero maior é, ${num1} e o manor é, ${num2}`);
} else if (maior2){
    alert(`o numero maior é: ${num2} e o menor é. ${num1}`);
} else {
    alert (`os numeros são iguais.`);
}