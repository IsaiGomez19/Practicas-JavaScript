//var PrimerElemento=document.getElementById("primero");
//PrimerElemento.innerHTML="Nuevo Texto  <i class='H'>Holaaaaaaaaaaaaaaaa</i>"

var elemento=document.createElement("li");
var contenido=document.createTextNode("Nuevo Texto");

elemento.appendChild(contenido);

var padre=document.getElementsByTagName("li")[0].parentNode,
    referencia=document.getElementsByTagName("li")[0];
padre.removeChild(referencia);

//padre.replaceChild(elemento, referencia);
