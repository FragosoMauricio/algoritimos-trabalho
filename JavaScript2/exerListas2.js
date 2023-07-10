//Faça um Programa que leia um vetor de 10 números reais e mostre-os na ordem inversa.

// Criando um vetor com os números de 1 até 10
var vetor = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

// String para armazenar os números na ordem inversa
let numerosInversos = "Os números na ordem inversa são:\n";

// Construindo a string dos números na ordem inversa
for (let i = vetor.length - 1; i >= 0; i--) {
    numerosInversos += vetor[i] + "\n";
}

// Exibindo os números na ordem inversa usando alert
alert(numerosInversos);