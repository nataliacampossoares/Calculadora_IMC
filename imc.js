function calculadora(){
    let saida = document.getElementById("resultado")
    let altura = document.getElementById("altura").value 
    let peso = document.getElementById("peso").value 
    let nome = document.getElementById("nome").value
    let imc = peso / (altura * altura)
    if (imc < 18.5) {
        saida.innerHTML = "<p>" + nome + ", seu IMC é " + imc.toFixed(2) + " e você está sofrendo de magreza.<br> Procure algum médico!"
    }

    else if (imc>=18.5 && imc<24.9) {
        saida.innerHTML = "<p>" + nome + ", seu IMC é " + imc.toFixed(2) + " e você está com o peso ideal.<br> Parabéns!"
    }

    else if (imc>=24.9 && imc<29.9) {
        saida.innerHTML = "<p>" + nome + ", seu IMC é " + imc.toFixed(2) + " e você está com sobrepeso.<br> Procure um médico!"
    }

    else if (imc>=29.9 && imc<34.9) {
        saida.innerHTML = "<p>" + nome + ", seu IMC é " + imc.toFixed(2) + " e você está com obesidade grau 1.<br> Procure um médico!"
    }

    else if (imc>=34.9 && imc<39.9) {
        saida.innerHTML = "<p>" + nome + ", seu IMC é " + imc.toFixed(2) + " e você está com obesidade grau 2.<br> Procure um médico!"
    }

    else if (imc>=39.9) {
        saida.innerHTML = "<p>" + nome + ", seu IMC é " + imc.toFixed(2) + " e você está com obesidade grau 3. <br>Procure um médico!"
    }
    
}