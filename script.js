function notas(){
        
    let nota1tri;
    let nota2tri;
    let resultado;

    nota1tri = Number(prompt("Digite a nota do 1° trimestre"));
    nota2tri = Number(prompt("Digite a nota do 2° trimestre"));

    resultado = 180-(nota1tri+nota2tri);

    if(resultado <= 0){
        alert("Parabéns! Você já foi aprovado por nota!!!");
    } else {
        alert("Poxa, você precisa de " + resultado + " para ser aprovado");
    }    
}

