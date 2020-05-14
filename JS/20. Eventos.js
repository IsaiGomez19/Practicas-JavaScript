(function() {
  var saludo=function(){
    alert("HOLA");
  };

  var boton=document.getElementById("boton");
  boton.addEventListener("click", saludo);
}())


/*(function() {
  var saludo=function(){
    console.log("focus");
  };

  var input=document.getElementById("input");
  input.addEventListener("focus", saludo);
}())*/



/*(function() {
  var saludo=function(){
    console.log("blur");
  };

  var input=document.getElementById("input");
  input.addEventListener("blur", saludo);
}())*/



/*(function() {
  var saludo=function(){
    console.log("change");
  };

  var input=document.getElementById("input");
  input.addEventListener("change", saludo);
}())*/



/*(function() {
  var saludo=function(){
    console.log("HOLA");
  };

  var saludo2=function(){
    console.log("HOLA 2");
  };

  var boton=document.getElementById("boton");
  boton.addEventListener("click", saludo);
  boton.addEventListener("click", saludo2);
  boton.removeEventListener("click", saludo);

}())*/



/*(function() {
  var saludo=function(e){
    console.log("Neeeeeel jsjs");
    e.preventDefault();
  };

  var boton=document.getElementById("boton");
  boton.addEventListener("click", saludo);

}())*/
