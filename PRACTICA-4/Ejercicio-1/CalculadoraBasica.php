<!DOCTYPE html>
<html lang="es">

	<head>
		<title>Calculadora básica</title>
		<meta charset="UTF-8">
		<meta name="author" content="Diego">
		<meta name="desciption" content="Ejercicio1" /> 
		<meta name="viewport" content="width=device-width,initial-scale=1"/>
		<link rel="stylesheet" type="text/css" href="CalculadoraBasica.css"/>
	</head>
	
	<body>
		<header>
			<h1>Calculadora básica</h1>
		</header>
		<?php
            $archivo = "CalculadoraBasica-codigo.php";
            $src = implode('',file($archivo));
            eval($src);
            ?>
        </main>
	</body>
</html>