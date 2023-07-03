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

    /*
  
  for (;;) {
    idade = Number(prompt("Digite a idade (entre 0 e 150):"));
    if (idade >= 0 && idade <= 150) {
      break;
    }
  }
  
  for (;;) {
    salario = Number(prompt("Digite o salário (maior que zero):"));
    if (salario > 0) {
      break;
    }
  }
  
  for (;;) {
    sexo = prompt("Digite o sexo ('f' ou 'm'):");
    if (sexo === 'f' || sexo === 'm') {
      break;
    }
  }
  
  for (;;) {
    estadoCivil = prompt("Digite o estado civil ('s', 'c', 'v', 'd'):");
    if (estadoCivil === 's' || estadoCivil === 'c' || estadoCivil === 'v' || estadoCivil === 'd') {
      break;
    }
  }

  alert(`${nome}, ${idade}, ${salario}, ${sexo}, ${estadoCivil}:`);*/