/* Holiii acá va tu código también */

/*llamado de api */

$(document).ready(function(){
	$.ajax({
		url: "http://bip-servicio.herokuapp.com/api/v1/solicitudes.json?bip=20813784",
		type: "GET",
		datatype:"JSON",

	})
	/*si se encuentra info */
	.done(function(resp){
		console.log("se muestra algo");
		console.log(resp);
	})
	/*error */
	.fail(function(){
		console.log("no no no")
	});
})
		