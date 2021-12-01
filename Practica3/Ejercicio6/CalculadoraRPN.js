class CalculadoraRPN {

    constructor() {
		this.pila = new Array();
        this.numero = "";
		this.error = false;
		
		document.addEventListener('keydown', (event) => {
            const key = event.key;
			this.mostrarNumero();
            if (key !== ' ') { 
                if (Number.isInteger(Number(key)))
                    this.botonNumber(key);
                else {
                    if (key === '.')
                        this.botonDecimal();
                    else if (key === '+')
                        this.botonSumar();
                    else if (key === '-')
                        this.botonRestar();
                    else if (key === '*')
                        this.botonMult();
                    else if (key === '/')
                        this.botonDiv();
                    else if (key === 'c')
                        this.botonBorrar();
                    else if (key === 'Enter')
                        this.botonIgual();
					else if (key === '^')
                        this.botonElevar();
					else if (key === 'v')
                        this.botonRaiz();
					else if (key === 'l')
                        this.botonLog();
					else if (key === 's')
                        this.botonSen();
					else if (key === 'o')
                        this.botonCos();
					else if (key === 'm')
                        this.botonMod();
					else if (key === '!')
                        this.botonFactorial();
					else if (key === 'p')
                        this.botonPi();
					else if (key === 't')
                        this.botonTan();
					else if (key === 'e')
                        this.botonE();
					else if (key === 'Backspace')
                        this.botonAtras();
                }
            }
        });
    }

	del(){ 
        var aux = this.pila.pop()/1; //Divide entre uno , para facilitar la inferencia de tipos 
        this.mostrarPila(); 
        return aux; 
    }

    botonDiv() {
		var a =  this.del(); 
        var b =  this.del(); 
        var resultado = (b / a);
		this.calculo(resultado); 
		
    }

    botonMult() {
		var a =  this.del(); 
        var b =  this.del(); 
        var resultado = (a * b); 
        this.calculo(resultado);	
    }

    botonRestar() {
		var a =  this.del(); 
        var b =  this.del(); 
        var resultado = (b - a); 
        this.calculo(resultado);	
    }

    botonSumar() {
		var a =  this.del(); 
        var b =  this.del(); 
        var resultado = (a + b); 
        this.calculo(resultado);
    }

	calculo(n){
		if (this.isNumber(n)){
			this.pila.push(n);
			this.mostrarPila(); 
		}
		else
			this.error = true;
		this.botonBorrar()
	}
	
    botonDecimal() {
		this.numero += ".";
        this.mostrarNumero(); 
		
    }

    botonLimpiar() {
        this.numero = "";
		this.mostrarNumero(); 
		var counter = this.pila.length;
		for (var i=0; i < counter; i++){
			this.del();
		}
    }
	
	botonBorrar(){  
		if (this.error)
			this.numero = "Syntax Error";
		else
			this.numero = ""; 
		this.error = false;
        this.mostrarNumero();
		this.numero = "";		
    }
	
	botonAtras() {
        //Reset de los operandos que usa la calculadora
		var result = "";
		for (var i = 0; i < document.getElementById("valor").value.length - 1; i++){
			result += document.getElementById("valor").value[i];
		}
		if (result == "") 
			result = "";
		this.numero = result;
		this.mostrarNumero();
		
    }
	
	mostrarPila(){ 
        var cadenaPila = "<ul>"; 
        for (var i in this.pila){
			if (this.pila[i] + "" != "NaN"){
				cadenaPila += "<li>Pila[" + i + "] = " + this.pila[i] + "</li>";
			}else{
				this.error = true;
			}
			
        } 
        cadenaPila += "</ul>"
        document.getElementById("pila").innerHTML = cadenaPila;              
    }

	botonIgual(){ 
		if (document.getElementById("valor").value != ""){
			this.pila.push(document.getElementById("valor").value);
			this.mostrarPila(); 
			this.botonBorrar();  
		}else{
			this.error = true;
			this.botonBorrar();
		}
    }

	botonNumber(number){
		this.numero += "" + number; 
		this.mostrarNumero();   
		
	}

    isNumber(str) {
        //Que la cadena empiece y acabe por un numero comprobar la expresion regular para numeros negativos
        return /^-?\d+\.?\d*$/.test(str);
    }
	
	mostrarNumero(){  
        document.getElementById("valor").value = this.numero;
    }
	
	botonSen(){
        var a = this.del(); 
        var resultado = Math.sin(a);
        this.calculo(resultado);
    }
	
	botonCos(){
        var a = this.del(); 
        var resultado = Math.cos(a);
        this.calculo(resultado); 
    }
	
	botonTan(){
        var a = this.del(); 
        var resultado = Math.tan(a);
        this.calculo(resultado);
    }
	
	botonArcoseno(){
        var a = this.del(); 
        var resultado = Math.asinh(a);
		this.calculo(resultado);  
    }

    botonArcocoseno(){
        var a = this.del(); 
        var resultado = Math.acosh(a);
        this.calculo(resultado);
    }


    botonArcotangente(){
        var a = this.del(); 
        var resultado = Math.atan(a);
        this.calculo(resultado);
    }
	
	botonElevarMenos1(){
		var a = this.del(); 
        var resultado = a**(-1);
        this.calculo(resultado);
	}
	
	botonLog(){
		var a = this.del(); 
        var resultado = Math.log(a);
        this.calculo(resultado);
	}
	
	botonPi(){
		this.numero += Math.PI;
        this.mostrarNumero(); 
	}
	
	botonE(){
        this.numero += Math.E;
        this.mostrarNumero(); 
    }

	botonRaiz(){
		var a = this.del(); 
        var resultado = Math.sqrt(a);
        this.calculo(resultado);
	}
	
	botonExp(){
		var a = this.del(); 
        var resultado = Math.exp(a);
        this.calculo(resultado);
	}
	
	botonMod(){
		var a = this.del(); 
		var b = this.del(); 
        var resultado = b%a;
        this.calculo(resultado);
	}
	
	botonElevar(){
		var a = this.del(); 
		var b = this.del(); 
        var resultado = b**a;
		this.calculo(resultado);
	}
	
	botonElevar2(){
		var a = this.del(); 
        var resultado = a**2;
        this.calculo(resultado);
	}
	
	botonBase10(){
		var a = this.del(); 
        var resultado = 10**a;
        this.calculo(resultado);
	}
	
	botonMedia(){
		var result = 0;
		var counter = this.pila.length;
		for (var i=0; i < counter; i++){
			result += this.del();
		}
		this.calculo(result/counter);
	}
	
	botonDesvia(){
		var result = 0;
		var counter = this.pila.length;
		for (var i=0; i < counter; i++){
			result += Number(this.pila[i]);
		}
		var media = result/counter;
		result = 0;
		for (var j=0; j < counter; j++){
			result += Number((this.del() - media)**2);
		}
		this.calculo(Math.sqrt(result/counter));
	}
	
	botonModa(){
		this.pila.sort();
		var result = this.pila[0];
		var rep = 1;
		var repMax = 1;
		var counter = this.pila.length;
		for (var i=1; i < counter; i++){
			if (this.pila[i] == this.pila[i-1])
				rep += 1;
			else if (rep > repMax){
				repMax = rep;
				result =this.pila[i-1];
				rep = 1;
			}
		}
		
		if (rep > repMax)
			result = this.pila[counter-1];

		for (var i=0; i < counter; i++){
			this.del();
		}
		this.calculo(result);
	}

	
	botonMediana(){
		this.pila.sort();
		
		var counter = this.pila.length;
		
		var result = 0;
		var medio = Math.trunc(counter/2)
		if (counter%2 == 1)
			result =  Number(this.pila[medio]);
		else{
			result = ( Number(this.pila[medio-1]) +  Number(this.pila[medio]))/2;
		}
		for (var i=0; i < counter; i++){
			this.del();
		}
		this.calculo(result);
	}
	
}

var calculadora = new CalculadoraRPN();