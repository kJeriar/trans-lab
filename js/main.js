/* Holiii acá va tu código también */

   //condicion para llenar datos index
    //Seccion Sign Up obtener Nombre y clave


    //validar clave
    function correo(){
        var emailValue = $("#email-signup").val();
        console.log(emailValue);
        if (!(/^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/).test(emailValue)){
            $("#espacio-error-mail").append('<p class="red">Invalid email</p>');
            $("#email-signup").val("");
            console.log("---");
            return false;
        } else{
            localStorage.setItem('email',emailValue);
            return true;
        }
    }

    //validacion contraseña
    function clave(){
    	var claveValue=$("#clave-signup").val();
    	  console.log(claveValue);

    	if (!(/^\d{8}(0-9)*$/.test("#clave-signup").val())) {
		$("#error-clave").append('<p class="red">Clave Invalida</p>');
            $("#clave-signup").val("");
            console.log("---");
            return false;
        }else{
            localStorage.setItem('clave',claveValue);
            return true;
        }
    }

    //calcular tarifa
