/*Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd'; */

let nome = prompt (`Digite o seu nome:(maior que 3 caracteres):`);
let idade //= parseFloat(prompt(`Digite a idade:`));
let salario //= parseFloat(prompt(`Digite o salario:`));
let sexo //= prompt(`Digite o sexo:`);
let civil //= prompt(`estado civil`);

for (nome = 0; nome < 1; nome++)
    alert(`Nome inválido`);
    nome = prompt (`Digite o seu nome:(maior que 3 caracteres):`);
    nome = (nome > 3);

