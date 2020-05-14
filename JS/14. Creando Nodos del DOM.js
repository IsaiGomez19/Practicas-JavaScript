var elemento=document.createElement("h2");
var contenido=document.createTextNode("Subtitulo del sitio");

elemento.appendChild(contenido);

elemento.setAttribute("align", "center");

document.getElementById("subtitulo").appendChild(elemento);
