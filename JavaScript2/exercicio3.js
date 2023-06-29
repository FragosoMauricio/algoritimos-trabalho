let sexo = prompt(`Digite o sexo F ou M.`);

if (sexo === "f" || sexo === "F"){
    alert(`F-Feminino`);
} else if(sexo === "m" || sexo === "M"){
    alert(`M-Masculino`);
} else {
    alert(`Sexo Inváido`);
}