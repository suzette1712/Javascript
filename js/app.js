

	var total=""; // String
	var total_final=0.0; // Numero
	
	
	function limpiar_pantalla(){
        pantalla.innerHTML="";
	}

	function reset(){
    	limpiar_pantalla();
    	total="";
    	total_final=0.0;
    	escribir_pantalla(0);
	}

	var pantalla = document.querySelector(".pantalla");
	function escribir_pantalla(digito) {     										
	   pantalla.insertAdjacentHTML('beforeend', '<span id="display">'+digito+'</div>');
    }


	function operar(){
    	limpiar_pantalla();
    	total_final = eval(total);
    	escribir_pantalla(total_final);
    	total = parseInt(total_final);
	}


	function cantidad_pantalla(){
    	c = document.querySelectorAll("#display").length;
    	return c;
	}


        var num = document.getElementsByClassName("tecla"); 
        
		for(var i = 0; i < num.length; i++) {
    		num[i].addEventListener("click", function() {

        	if(this.id == "mas"){
            	escribir_pantalla("+");
            	total += "+";

        	}else if(this.id == "menos" ){
            	escribir_pantalla("-");
            	total += "-";

        	}else if(this.id == "por"){
            	escribir_pantalla("*");
            	total += "*";

        	}else if(this.id == "dividido"){
            	escribir_pantalla("/");
            	total += "/";

        	}else if(this.id == "punto"){
            
           		var digitos_pantalla = document.getElementById("display");
            	for(i=0; i < digitos_pantalla.lenght;  i++){
                
            } 

        	}else if(this.id == "on"){
            	reset();


        	}else if(this.id == "igual"){

            	operar();

        	}else{ // Todos los dígitos

            	var cantidad = cantidad_pantalla();
            	var primer_digito = document.getElementById("display").innerHTML;
            
            
            if (this.id == "0"){
                
                if (cantidad == 1 && primer_digito == "0"){
                    console.log("No debo hacer nada");
                }else{
                    escribir_pantalla(this.id);
                    total += this.id;
                }
                
            }else{
                
                if (cantidad == 1 && primer_digito == "0"){
                    limpiar_pantalla();
                    escribir_pantalla(this.id);
                    total += this.id;
                }else{
                    escribir_pantalla(this.id);
                    total += this.id;
                }                
            	}
        	}


   		 });
            
	}

   

    


