<!DOCTYPE html>
<html lang="es">
<head>
    <meta charset="UTF-8">
    <meta name="author" content="Diego" />
    <meta name="keywords" content="Ejercicio4" />
    <meta name="description" content="Ejercicio4" />
    <title>Precios oro</title>
    <link rel="stylesheet" href="Ejercicio4.css" />
	<meta name="viewport" content="width=device-width,initial-scale=1"/>
</head>
<body>
    <header>
        <h1>Precios del oro</h1>
    </header>
    <main>
        <?php
        session_start();

            class Gold {


                function __construct() {
					// set API Endpoint, access key, required parameters
					$endpoint = 'convert';
					$access_key = 'q3xnjd11lmt7crkcpevqzsuk34xog6v3oue5en2t70ii4rwf29qtrg97h3uf';

					$from = 'XAU';
					$to = 'EUR';
					$amount = 1;
				
					// initialize CURL:
					$ch = curl_init('https://www.metals-api.com/api/'.$endpoint.'?access_key='.$access_key.'&from='.$from.'&to='.$to.'&amount='.$amount.'');   
					curl_setopt($ch, CURLOPT_RETURNTRANSFER, true);

					// get the JSON data:
					$json = curl_exec($ch);
					curl_close($ch);

					// Decode JSON response:
					$conversionResult = json_decode($json, true);

					// access the conversion result
					echo "<p>Actualmente el precio del oro por onza es de ".$conversionResult['result']."€</p>";
					
					// Si tuviese más datos
					/**
						$data = $this->json->dataset->data;
						echo "<table><tr><th>Fecha</th><th>Precio ($)</th></tr>";
						for ($i = 0; $i < sizeof($data); $i++) {
							echo "<tr><td>" . $data[$i][0] . "</td>";
							echo "<td>" . $data[$i][1]. "</td></tr>";
						}
						echo "</table>";
					*/
                }
            }

            $gold = new Gold();
        ?>
    </main>
</body>
</html>