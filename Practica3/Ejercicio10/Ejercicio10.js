class PrecioGasNatural {
	
    constructor() {
        this.gas = new Object();
		this.gas.indicator = "ng1:com"
        this.gas.url = "https://api.tradingeconomics.com/markets/historical/" + this.gas.indicator+"?c=guest:guest&format=json"
        this.arrayDatos = []
		this.arrayFechas = []
		this.cargarElementos()
    }

    cargarElementos() {
        var self = this
		$.ajax({
			dataType: "json",
			url: self.gas.url,
			method: 'GET',
			success: function (element){
				self.cogerElementos(element)
				self.generaTabla()
			}
        });
    }

    cogerElementos(element) {
        Object.values(element).forEach(value =>{
			this.arrayDatos.unshift(value["High"])
			this.arrayFechas.unshift(value["Date"])
		});
    }

    generaTabla() {
	// Obtener la referencia del elemento body
	  var body = document.getElementsByTagName("body")[0];

	  // Crea un elemento <table> y un elemento <tbody>
		var tabla   = document.createElement("table");
		var tblBody = document.createElement("tbody");
		var hilera1 = document.createElement("tr");
		var celda1 = document.createElement("th");
		var celda2 = document.createElement("th");
		celda1.appendChild( document.createTextNode("Fecha"));
		hilera1.appendChild(celda1);
		celda2.appendChild(document.createTextNode("Valor de las acciones"));
		hilera1.appendChild(celda2);
		tblBody.appendChild(hilera1);
	  // Crea las celdas
	  for (var i = 0; i < 8; i++) {
		var hilera = document.createElement("tr");
		for (var j = 0; j < 2; j++) {
			// Crea un elemento <td> y un nodo de texto, haz que el nodo de
		  // texto sea el contenido de <td>, ubica el elemento <td> al final
				// de la hilera de la tabla
			var celda = document.createElement("td");
			if(j == 0)
				var textoCelda = document.createTextNode(this.arrayFechas[i]);
			else
				var textoCelda = document.createTextNode(this.arrayDatos[i] + "$");
			celda.appendChild(textoCelda);
			hilera.appendChild(celda);
		}

		// agrega la hilera al final de la tabla (al final del elemento tblbody)
		tblBody.appendChild(hilera);
	  }

	  // posiciona el <tbody> debajo del elemento <table>
	  tabla.appendChild(tblBody);
	  // appends <table> into <body>
	  body.appendChild(tabla);
	}
}

var gas = new PrecioGasNatural();