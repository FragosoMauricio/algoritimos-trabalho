let saldo = parseFloat(prompt(`Digite o saldo da sua conta: `));
let desp = parseFloat(prompt(`Digite sua despesa com água: `));
let desp2 = parseFloat(prompt(`Digite sua despesa com luz: `));

let despesa = (saldo - desp) - desp2;

alert(`Seu novo saldo é: \n R$ ${despesa} reais`);

