class Asignatura {

    constructor(nombre, titulacion, centro, universidad, curso, profesor, email) {

        this.nombre = nombre;
        this.titulacion = titulacion;
        this.centro = centro;
        this.universidad = universidad;
        this.curso = curso;
        this.profesor = profesor;
        this.email = email;

    }
	
	escribirNombre(){
		document.write(this.nombre);
	}
	
	escribirTitulacion(){
		document.write(this.titulacion);
	}
	
	escribirCentro(){
		document.write(this.centro);
	}
	
	escribirUniversidad(){
		document.write(this.universidad);
	}
	
	escribirCurso(){
		document.write(this.curso);
	}
	
	escribirProfesor(){
		document.write(this.profesor);
	}
	
	escribirEmail(){
		document.write(this.email);
	}
	
	escribirParrafos(){	
		document.write("<section> <h5>Datos completos de la asignatura: </h5>");
		document.write("<ul> <li>Nombre de la asignatura: ");
		document.write(this.nombre);
		document.write("</li>");
		document.write("<li>Titulación: ");
		document.write(this.titulacion);
		document.write("</li>");
		document.write("<li>Centro: ");
		document.write(this.centro);
		document.write("</li>");
		document.write("<li>Universidad: ");
		document.write(this.universidad);
		document.write("</li>");
		document.write("<li>Curso actual: ");
		document.write(this.curso);
		document.write("</li>");
		document.write("<li>Profesor: ");
		document.write(this.profesor);
		document.write("</li>");
		document.write("<li>e-mail: ");
		document.write(this.email);
		document.write("</li> </ul> </section>");		
	}
}

var asignatura = new Asignatura("Software y estándares en la Web",
    "Grado en Ingeniería Informática del Software",
    "Escuela de Ingeniería Informática",
    "Universidad de Oviedo",
    "2020-2021",
    "Juan Manuel Cueva Lovelle",
    "cueva@uniovi.es");

