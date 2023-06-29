let valor = parseFloat(prompt(`digite um valor:`));

let positivo = valor > 0;
let negativo = valor < 0;
let nulo = 0;

if (positivo) {
    alert(`${valor}  Este numero é positivo.`);   
} else if(negativo){
    alert (`${valor}  Este valor é negativo;`);
} else {
    alert (`Este valor é nulo`);
}