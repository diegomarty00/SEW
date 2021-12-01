var mapa = new Object();

mapa.init = function(){
	
	var pueblo = {lat: 43.4951982, lng: -5.8784909};
	var pos;
	var mapa = new google.maps.Map(document.getElementById('mapa'),{zoom: 12, center:pueblo});
	var marcador = new google.maps.Marker({position:pueblo,map:mapa});
	
	infoWindow = new google.maps.InfoWindow;
	
    if (navigator.geolocation) 
	{
          navigator.geolocation.getCurrentPosition(function(position) {
            pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            //Poner un marcador en la posicion obtenida con geolocalizacion
            new google.maps.Marker({position:pos,map:mapa, title:"Se encuentra aquí"})
            infoWindow.open(mapa);
			
			var puntoMedio = function(p1,p2){
				var result = {
					lat: (p1.lat + p2.lat)/2,
					lng: (p1.lng + p2.lng)/2
				}
				return result;
			}
			
            mapa.setCenter(puntoMedio(pos,pueblo));
			
			var getDistance = function(p1, p2) {
				var R = 6378137; // Earth’s mean radius in meter
				var dLat = (p2.lat - p1.lat)* Math.PI / 180;
				var dLong = (p2.lng - p1.lng)* Math.PI / 180;
				var a = Math.sin(dLat / 2) * Math.sin(dLat / 2) +
						Math.cos((p1.lat)* Math.PI / 180) * Math.cos((p2.lat)* Math.PI / 180) *
						Math.sin(dLong / 2) * Math.sin(dLong / 2);
				var c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a));
				var d = R * c;
				return Math.floor(d); // returns the distance in meter
			}
			
			var dis = function(m) {
				if (m >= 1000){
					var km = Math.floor(m/1000) +" km"
					if (m%1000 != 0){
						return km + " y "+ m%1000 + " metros";
					}else{
						return km;
					}
				}
				return m + " metros";
				return m + " metros";
			}
				
			var result= "Hay una distancia de " + dis(getDistance(pueblo, pos)) + " desde tu ubicación hasta mi pueblo"
			var parrafo  = $("<p></p>").text(result);
			$(".texto").append(parrafo);
          });
    }
	
	else{
		error(infoWindow, mapa.getCenter());
    }
}
	
	
	function error(ventana, pos){
		ventana.setPosition(pos);
		ventana.setContent("Error al usar la geolocalizacion");
		ventana.open(mapa);
	}