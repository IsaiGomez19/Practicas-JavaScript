/*var VariableGlobal="Esta es global";

var MiFuncion=function(){
  //var VariableLocal="Esta es local";
  alert(VariableLocal);


  var FuncionLocal=function() {
    var VariableLocal="variable local, dentro de funcion local";
    alert(VariableLocal);
  }
  FuncionLocal();

//  alert(VariableGlobal);

//  VariableGlobal="Global Modificada";
//  alert(VariableGlobal);
}
MiFuncion();

//alert(VariableGlobal);
*/

(function(){
  var VariableGlobal="Esta es global";

  var MiFuncion=function(){
    //var VariableLocal="Esta es local";
    //alert(VariableLocal);


    var FuncionLocal=function() {
      var VariableLocal="variable local, dentro de funcion local";
      alert(VariableLocal);
    }
    FuncionLocal();

  //  alert(VariableGlobal);

  //  VariableGlobal="Global Modificada";
  //  alert(VariableGlobal);
  }
  MiFuncion();

  //alert(VariableGlobal);

}())
