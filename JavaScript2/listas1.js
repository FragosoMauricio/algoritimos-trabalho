/* em Js existe o conceito de vetor, nao listas */

let notas = [[2, 5, 3], [5, 4, 6], [7, 8, 9]];

for (let i = 0; i < notas.length; i++){
    //alert(notas[i]);

    for (let j = 0; j < notas[i].length; j++){
        alert(notas[i][j]);
    }
}

