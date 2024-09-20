function resolveCalculations() {
    // Obter o valor inserido pelo usuário
    const value = parseFloat(document.getElementById("value").value);
    
    // Obter o parâmetro selecionado
    const parameter = parseFloat(document.getElementById("parameter").value);
  
    let result;
  
    // Verificar o parâmetro e realizar o cálculo
    if(parameter == 1){
        result = value * 0.85;    
    } else if(parameter == 2) {
        result = value * 0.8;   
    } else if(parameter == 3) {     
        result = value * 0.85;
    } else if(parameter == 4){
        result = value * 0.68
    } else if(parameter == 5){
        result = value * 0.7225
    } else if(parameter == 6){
        result = value * 0.68
    } else {
        result = "ERROR! Invalid Operation!";
    }

    // Exibir o resultado na tela
    document.getElementById("result").textContent = result;
  }
  