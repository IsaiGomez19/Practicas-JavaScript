(function() {

var fecha=new Date();
document.write(fecha);

console.log("Hora: " + fecha.getHours());
console.log("Minutos: " + fecha.getMinutes());
console.log("Segundos: " + fecha.getSeconds());

console.log("Día de la semana: " + fecha.getDay());
console.log("Día del mes: " + fecha.getDate());
console.log("Mes: " + fecha.getMonth());
console.log("Año: " + fecha.getFullYear());

}())
