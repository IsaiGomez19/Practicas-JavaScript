(function() {
  contador=0;

var saludo=function() {
    contador++;
     console.log(contador);


     if(contador===5){
       clearInterval(intervalo);
     }
};

var intervalo=setInterval(saludo, 1000);

}())



/*(function() {
var contador=0;

var saludo=function() {
     contador++;
     console.log(contador);

     setTimeout(saludo, 3000)
};

saludo();

//var intervalo=setInterval(saludo, 1000);

}())*/
