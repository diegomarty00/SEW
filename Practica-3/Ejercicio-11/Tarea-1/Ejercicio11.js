class GeoLocalizacion {
	
    constructor (){
		//Uso de bind para no tener que llamar al objeto navigator en getPosicion
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this));
    }
	
    getPosicion(posicion){
        this.longitud = posicion.coords.longitude; 
        this.latitud = posicion.coords.latitude;  
        this.precision = posicion.coords.accuracy;
    }
	
    mostrar(){
		
        var ubicacion = document.getElementById('informacion');
		var info ='';
		
			info+='<ul><li>Coordenadas:<ul>'
			info+='<li>Longitud: ' + this.longitud + '</li>'
			info+='<li>Latitud: ' + this.latitud + '</li></ul>'
			info+='<li>Precisión: ' + this.precision + ' metros</li></ul>'
			ubicacion.innerHTML += info;
    }
}

var localizador = new GeoLocalizacion();