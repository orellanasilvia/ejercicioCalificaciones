let prom, n1, n2, n3: number;
let nombreAlumno = prompt("Ingrese nombre del alumno:");

while (nombreAlumno !== "") {
  n1 = Number(prompt("ingrese calificacion de Prectica"));
  console.log("Calificacion Practica :" + n1);
  n2 = Number(prompt("ingrese calificacion de Problemas"));
  console.log("Calificacion Problema :" + n2);
  n3 = Number(prompt("ingrese calificacion de Teorica"));
  console.log("Calificacion Teorica :" + n3);

  if (n1 > -1 && n2 > -1 && n3 > -1 && n1 <= 10 && n2 <= 10 && n3 <= 10) {
    prom = n1 * 0.1 + n2 * 0.5 + n3 * 0.4;
    console.log("Nota final es :" + prom);
  } else {
    console.log(" error , ud. ingreso un valor invalido");
  }
  nombreAlumno = prompt("Ingrese nombre del alumno:");
}
