var calculadora={

    init:function(){
        
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

        
            document.getElementById('0').addEventListener("mousedown",function(){
                document.getElementById('0').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('0').addEventListener("mouseup",function(){
                document.getElementById('0').setAttribute("style","transform:scale(1,1)");
            });    
        
            document.getElementById('1').addEventListener("mousedown",function(){
                document.getElementById('1').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('1').addEventListener("mouseup",function(){
                document.getElementById('1').setAttribute("style","transform:scale(1,1)");
            });    
    
            document.getElementById('2').addEventListener("mousedown",function(){
                document.getElementById('2').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('2').addEventListener("mouseup",function(){
                document.getElementById('2').setAttribute("style","transform:scale(1,1)");
            });    
        
            document.getElementById('3').addEventListener("mousedown",function(){
                document.getElementById('3').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('3').addEventListener("mouseup",function(){
                document.getElementById('3').setAttribute("style","transform:scale(1,1)");
            });       
        
            document.getElementById('4').addEventListener("mousedown",function(){
                document.getElementById('4').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('4').addEventListener("mouseup",function(){
                document.getElementById('4').setAttribute("style","transform:scale(1,1)");
            });        
    
            document.getElementById('5').addEventListener("mousedown",function(){
                document.getElementById('5').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('5').addEventListener("mouseup",function(){
                document.getElementById('5').setAttribute("style","transform:scale(1,1)");
         
            });        
            document.getElementById('6').addEventListener("mousedown",function(){
                document.getElementById('6').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('6').addEventListener("mouseup",function(){
                document.getElementById('6').setAttribute("style","transform:scale(1,1)");
            });            
    
            document.getElementById('7').addEventListener("mousedown",function(){
                document.getElementById('7').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('7').addEventListener("mouseup",function(){
                document.getElementById('7').setAttribute("style","transform:scale(1,1)");
            });        
    
            document.getElementById('8').addEventListener("mousedown",function(){
                document.getElementById('8').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('8').addEventListener("mouseup",function(){
                document.getElementById('8').setAttribute("style","transform:scale(1,1)");
            });        
    
            document.getElementById('9').addEventListener("mousedown",function(){
                document.getElementById('9').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('9').addEventListener("mouseup",function(){
                document.getElementById('9').setAttribute("style","transform:scale(1,1)");
            });        
    
            document.getElementById('on').addEventListener("mousedown",function(){
                document.getElementById('on').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('on').addEventListener("mouseup",function(){
                document.getElementById('on').setAttribute("style","transform:scale(1,1)");
            });        
        
            document.getElementById('mas').addEventListener("mousedown",function(){
                document.getElementById('mas').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('mas').addEventListener("mouseup",function(){
                document.getElementById('mas').setAttribute("style","transform:scale(1,1)");
            });       
    
            document.getElementById('igual').addEventListener("mousedown",function(){
                document.getElementById('igual').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('igual').addEventListener("mouseup",function(){
                document.getElementById('igual').setAttribute("style","transform:scale(1,1)");
            });   
        
            document.getElementById('por').addEventListener("mousedown",function(){
                document.getElementById('por').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('por').addEventListener("mouseup",function(){
                document.getElementById('por').setAttribute("style","transform:scale(1,1)");
            });  
    
            document.getElementById('dividido').addEventListener("mousedown",function(){
                document.getElementById('dividido').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('dividido').addEventListener("mouseup",function(){
                document.getElementById('dividido').setAttribute("style","transform:scale(1,1)");
            });  
    
            document.getElementById('menos').addEventListener("mousedown",function(){
                document.getElementById('menos').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('menos').addEventListener("mouseup",function(){
                document.getElementById('menos').setAttribute("style","transform:scale(1,1)");
            });      
        
            document.getElementById('punto').addEventListener("mousedown",function(){
                document.getElementById('punto').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('punto').addEventListener("mouseup",function(){
                document.getElementById('punto').setAttribute("style","transform:scale(1,1)");
            });   
    
            document.getElementById('sign').addEventListener("mousedown",function(){
                document.getElementById('sign').setAttribute("style","transform:scale(0.85,0.95)");
            });
        
            document.getElementById('sign').addEventListener("mouseup",function(){
                document.getElementById('sign').setAttribute("style","transform:scale(1,1)");
            });      
            
            

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
    
    }
}

calculadora.init()
   

    


