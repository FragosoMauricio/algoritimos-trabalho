let num1 = parseFloat(prompt(`Digite um numero:`));
let num2 = parseFloat(prompt(`Digite outro numero:`));
let num3 = parseFloat(prompt(`Digite mais um numero:`));

let auxiliar = 0;

if (num1 >= num2) {
    auxiliar = num1;
    num1 = num2;
    num2 = auxiliar;
}

if (num2 >= num3) {
    auxiliar = num2;
    num2 = num3;
    num3 = auxiliar;
}

if (num1 >= num2) {
    auxiliar = num1;
    num1 = num2;
    num2 = auxiliar;
}

alert(`${num1} < ${num2} < ${num3} `);