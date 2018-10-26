var columna=Number(prompt("Numero de columna"));
var fila=Number(prompt("Numero de fila"));

function movimiento(columna, fila) {


  if ((columna>=1) && (columna<=6) && (fila>=1) && (fila<=6)) {
  console.log("Bien");
  }

  if ((columna<1) || (columna>6)){
    alert(`Error en columna ${columna}`);
  }

  if ((fila<1) || (fila>6)){
    alert(`Error en fila ${fila}`);
  }
}
movimiento(columna, fila);
