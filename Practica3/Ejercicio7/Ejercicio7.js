
class Manipulador{
	
	constructor(){
		this.textoOculto = false;
		this.textoAñadido = false;
		this.textoEliminado = false;
		 $(document).ready(function(){
			$("#btnOcultar").click(function () {
				if (this.textoOculto) {
					$(".texto > p").show();
				} else {
					$(".texto > p").hide();
				}
				//Todos los parrafos dentro de texto
				this.textoOculto = !this.textoOculto
			});
			$("#btnAñadir").click(function (){	
				if (!this.textoAñadido){		
					var parrafo  = $("<p></p>").text("🎉 ¡¡GRACIAS POR CREAR ESTE TEXTO NUEVO!! 🎉");
					$(".texto").append(parrafo);
					this.textoAñadido = true;
				}
			});
			$("#btnModificarTitulo").click(function (){	
				var titulo = prompt('Nombre del nuevo titulo', '')
				$("#titulo").text(titulo + "");
			});
			$("#btnEliminar").click(function (){
				if (!this.textoEliminado){
					$("#eliminado").remove();
					this.textoEliminado = true;
				}
			});
			$("#btnCalcular").click(function () {
				var total = 0
				$("table tr td").each(function () {
					var value = $(this).text();
					total += parseInt(value);
				})
				$("#total").text("Total: " + total + "€");
			});
			$("#btnElementos").click(function () {
				$("*", document.body).each(function () {
					var parent = $(this).parent().get(0).tagName;
					$(this).prepend(document.createTextNode("Padre : <" + parent + "> elemento : <" + $(this).get(0).tagName + "> valor: "));
				})
				$(this).remove()
			})
			
		 });
	}
}

var manipulador = new Manipulador();