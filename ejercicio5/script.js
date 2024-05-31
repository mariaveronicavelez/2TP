document.getElementById("clickMe").onclick = prueba;

function prueba() {
  var ladoA = parseFloat(document.getElementById("ladoA").value);
  var ladoB = parseFloat(document.getElementById("ladoB").value);
  var ladoC = parseFloat(document.getElementById("ladoC").value);

  if (ladoA <= 0 || ladoB <= 0 || ladoC <= 0) {
    alert("Error: Las dimensiones deben ser números positivos.");
    return; // "return" en lugar de "devolver"
  }

  var área = (((ladoA - ladoC) * ladoB / 2) + (ladoB * ladoC));
  alert("El área es de " + área.toFixed(2) + " metros cuadrados");
}
