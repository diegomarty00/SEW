<!DOCTYPE html>
<html lang="es">

	<head>
		<title>Calculadora RPN</title>
		<meta charset="UTF-8">
		<meta name="author" content="Diego">
		<meta name="desciption" content="Ejercicio3" /> 
		<meta name="viewport" content="width=device-width,initial-scale=1"/>
		<link rel="stylesheet" type="text/css" href="CalculadoraRPN.css"/>
		
	</head>
<body>
    <header>
        <h1>Calculadora RPN</h1>
    </header>
    <main>
        <?php
            $archivo = "CalculadoraRPN-Codigo.php";
            $src = implode('',file($archivo));
            eval($src);
        ?>
    </main>
</body>
</html>