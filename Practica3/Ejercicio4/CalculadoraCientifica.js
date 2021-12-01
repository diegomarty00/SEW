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
                        this.botonBorrar();
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
		this.evaluado = true;
    }

    botonMult() {
		this.sustituirPantalla();
		if (this.evaluado){
			document.getElementById("operacion").value += (document.getElementById("valor").value + " * ");
			document.getElementById("valor").value = "0";
		}
		this.evaluado = true;		
    }

    botonRestar() {
		this.sustituirPantalla();
		if (this.evaluado){
			document.getElementById("operacion").value += (document.getElementById("valor").value + " - ");
			document.getElementById("valor").value = "0";
		}
		this.evaluado = true;
    }

    botonSumar() {
		this.sustituirPantalla();
		if (this.evaluado){
			document.getElementById("operacion").value += (document.getElementById("valor").value + " + ");
			document.getElementById("valor").value = "0";
		}
		this.evaluado = true;
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
		try{
			if (this.evaluado){
				var expr = this.sustituirFuncionesMatematicas();
				var resultado = eval(expr);		
				if (this.isNumber(resultado)){
					document.getElementById("valor").value = resultado;
					document.getElementById("operacion").value = "";
				}
				else{
					document.getElementById("valor").value = "Syntax Error";
					document.getElementById("operacion").value = "";
				}
			}
		}catch(SyntaxError){
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

class CalculadoraCientifica extends CalculadoraBasica{
	
	constructor(){	
		super();
		
		document.addEventListener('keydown', (event) => {
            const key = event.key;

            if (key !== ' ') { 
                if (Number.isInteger(Number(key)))
                    ;
                else {
					if (key === '(')
                        this.botonLeftPar();
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
                        this.botonExp();
					else if (key === ')')
                        this.botonRightPar();
					else if (key === 'Backspace')
                        this.botonAtras();
                }
            }
        });
	}
	
	botonAtras() {
        //Reset de los operandos que usa la calculadora
		var result = "";
		for (var i = 0; i < document.getElementById("valor").value.length - 1; i++){
			result += document.getElementById("valor").value[i];
		}
		if (result == "") result = "0";
        document.getElementById("valor").value = result;
		
		this.evaluado = true;
    }

	
	botonBorrar() {
        //Reset de los operandos que usa la calculadora
        document.getElementById("valor").value = "0";
		this.evaluado = true;
    }

	
	botonMR() {
        //Muestra lo que hay en memoria
		this.sustituirPantalla();
		document.getElementById("valor").value = this.memoria;
    }
	
	botonMS() {
        //Guarda lo que hay en pantalla en memoria
		this.memoria = document.getElementById("valor").value;
		this.evaluado = true;
    }
	
	botonMC() {
        //Limpia lo que hay en memoria
		this.memoria = 0;
    }
	
	botonRaiz(){
		this.sustituirPantalla();
		document.getElementById("valor").value += "sqrt(";
	}
	
	botonExp(){
		this.sustituirPantalla();
		document.getElementById("valor").value += "Exp(";
	}
	
	botonMod(){
		this.sustituirPantalla();
		document.getElementById("valor").value += "Mod(";
	}
	
	botonElevar(){
		this.sustituirPantalla();
		document.getElementById("valor").value += "^(";
	}
	
	botonElevar2(){
		this.sustituirPantalla();
		document.getElementById("valor").value += "^(2)";
	}
	
	botonBase10(){
		this.sustituirPantalla();
		document.getElementById("valor").value += "10^(";
	}
	
	botonMasMenos(){
		this.sustituirPantalla();
		document.getElementById("valor").value += "±";
	}
	
	botonFactorial(){
		var numero = document.getElementById("valor").value;
		var result = 1;
		if (numero != "Syntax Error"){
			if (numero == 0);
			else
				for (var i = 1; i <= numero; i++){
					result *= Number(i);
				}
		}
		document.getElementById("operacion").value += result + "";
		document.getElementById("valor").value = "0";
	}
	
	botonSen(){
		this.sustituirPantalla();
		document.getElementById("valor").value += "sin(";
	}
	
	botonCos(){
		this.sustituirPantalla();
		document.getElementById("valor").value += "cos(";
	}
	
	botonTan(){
		this.sustituirPantalla();
		document.getElementById("valor").value += "tan(";
	}
	
	botonElevarMenos1(){
		this.sustituirPantalla();
		document.getElementById("valor").value += "^(-1)";
	}
	
	botonLog(){
		this.sustituirPantalla();
		document.getElementById("valor").value += "log(";
	}
	
	botonPi(){
		this.sustituirPantalla();
		document.getElementById("valor").value += "π";
	}
	
	botonLeftPar(){
		this.sustituirPantalla();
		document.getElementById("valor").value += "(";
	}
	
	botonRightPar(){
		this.sustituirPantalla();
		document.getElementById("valor").value += ")";

	}
	
	sustituirFuncionesMatematicas(){
		
		var cadena = document.getElementById("operacion").value += document.getElementById("valor").value;
		
		cadena = cadena.replace("π", "Math.PI")
				.replace("cos", "Math.cos")
				.replace("sin", "Math.sin")
				.replace("tan", "Math.tan")
				.replace("log", "Math.log")
				.replace("^", "**")
				.replace("±", "+-")
				.replace("Exp", "Math.exp")
				.replace("Mod", "%")
				.replace("sqrt", "Math.sqrt");
				
		return cadena;
	}
}

var calculadora = new CalculadoraCientifica();