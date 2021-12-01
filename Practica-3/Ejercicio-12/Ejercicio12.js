class FileUtil{
	
    constructor(){}

    cargar(archivos){
        this.archivo = archivos[0]
		
		//Expresiones regulares para validar que sean archivos de lectura o json
        var texto = /text.*/
        var json = /application.json/
		
        var datos = "<h2>" + this.archivo.name + "</h2>"
			datos   += "<ul>"
			datos   += "<li>Tipo del archivo: " + this.archivo.type + "</li>"
			datos   += "<li>Tamaño del archivo: " + this.archivo.size + "</li>"
			datos   += "<li>Fecha última modificación: " + this.archivo.lastModifiedDate + "</li>"
			datos   += "</ul>"
			datos 	+= "<h2>Contenido</h2>"
        
        document.getElementById("infoArchivo").innerHTML = datos;
		
		//Validar la extension con las exp regulares
		
        if (this.archivo.type.match(texto) || this.archivo.type.match(json)){
            var reader = new FileReader();
            
			//Cargar el archivo en el elemento html seleccionado (parrafo p con id "contenido")
            reader.onload = function(evento){
                document.getElementById('contenido').innerText += reader.result
            }
            reader.readAsText(this.archivo)
        }
		else
            document.getElementById('contenido').innerHTML += "No es un archivo de texto.";
		
        document.getElementById('cargarArchivo').remove()
    }
}

var fileUtil = new FileUtil()