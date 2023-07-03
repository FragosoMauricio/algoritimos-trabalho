let nome = prompt(`Digite o seu nome:`);
let senha = prompt(`Digite o seu senha:`);

let teste = nome == senha;

for (i = 0; teste ; i++) {
    alert(`nome nao pode ser igual a senha`);
    nome = prompt(`digite uma senha diferente do nome`);
    teste = nome == senha;
    
}

alert(`Suas credenciais são ${nome} e ${senha}`);
