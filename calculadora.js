function calcularImc(){
    let elemento = document.getElementById("devolutiva");

    //Entrada de dados
    let pesoOriginal = parseFloat(document.getElementById("peso").value);
    let altura = parseFloat(document.getElementById("altura").value);

    //Processamento
    let valorImc = pesoOriginal / (altura * altura);

    console.log("Oláa, o valor é: " + valorImc);

    //Saída
    document.getElementById("resultado").textContent = "IMC: " + valorImc;

    if (valorImc < 18.5) {
        document.getElementById("devolutiva").textContent = "ABAIXO DO PESO IDEAL";
        elemento.className = "alerta";
    } else if (valorImc <= 24.9) {
        document.getElementById("devolutiva").textContent = "Parabéns, PESO IDEIAL";
        elemento.className = "ideal";    
    } else if (valorImc > 24.9) {
        document.getElementById("devolutiva").textContent = "ACIMA DO PESO IDEAL";
        elemento.className = "alerta";
    }

    if (isNaN(pesoOriginal) || peso <= 0 || isNaN(altura) || altura <= 0) 
    {
        let elemento = document.getElementById("devolutiva");
        elemento.textContent = "Por favor, insira valores válidos!";
        elemento.className = "alerta";
        return;
    }


    document.getElementById("medico").textContent = "Para mais informações consulte seu médico de confiança.";


}