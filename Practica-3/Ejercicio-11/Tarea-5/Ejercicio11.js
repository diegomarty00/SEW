var mapa = new Object();

mapa.init = function(){
	
	var pueblo = {lat: 43.4951982, lng: -5.8784909};
	
	var mapa = new google.maps.Map(document.getElementById('mapa'),{zoom: 12, center:pueblo});
	var marcador = new google.maps.Marker({position:pueblo,map:miPueblo});
	 
	infoWindow = new google.maps.InfoWindow;
	
    if (navigator.geolocation) 
	{
          navigator.geolocation.getCurrentPosition(function(position) {
            var pos = {
              lat: position.coords.latitude,
              lng: position.coords.longitude
            };

            //Poner un marcador en la posicion obtenida con geolocalizacion
            new google.maps.Marker({position:pos,map:mapa, title:"Se encuentra aquí"})
            infoWindow.open(mapa);
            mapa.setCenter(pos);
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