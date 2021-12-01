<xsl:stylesheet version="1.0" xmlns:xsl="http://www.w3.org/1999/XSL/Transform" xmlns:kml="http://www.opengis.net/kml/2.2">
<xsl:output method="xml" indent="yes"/>
	<xsl:template match = "/personas">
		<kml>
			<Document>
				<xsl:apply-templates/>
			</Document>
		</kml>
   </xsl:template>
   
   <xsl:template match = "persona">
		<xsl:for-each select="datos">
			<Placemark>
				<name>
					<xsl:value-of select="lugarNac"/>
				</name>
				<Point>
					
					<coordinates>
						<xsl:for-each select = "coordenadasNac">
							<xsl:value-of select = "longitud"/>,<xsl:value-of select = "latitud"/>,<xsl:value-of select = "altitud"/>
						</xsl:for-each>
					</coordinates>
					
				</Point>
				
			</Placemark>
			<xsl:choose>
				<xsl:when test ="lugarRIP">
					<Placemark>
						<name>
							<xsl:value-of select="lugarRIP"/>
						</name>
						<Point>
							<extrude>1</extrude>
							<tessellate>1</tessellate>
							<coordinates>
								<xsl:for-each select = "coordenadasRIP">
									<xsl:value-of select = "longitud"/>,<xsl:value-of select = "latitud"/>,<xsl:value-of select = "altitud"/>
								</xsl:for-each>
							</coordinates>
							
						</Point>
						<Style>
							<PointStyle>
								<color>#ff0000ff</color>
								<width>5</width>
							</PointStyle>
						</Style>
					</Placemark>
				</xsl:when>
			</xsl:choose>
		</xsl:for-each>
		<xsl:choose>
			<xsl:when test = "persona">
				 <xsl:for-each select="persona">
					<xsl:apply-templates/>
				</xsl:for-each>
			</xsl:when>
		</xsl:choose>
	</xsl:template>
	
	<xsl:template match = "datos">
		<Placemark>
			<name>
				<xsl:value-of select="lugarNac"/>
			</name>
			<Point>
				<extrude>1</extrude>
				<tessellate>1</tessellate>
				<coordinates>
					<xsl:for-each select = "coordenadasNac">
						<xsl:value-of select = "longitud"/>,<xsl:value-of select = "latitud"/>,<xsl:value-of select = "altitud"/>
					</xsl:for-each>
				</coordinates>
				
			</Point>
			<Style>
				<PointStyle>
					<color>#40BF20</color>
					<width>5</width>
				</PointStyle>
			</Style>
		</Placemark>
		<xsl:choose>
			<xsl:when test ="lugarRIP">
				<Placemark>
					<name>
						<xsl:value-of select="lugarRIP"/>
					</name>
					<Point>
						<extrude>1</extrude>
						<tessellate>1</tessellate>
						<coordinates>
							<xsl:for-each select = "coordenadasRIP">
								<xsl:value-of select = "longitud"/>,<xsl:value-of select = "latitud"/>,<xsl:value-of select = "altitud"/>
							</xsl:for-each>
						</coordinates>
						
					</Point>
					<Style>
						<PointStyle>
							<color>#ff0000ff</color>
							<width>5</width>
						</PointStyle>
					</Style>
				</Placemark>
			</xsl:when>
		</xsl:choose>
	</xsl:template>
   
</xsl:stylesheet>