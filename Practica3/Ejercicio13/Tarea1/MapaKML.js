class Mapa {
    constructor() {}
	
	cargar(files) {
        this.archivo = files[0];
        var reader = new FileReader();
		
		//Expresion regular para permitir solo .kml
		var matcher = /.kml/;
		
        if (this.archivo.name.match(matcher)){
            reader.onload = function (evento) {
                this.procesarDatos(reader.result)
            }.bind(this);
            reader.readAsText(this.archivo)
        } else {
            alert("Solo se aceptan archivos .kml")
        }
    }
	procesarDatos(data) {
		
        var parser = new DOMParser();
        var dom = parser.parseFromString(data, "text/xml");
        var coordenadas = [];
        var domCoord = dom.getElementsByTagName("coordinates");
		var domName = dom.getElementsByTagName("name");
        for (var i = 0; i < domCoord.length; i++) {
            coordenadas.push(domCoord[i].innerHTML.trim() + "+" + domName[i].innerHTML.trim());
        }
        this.datos = coordenadas;
        this.initMap();
    }

    initMap() {
		
        var centro = {lat: 43.593101, lng: -1.904143};
        
        var map = new google.maps.Map(document.getElementById('mapa') , { zoom: 6.8, center: centro});
		var marker;

		this.datos.forEach(function (coordenadas) {
		
            var lugar = coordenadas.toString().split("+");
			
			var str = lugar[0].toString().split(",");
			
			var coordinates = { lat: parseFloat(str[1]), lng: parseFloat(str[0]) };
            marker = new google.maps.Marker({
				position: coordinates,
				map,
				title: lugar[1]
			});
        })
    } 
}
var mapa = new Mapa()

