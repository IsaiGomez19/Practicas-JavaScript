/*function saludo() {
  document.write("Que tal");
}
saludo();*/


/*function saludo(nombre) {
  document.write("Que tal " + nombre);
}
saludo("Arturo");*/


/*var suma=function suma(n1, n2) {
  var numero1=n1;
  var numero2=n2;

  return n1 + n2;
}
 document.write("El resultado es: " + suma(15, 10));
 document.write("<br>");
 document.write("<br>");
 document.write("<br>");
 document.write("El resultado es: " + suma(29, 3));*/


function NumeroMayor(valor1, valor2) {
   if (valor1 > valor2) {
     return valor1;
   }
   else {
     return valor2;
   }
}
document.write("El numero mayor es: " + NumeroMayor(45, 17));
