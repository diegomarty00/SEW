<!DOCTYPE html>
<html lang="es">

	<head>
		<title>Calculadora Científica</title>
		<meta charset="UTF-8">
		<meta name="author" content="Diego">
		<meta name="desciption" content="Ejercicio2" /> 
		<meta name="viewport" content="width=device-width,initial-scale=1"/>
		<link rel="stylesheet" type="text/css" href="CalculadoraCientifica.css"/>
	</head>
	
	<body>
		<header>
			<h1>Calculadora científica</h1>
		</header>
		<?php
            $archivo = "CalculadoraCientifica-codigo.php";
            $src = implode('',file($archivo));
            eval($src);
            ?>
        </main>
	</body>
</html>