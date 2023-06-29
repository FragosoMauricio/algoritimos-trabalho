let num1 = parseFloat(prompt(`Digite um numero:`));
let num2 = parseFloat(prompt(`Digite outro numero:`));
let num3 = parseFloat(prompt(`Digite mais um numero:`));

let maior1 = num1 > num2 && num1 > num3;
let maior2 = num2 > num1 && num2 > num3;
let maior3 = num3 > num1 && num3 > num2;

let menor1 = num1 < num2 && num1 < num3;
let menor2 = num2 < num1 && num2 < num3;
let menor3 = num3 < num1 && num3 < num2;

if (maior1 && menor1) {
    alert(`O numero, ${num1} , é o numero mais alto , e ${num1} , é o numero mais baixo.`);
} else if (maior2 && menor2) {
    alert(`O numero. ${num2} , é o numero mais alto, e ${num2} , é o numero mais baixo.`);
} else if (maior3 && menor3) {
    alert(`O numero, ${num3} , é o numero mais alto, e ${num3} , é o numero mais baixo.`);
} else {
    alert(`O numero esta repetido`);
}