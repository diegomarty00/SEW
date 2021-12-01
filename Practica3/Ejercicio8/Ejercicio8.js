class TiempoMeteorologico {
	
    constructor() {
        this.apikey = "47b790fd0fc41878c80c57c9846132cb"
        this.ciudades = ["Villalbilla de Burgos", "Vigo", "Oviedo", "Lyon, Francia", "Cancienes"]
        this.codigoPais = "ES"
        this.unidades = "&units=metric"
        this.idioma = "&lang=es"
        this.urls = new Array()
        this.ciudades.forEach(element => {
            var url = "http://api.openweathermap.org/data/2.5/weather?q=" + element + "," + this.codigoPais + this.unidades + this.idioma + "&APPID=" + this.apikey;
            this.urls.push(url);
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
                dataType: "json",
                url: url,
                method: 'GET',
                success: function (datos) {
                    
                    var stringDatos = "<h2>" + datos.name + "</h2>"
                    stringDatos += "<img src= http://openweathermap.org/img/w/" + datos.weather[0].icon + ".png></img>"
                    stringDatos += "<ul><li>País: " + datos.sys.country + "</li>"
                    stringDatos += "<li>Latitud: " + datos.coord.lat + " grados</li>"
                    stringDatos += "<li>Longitud: " + datos.coord.lon + " grados</li>"
                    stringDatos += "<li>Temperatura: " + datos.main.temp + " grados Celsius</li>"
                    stringDatos += "<li>Temperatura máxima: " + datos.main.temp_max + " grados Celsius</li>"
                    stringDatos += "<li>Temperatura mínima: " + datos.main.temp_min + " grados Celsius</li>"
                    stringDatos += "<li>Presión: " + datos.main.pressure + " milibares</li>"
                    stringDatos += "<li>Humedad: " + datos.main.humidity + " %</li>"
                    stringDatos += "<li>Amanece a las: " + new Date(datos.sys.sunrise * 1000).toLocaleTimeString() + "</li>"
                    stringDatos += "<li>Oscurece a las: " + new Date(datos.sys.sunset * 1000).toLocaleTimeString() + "</li>"
                    stringDatos += "<li>Dirección del viento: " + datos.wind.deg + " grados</li>"
                    stringDatos += "<li>Velocidad del viento: " + datos.wind.speed + " metros/segundo</li>"
                    stringDatos += "<li>Hora de la medida: " + new Date(datos.dt * 1000).toLocaleTimeString() + "</li>"
                    stringDatos += "<li>Fecha de la medida: " + new Date(datos.dt * 1000).toLocaleDateString() + "</li>"
                    stringDatos += "<li>Descripción: " + datos.weather[0].description + "</li>"
                    stringDatos += "<li>Visibilidad: " + datos.visibility + " metros</li>"
                    stringDatos += "<li>Nubosidad: " + datos.clouds.all + " %</li></ul>"

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