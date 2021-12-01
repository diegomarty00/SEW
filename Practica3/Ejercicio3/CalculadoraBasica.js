class CalculadoraBasica {

    constructor() {
        this.memoria = 0;
		this.evaluado = false;
		
		document.addEventListener('keydown', (event) => {
            const key = event.key;

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
                    else if (key.toUpperCase() === 'C')
                        this.botonLimpiar();
                    else if (key === 'Enter')
                        this.botonIgual();
                }
            }
        });
    }

	
   botonMRC() {
        //Muestra lo que hay en memoria
		if(document.getElementById("valor").value != this.memoria+"")
			document.getElementById("valor").value = this.memoria;
		else {
		//Lo borra si lo miras dos veces
			this.memoria = 0;
		}
		this.evaluado = true;
    }

    botonMMinus() {
		this.sustituirPantalla();

        var valorPantalla = document.getElementById("valor").value;
		
        if (this.isNumber(valorPantalla)) 
            this.memoria = parseFloat(this.memoria) - parseFloat(valorPantalla);    
        else
            document.getElementById("valor").value = "Syntax Error";
		
    }

    botonMPlus() {

		this.sustituirPantalla();
	
        var valorPantalla = document.getElementById("valor").value;

        if (this.isNumber(valorPantalla)) 
            this.memoria = parseFloat(this.memoria) + parseFloat(valorPantalla);
        else
            document.getElementById("valor").value = "Syntax Error";
		
    }

    botonDiv() {
		this.sustituirPantalla();
		if (this.evaluado){
			document.getElementById("operacion").value += (document.getElementById("valor").value + " / ");
			document.getElementById("valor").value = "0";
		}
		this.evaluado = false;
    }

    botonMult() {
		this.sustituirPantalla();
		if (this.evaluado){
			document.getElementById("operacion").value += (document.getElementById("valor").value + " * ");
			document.getElementById("valor").value = "0";
		}
		this.evaluado = false;		
    }

    botonRestar() {
		this.sustituirPantalla();
		if (this.evaluado){
			document.getElementById("operacion").value += (document.getElementById("valor").value + " - ");
			document.getElementById("valor").value = "0";
		}
		this.evaluado = false;
    }

    botonSumar() {
		this.sustituirPantalla();
		if (this.evaluado){
			document.getElementById("operacion").value += (document.getElementById("valor").value + " + ");
			document.getElementById("valor").value = "0";
		}
		this.evaluado = false;
    }

    botonDecimal() {
        if (document.getElementById("valor").value == "")
            document.getElementById("valor").value = 0;
        document.getElementById("valor").value += ".";
		this.evaluado = false;
    }

    botonLimpiar() {
        document.getElementById("valor").value = "0";
		document.getElementById("operacion").value = "";
		this.evaluado = true;
    }

    botonIgual() {
		this.sustituirPantalla();
		if (this.evaluado){
			var expr = document.getElementById("operacion").value += document.getElementById("valor").value;
			var resultado = eval(expr);		
			if (this.isNumber(resultado)){
				document.getElementById("valor").value = resultado;
				document.getElementById("operacion").value = "";
			}
			else{
				document.getElementById("operacion").value = "";
				document.getElementById("valor").value = "Syntax Error";
			}
		}
		else{
			document.getElementById("operacion").value = "";
			document.getElementById("valor").value = "Syntax Error";
		}
		
		this.evaluado = true;
    }

	botonNumber(number){
		this.sustituirPantalla();
        document.getElementById("valor").value += number;
		this.evaluado = true;
	}

    isNumber(str) {
        //Que la cadena empiece y acabe por un numero comprobar la expresion regular para numeros negativos
        return /^-?\d+\.?\d*$/.test(str);
    }
	
	sustituirPantalla(){
		if (valor.value == "Syntax Error" || valor.value == "0")
			valor.value = "";
	}
}

var calculadora = new CalculadoraBasica();

