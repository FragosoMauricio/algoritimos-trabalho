/*Faça um programa que leia e valide as seguintes informações:
Nome: maior que 3 caracteres;
Idade: entre 0 e 150;
Salário: maior que zero;
Sexo: 'f' ou 'm';
Estado Civil: 's', 'c', 'v', 'd'; */



let nome = prompt (`Digite o seu nome:(maior que 3 caracteres):`);
while (nome.length <= 3) {
    nome = prompt("Nome inválido! O nome deve ter mais de 3 caracteres. Digite novamente:");
}

let idade = parseFloat(prompt(`Digite a idade:`));
while (isNaN(idade) || idade < 0 || idade > 150) {
    idade = parseFloat(prompt(`Idade inválida digite entre 0 à 150 anos.`));
}

let salario = parseFloat(prompt(`Digite o salario:`));
while (isNaN(salario) || salario < 0) {
    salario = parseFloat(prompt(`Digite o salario maior que zero:`));
}

let sexo = prompt(`Digite o sexo:`).toLowerCase();
while (sexo !== `f` && sexo !== `m`){
    sexo = prompt(`Digite seu sexo novamente F ou M`).toLowerCase();
}

let civil = prompt(`estado civil`);
 while (civil !== 's' && civil !== 'c' && civil !== 'v' && civil !== 'd'){
     civil = prompt(`Digite entre: 's', 'c', 'v', 'd'`)
}

/*for (nome = 0; nome <= 3; nome++)
alert(`Nome inválido`);
    nome = prompt (`Digite o seu nome:(maior que 3 caracteres):`);
    nome = (nome > 3);*/
