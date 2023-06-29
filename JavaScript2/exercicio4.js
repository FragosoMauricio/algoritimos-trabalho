let letra = prompt(`Digite uma letra:`).toLocaleLowerCase();

let ehLetraDoAlfabeto = letra.charCodeAt(0) >= 97 && letra.charCodeAt(0) <= 122;

if (ehLetraDoAlfabeto) {
    let vogal = letra.charCodeAt(0) == 97 
    || letra.charCodeAt(0) == 101
    || letra.charCodeAt(0) == 111
    || letra.charCodeAt(0) == 105
    || letra.charCodeAt(0) == 117;
    if (vogal){
        alert(`é uma vogal`);
    } else {
        alert(`A letra é uma consoante`);
    }
} else {
    alert(`Não é uma letra do alfabeto`);
}

//alert(letra.charCodeAt(0));
