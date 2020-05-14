(function() {

   var formulario=document.getElementsByName("formulario")[0],
       elementos=formulario.elements,
       boton=document.getElementById("btn");

   var ValidarNombre=function(e) {
        if(formulario.nombre.value==0) {
          alert("Completa el campo Nombre");
          e.preventDefault();
        }
   };

   var ValidarRadio=function(e) {
        if(formulario.sexo[0].checked==true || formulario.sexo[1].checked==true) {
        } else{
             alert("Completa el campo Sexo");
             e.preventDefault();
        }
   };

   var ValidarCheckbox=function(e) {
        if(formulario.terminos.checked==false){
            alert("Debe aceptar los Terminos y Condiciones");
            e.preventDefault();
        }


   };


   var Validar=function(e) {
        ValidarNombre(e);
        ValidarRadio(e);
        ValidarCheckbox(e);
   };

   formulario.addEventListener("submit", Validar);

}())
