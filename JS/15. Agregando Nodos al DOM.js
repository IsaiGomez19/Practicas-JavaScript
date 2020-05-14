var elemento=document.createElement("li"),
    contenido=document.createTextNode("Nuevo Texto");

elemento.appendChild(contenido);

var padre=document.getElementsByTagName("li")[0].parentNode;
//var padre=document.getElementById("lista");
    primerelemento=document.getElementsByTagName("li")[0];
//padre.appendChild(elemento);
padre.insertBefore(elemento, primerelemento);
