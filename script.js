function calcular(operador) {
  const numberOne = parseFloat(document.getElementById("numero1").value);
  const numberTwo = parseFloat(document.getElementById("numero2").value);
  const resultado = document.getElementById("resultado");

  if (isNaN(numberOne) || isNaN(numberTwo)) {
    resultado.value = "Error: Ingresa números";
    return;
  }

  switch (operador) {
    case "+":
      resultado.value = numberOne + numberTwo;
      alert("El resultado de la suma es: " + resultado.value);
      break;
    case "-":
      resultado.value = numberOne - numberTwo;
      break;
    case "*":
      resultado.value = numberOne * numberTwo;
      break;
    case "/":
      if (numberTwo != 0) {
        resultado.value = numberOne / numberTwo;
      } else {
        resultado.value = "Error: División por cero";
      }
      break;
    default:
      resultado.value = "Error";
      break;
  }
}
