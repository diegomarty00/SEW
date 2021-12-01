var mapa = new Object();

mapa.init = function(){
	
	var pueblo = {lat: 43.4951982, lng: -5.8784909};
	
	var miPueblo = new google.maps.Map(document.getElementById('mapa'),{zoom: 13, center:pueblo});
	var marcador = new google.maps.Marker({position:pueblo,map:miPueblo,title:'Taújo'});
}