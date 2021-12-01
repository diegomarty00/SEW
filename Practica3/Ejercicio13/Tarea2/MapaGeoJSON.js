class GeoJSON {

	initMap() {
        var centro = {lat: 43.593101, lng: -1.904143};
        this.map = new google.maps.Map(document.getElementById('mapa'),{
        zoom: 6.8,
        center:centro
        });
    }

	cargar(files) {
		var miMapa = this.map;
        this.archivo = files[0];
        //Expresion regular para permitir solo .GeoJSON
		var matcher = /.GeoJSON/;
		
        if (this.archivo.name.match(matcher)){
			var reader = new FileReader();
            reader.onload = function (event) {
                var text = reader.result;
                var myData = JSON.parse(text);

                miMapa.data.addGeoJson(myData);
            };
            reader.readAsText(this.archivo)
        } else {
            alert("Solo se aceptan archivos .GeoJSON")
        }
    }

    
}
var mapa = new GeoJSON();