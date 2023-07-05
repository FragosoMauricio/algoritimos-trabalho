/*Faça um programa que leia um nome de usuário e a sua senha e não aceite a senha igual ao nome do usuário, 
mostrando uma mensagem de erro e voltando a pedir as informações.*/

let nome = prompt(`Digite o seu nome:`);
let senha = prompt(`Digite o seu senha:`);

let teste = nome == senha;

for (i = 0; teste ; i++) {
    alert(`nome nao pode ser igual a senha`);
    senha = prompt(`digite uma senha diferente do nome`);
    teste = nome == senha;
    
}

alert(`Suas credenciais são ${nome} e ${senha}`);
