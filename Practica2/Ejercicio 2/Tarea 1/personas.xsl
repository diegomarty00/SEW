<?xml version="1.0" encoding="UTF-8"?>
<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform">

<xsl:output method= "html" version="5.0" encoding="UTF-8" indent="yes"/>
    <xsl:template match = "/personas">
		<xsl:text disable-output-escaping='yes'>&lt;!DOCTYPE html></xsl:text>
		<html lang = "es">
			<head>
				<title>Transformacion usando XSL</title>
				<meta charset="UTF-8"/>
				<meta name = "author" content = "Diego"/>
				<link rel="stylesheet" type="text/css" href="estilo.css" />
			</head>
		
			<body>
				<header>
					<h1>Árbol genealógico</h1>
				</header>
					<xsl:apply-templates/>
			</body>
		</html>
	</xsl:template>
	
	<xsl:template match = "persona">
						<h3>
							<xsl:value-of select="@nombre"/>    
						</h3>
						<p>Primer apellido:  <xsl:value-of select="@apellido1"/></p> 
						<p>Segundo apellido:  <xsl:value-of select="@apellido2"/></p> 
						<xsl:for-each select="datos">
							<p>Fecha de nacimiento: <xsl:value-of select="fechaNac"/></p>
							<p>Lugar de nacimiento: <xsl:value-of select="lugarNac"/></p>
							<xsl:for-each select = "coordenadasNac">
								<table>
									<caption> Coordnadas nacimiento</caption>
									<tbody>
										<tr>
											<th>Latitud</th>
											<th>Longitud</th>
											<th>Altitud (Metros)</th>
										</tr>
										<tr>
											<td><xsl:value-of select = "latitud"/></td>
											<td><xsl:value-of select = "longitud"/></td>
											<td><xsl:value-of select = "altitud"/></td>
										</tr>
									</tbody>
								</table>
							</xsl:for-each>
							<xsl:choose>
								<xsl:when test ="fechaRIP">
									<p>Fecha de fallecimiento: <xsl:value-of select="fechaRip"/></p>
								</xsl:when>
								</xsl:choose>
								<xsl:choose>
								<xsl:when test = "lugarRIP">
									<p>Lugar de fallecimiento: <xsl:value-of select="lugarRIP"/></p>
								</xsl:when>
								</xsl:choose>
								<xsl:choose>
								<xsl:when test ="coordenadasRIP">
									<xsl:for-each select = "coordenadasRIP">
										<table>
											<caption> Coordnadas fallecimiento</caption>
											<tbody>
												<tr>
													<th>Latitud</th>
													<th>Longitud</th>
													<th>Altitud (Metros)</th>
												</tr>
												<tr>
													<td><xsl:value-of select = "latitud"/></td>
													<td><xsl:value-of select = "longitud"/></td>
													<td><xsl:value-of select = "altitud"/></td>
												</tr>
											</tbody>
										</table>
									</xsl:for-each>
								</xsl:when>
							</xsl:choose>
							
							<xsl:for-each select = "foto">
								<p>Fotos: </p>
									<a href ="{current()}" ><xsl:value-of select="current()"/></a>
							</xsl:for-each>
							
							<xsl:choose>
								<xsl:when test = "video">
									<xsl:for-each select = "video">
										<p>Videos: </p>
										<xsl:for-each select = "video">
											<a href ="{current()}" ><xsl:value-of select="current()"/></a>
										</xsl:for-each>
									</xsl:for-each>
							</xsl:when>
						</xsl:choose>
						<p>Comentario: <xsl:value-of select="comentario"/></p>
						</xsl:for-each>
						
						<xsl:choose>
							<xsl:when test = "persona">
								 <xsl:for-each select="persona">
									<h3>
									<xsl:value-of select="@nombre"/>    
									</h3>
									<p>Primer apellido:  <xsl:value-of select="@apellido1"/></p> 
									<p>Segundo apellido:  <xsl:value-of select="@apellido2"/></p> 
									<xsl:apply-templates/>
								</xsl:for-each>
							</xsl:when>
						</xsl:choose>
	</xsl:template>
	
	<xsl:template match = "datos">
							<p>Fecha de nacimiento: <xsl:value-of select="fechaNac"/></p>
							<p>Lugar de nacimiento: <xsl:value-of select="lugarNac"/></p>
							<xsl:for-each select = "coordenadasNac">
								<table>
									<caption> Coordnadas nacimiento</caption>
									<tbody>
										<tr>
											<th>Latitud</th>
											<th>Longitud</th>
											<th>Altitud (Metros)</th>
										</tr>
										<tr>
											<td><xsl:value-of select = "latitud"/></td>
											<td><xsl:value-of select = "longitud"/></td>
											<td><xsl:value-of select = "altitud"/></td>
										</tr>
									</tbody>
								</table>
							</xsl:for-each>
							<xsl:choose>
								<xsl:when test ="fechaRIP">
									<p>Fecha de fallecimiento: <xsl:value-of select="fechaRip"/></p>
								</xsl:when>
							</xsl:choose>
							<xsl:choose>
								<xsl:when test = "lugarRIP">
									<p>Lugar de fallecimiento: <xsl:value-of select="lugarRIP"/></p>
								</xsl:when>
							</xsl:choose>
							<xsl:choose>
								<xsl:when test ="coordenadasRIP">
									<xsl:for-each select = "coordenadasRIP">
										<table>
											<caption> Coordnadas fallecimiento</caption>
											<tbody>
												<tr>
													<th>Latitud</th>
													<th>Longitud</th>
													<th>Altitud (Metros)</th>
												</tr>
												<tr>
													<td><xsl:value-of select = "latitud"/></td>
													<td><xsl:value-of select = "longitud"/></td>
													<td><xsl:value-of select = "altitud"/></td>
												</tr>
											</tbody>
										</table>
									</xsl:for-each>
								</xsl:when>
							</xsl:choose>
							
							<xsl:for-each select = "foto">
								<p>Fotos: </p>
									<a href ="{current()}" ><xsl:value-of select="current()"/></a>
							</xsl:for-each>
							
							<xsl:choose>
								<xsl:when test = "video">
									<xsl:for-each select = "video">
										<p>Videos: </p>
										<xsl:for-each select = "video">
											<a href ="{current()}" ><xsl:value-of select="current()"/></a>
										</xsl:for-each>
									</xsl:for-each>
								</xsl:when>
							</xsl:choose>
						<p>Comentario: <xsl:value-of select="comentario"/></p>


	</xsl:template>
	
</xsl:stylesheet>
