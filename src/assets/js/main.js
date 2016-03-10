$(document).ready(function(){
	//Example
	loadCSS( "http://fonts.googleapis.com/css?family=Open+Sans:300italic,400italic,600italic,700italic,800italic,400,700,300,600,800" );

	new Imager({ availableWidths: [320, 640, 1024] });

	$.slidebars();	

	$('header .menu li a').smoothScroll('900');

	
	//$('#video').css('height', $(window).height());

	//altura del video
	var alt_video = $('#video').height(); 

	//tomamos la altura del video y la asignamos a section .home
	$('.home').css('height', alt_video);

	//Validation Contact
	$("#form_contact").validate({
		  rules: {
		    name:{
		    	required: true
		    },
		    phone:{
		    	required: true
		    },		    
		    email: {
		      required: true,
		      email: true
		    },
		    mensaje: {
		    	required: true
		    } 
		  },
		  messages: {
		    name: {
		    	required: "Debe ingresar su Nombre"
		    },
		    phone: {
		    	required: "Debe ingresar su Número de Teléfono"
		    },		    
		    email: {
		      required: "Debe ingresar su Email",
		      email: "Debe ingresar una dirección válida"
		    },	 
			mensaje: {
			  	required: "Debe ingresar su Mensaje."
			  }
			}
	});
	$('#form_contact button').click( function() {
		if ($("#form_contact").valid()) {

			var name = $("input#name").val();
			var phone = $("input#phone").val();			
			var email = $("input#email").val();
			var mensaje = $("textarea#mensaje").val();			
			$.ajax({
	            type: "POST",
	            url: 'bin/send_contact.php',
	            data:  {name_c: name, phone_c: phone, email_c: email, comment_c: mensaje},
	            beforeSend: function () {
				$('#form_contact').hide();
				// $('.loading_form ').fadeIn();
				},
	            success: function(){
	            	$("input#name").val('');
	            	$("input#phone").val('');					
					$("input#email").val('');
					$("textarea#mensaje").val('');
					// $('.loading_form ').fadeOut();
	            	$('.result-contact').html('Su mensaje ha sido envíado.').fadeIn();
	            },
	            error: function(){
	            	$('.loading_form ').fadeOut();
	            	$('.result-contact').html('No se pudo enviar. Intente nuevamente.').fadeIn();
	            }
	        });
	        return false;
		}
	});

});

