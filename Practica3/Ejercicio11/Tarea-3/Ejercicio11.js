class GeoLocalizacion {
	
constructor (){
		//Uso de bind para no tener que llamar al objeto navigator en getPosicion
        navigator.geolocation.getCurrentPosition(this.getPosicion.bind(this), this.error.bind(this));
		this.pulsado=false;
		this.denegado=false;
		this.errortxt;
    }
	
    getPosicion(posicion){
        this.longitud = posicion.coords.longitude; 
        this.latitud = posicion.coords.latitude;  
        this.precision = posicion.coords.accuracy;
    }
	
    mostrar(){
		if (this.denegado){
            alert(this.errortxt);
		} else if(this.pulsado){
            alert("Ya se ha mostrado la información");
		}else{
			this.pulsado = true;
			var ubicacion = document.getElementById('informacion');
			var info ='';
			
				info+='<ul><li>Coordenadas:<ul>'
				info+='<li>Longitud: ' + this.longitud + '</li>'
				info+='<li>Latitud: ' + this.latitud + '</li></ul>'
				info+='<li>Precisión: ' + this.precision + ' metros</li></ul>'
				ubicacion.innerHTML += info;
		}
    }
	
	error(error){
		
        switch(error.code){
            case error.PERMISSION_DENIED:
                this.errortxt = "Permiso denegado por el usuario";
				break;
            case error.POSITION_UNAVAILABLE:
                this.errortxt = "Posición no disponible";
                break;
            case error.TIMEOUT:
                this.errortxt = "Se ha agotado el tiempo de espera para la petición";
                break;
            case error.UNKNOWN_ERROR:
                this.errortxt = "Error desconocido, intentelo más tarde";
                break;
		}
		alert(this.errortxt);
		this.denegado = true;
    }
	
	obtenerMapa(){
		if (this.denegado){
            alert(this.errortxt);
		} else if(this.pulsado){
            alert("Ya se ha mostrado la información");
		}else{
			this.pulsado = true;
			var ubicacion = document.getElementById("informacion");
			
			//No dispongo de tarjeta de crédito, a si que uso la api key proporcionada en los ejemplos de Cueva.
			
			var key = "&key=AIzaSyC6j4mF6blrc4kZ54S6vYZ2_FpMY9VzyRU";
			var url = "https://maps.googleapis.com/maps/api/staticmap?";
			var centro = "center=" + this.latitud + "," + this.longitud;
			var zoom = "&zoom=15";
			var tamaño= "&size=800x600";
			var marcador = "&markers=color:red%7Clabel:Z%7C" + this.latitud + "," + this.longitud;
			var sensor = "&sensor=false";         
			this.imagenMapa = url + centro + zoom + tamaño + marcador + sensor + key;
			ubicacion.innerHTML += "<img src='"+this.imagenMapa+"'/>";
		}
	}
}

var localizador = new GeoLocalizacion();