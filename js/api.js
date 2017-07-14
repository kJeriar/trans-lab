/* Holiii acá va tu código también */

/*llamado de api */

$(document).ready(function(){
	$.ajax({
		url: "http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=20813784",
		type: "GET",
		datatype:"JSON",

	})
.done(function){
	console.log("success");
})
.fail(function){
	console.log("error");
})
	
.always(function){
	console.log("complete");
});
});	