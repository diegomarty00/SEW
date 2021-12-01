class Navegador {

	constructor(nombre, idioma, version, plataforma, vendedor, agente, javaActivo) {

		this.nombre = nombre;
		this.idioma = idioma;
		this.version = version;
		this.plataforma = plataforma;
		this.vendedor = vendedor;
		this.agente = agente;
		this.javaActivo = javaActivo;

	}

	escribirNombre() {
		document.write(this.nombre);
	}

	escribirIdioma() {
		document.write(this.idioma);
	}

	escribirVersion() {
		document.write(this.version);
	}

	escribirVendedor() {
		document.write(this.vendedor);
	}

	escribirAgente() {
		document.write(this.agente);
	}

	escribirJavaActivo() {
		document.write(this.javaActivo);
	}

	escribirMasInformacion() {

		document.write("<p>Versión: ");
		document.write(this.version);
		document.write("</p>");
		document.write("<p>Plataforma: ");
		document.write(this.plataforma);
		document.write("</p>");
		document.write("<p>Vendedor: ");
		document.write(this.vendedor);
		document.write("</p>");
		document.write("<p>Agente: ");
		document.write(this.agente);
		document.write("</p>");
		document.write("<p>Java activo: ");
		document.write(this.javaActivo);
		document.write("</p>");
	}
}

var navegador = new Navegador(navigator.appCodeName,
	navigator.language,
	navigator.appVersion,
	navigator.platform,
	navigator.userAgent,
	navigator.javaEnabled());

