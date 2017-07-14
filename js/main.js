/* Holiii acá va tu código también */

 /* validacion mail */
$(document).ready(function(){

$("#sesion").click(function (e) {
if (!/^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/.test($("#email-signup").val())){
	$("#email-signup").append($("#email-signup").val("Ingrese bien sus datos"));
}
 /* validacion contraseña 8 caracteres y solo numeros */
 if (!(/^\d{8}(0-9)*$/.test("#clave-signup").val())) {
	$("#clave-signup").append($("#clave-signup").val("Ingrese bien sus datos"));
 }
else{
  			$("#sesion").attr("href","botones.html");
        localStorage.setItem('email-signup',$("#email-signup").val());
        localStorage.setItem('num-tarjeta',$("#clave-signup").val());
        
  		}
	});