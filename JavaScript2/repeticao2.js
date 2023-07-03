let soma = 0;

for (let i = 0 ; i < 100 ; i++){
    let numero = parseInt(prompt(`Digite o numero ${i + 1 }: e ZERO encerra`));
    if (numero ==0) {
        break;
    }
    soma = soma + numero;
}

alert(soma);