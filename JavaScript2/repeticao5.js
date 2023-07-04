let contador = 0;

do {
    contador++;
    var resposta = prompt (`eu sou bonito?`).toLowerCase().trim();
    if(resposta != `sim` && resposta !=`s`) {
    alert(`Respota errada! ${contador}.`);
    }


} while (resposta != `sim` && resposta !=`s`);

alert (`parabens vc acertou na tentativa ${contador}`)