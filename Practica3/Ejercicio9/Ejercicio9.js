class TiempoMeteorologico {
	
    constructor() {
        this.apikey = "47b790fd0fc41878c80c57c9846132cb"
        this.ciudades = ["Villalbilla de Burgos", "Vigo", "Oviedo", "Lyon, Francia", "Cancienes"]
        this.unidades = "&units=metric"
        this.idioma = "&lang=es"
		this.tipo = "&mode=xml"
        this.urls = new Array()
        this.ciudades.forEach(element => {
            var url = "http://api.openweathermap.org/data/2.5/weather?q=" + element + this.tipo + this.unidades + this.idioma + "&APPID=" + this.apikey;
            this.urls.push(url)
        })
        this.cargarElementos()
        this.cargarDatos()
    }

    cargarElementos() {
        var i = 0
        this.urls.forEach(element => {
            this.crearElemento("section", i, "main");
            i++;
        })
    }

    crearElemento(tipoElemento, id, container) {
        var elemento = document.createElement(tipoElemento);
        elemento.id = id;
        elemento.innerHTML = id;
        $(container).append(elemento);
    }

    cargarDatos() {
        var i = 0
        this.urls.forEach(url => {
            $.ajax({
                dataType: "xml",
                url: url,
                method: 'GET',
                success: function (datos) {
                    
					var ciudad = $('city',datos).attr("name");
					var longitud = $('coord',datos).attr("lon");
					var latitud = $('coord',datos).attr("lat");
					var pais = $('country',datos).text();
					var horaAmanecer = $('sun',datos).attr("rise");
					var horaAnochecer = $('sun',datos).attr("set");
					var minutosUsoHorario = new Date().getTimezoneOffset();
					var oscurecerDesde1970 = Date.parse(horaAnochecer);
					oscurecerDesde1970 -= minutosUsoHorario * 60 * 1000;
					var amanecerDesde1970 = Date.parse(horaAmanecer);
					amanecerDesde1970 -= minutosUsoHorario * 60 * 1000;
					var amanecer = (new Date(amanecerDesde1970)).toLocaleTimeString("es-ES");
					var anochecer = (new Date(oscurecerDesde1970)).toLocaleTimeString("es-ES");
					var temperatura = $('temperature',datos).attr("value");
                    var temperaturaMin = $('temperature',datos).attr("min");
                    var temperaturaMax = $('temperature',datos).attr("max");
					var humedad = $('humidity',datos).attr("value");
                    var presion = $('pressure',datos).attr("value");
                    var velocidadViento = $('speed',datos).attr("value");
                    var direccionViento = $('direction',datos).attr("value");
                    var nubosidad = $('clouds',datos).attr("value");
                    var visibilidad = $('visibility',datos).attr("value");
                    var descripcion = $('weather',datos).attr("value");
                    var horaMedicion = $('lastupdate',datos).attr("value");
					var horaMedicionDesde1970 = Date.parse(horaMedicion);
                    horaMedicionDesde1970 -= minutosUsoHorario * 60 * 1000;
					var horaLocal = (new Date(horaMedicionDesde1970)).toLocaleTimeString("es-ES");
					var fechaLocal = (new Date(horaMedicionDesde1970)).toLocaleDateString("es-ES");
					var icono = $('weather', datos).attr("icon");
	
					var stringDatos = "<h2>" + ciudad + "</h2>"
                    stringDatos += "<img src= http://openweathermap.org/img/w/" + icono + ".png></img>"
                    stringDatos += "<ul><li>País: " + pais + "</li>"
                    stringDatos += "<li>Latitud: " + latitud + " grados</li>"
                    stringDatos += "<li>Longitud: " + longitud + " grados</li>"
                    stringDatos += "<li>Temperatura: " + temperatura + " grados Celsius</li>"
                    stringDatos += "<li>Temperatura máxima: " + temperaturaMax + " grados Celsius</li>"
                    stringDatos += "<li>Temperatura mínima: " + temperaturaMin + " grados Celsius</li>"
                    stringDatos += "<li>Presión: " + presion + " milibares</li>"
                    stringDatos += "<li>Humedad: " + humedad + " %</li>"
                    stringDatos += "<li>Amanece a las: " + amanecer + "</li>"
                    stringDatos += "<li>Oscurece a las: " + anochecer + "</li>"
                    stringDatos += "<li>Dirección del viento: " + direccionViento + " grados</li>"
                    stringDatos += "<li>Velocidad del viento: " + velocidadViento + " metros/segundo</li>"
                    stringDatos += "<li>Hora de la medida: " + horaLocal + "</li>"
                    stringDatos += "<li>Fecha de la medida: " + fechaLocal + "</li>"
                    stringDatos += "<li>Descripción: " + descripcion + "</li>"
                    stringDatos += "<li>Visibilidad: " + visibilidad + " metros</li>"
                    stringDatos += "<li>Nubosidad: " + nubosidad + " %</li></ul>"

					//El elemento cuya id se asignó previamente que lo muestre en texto.
                    $("#" + i).html(stringDatos);
                    i++;
                },
                error: function () {
                    $("h2").html("No se ha podido obtener el JSON de <a href='http://openweathermap.org'>OpenWeatherMap</a>");
                    $("body").remove();
                    $("p").remove();
                }
            })
        })
    }
}

var tiempo = new TiempoMeteorologico();