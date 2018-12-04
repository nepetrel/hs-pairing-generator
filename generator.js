function GeneratePairing(){
 alphaKids = new Array("Jane Crocker", "Jake English", "Roxy Lalonde", "Dirk Strider", "AR|Lil Hal");
 betaKids = new Array("John Egbert", "Jade Harley", "Rose Lalonde", "Dave Strider");
 cherubs = new Array("Caliborn", "Calliope", "Lord English");
 sprites = new Array("ARquius", "Davepeta", "Jasprose", "Davesprite", "Nannasprite", "Jadesprite", "Jaspersprite", "Erisolsprite", "Calsprite");
 ancestors = new Array("The Handmaid", "The Summoner", "The Psiionic", "The Sufferer", "The Disciple", "The Dolorosa", "Neophyte Redglare", "Marquise Spinneret Mindfang", "Executor Darkleer", "The Grand Highblood", "Orphaner Dualscar", "The Condesce");
 betaTrolls = new Array("Aradia Megido", "Tavros Nitram", "Sollux Captor", "Karkat Vantas", "Nepeta Leijon", "Kanaya Maryam", "Terezi Pyrope", "Vriska Serket", "Equius Zahhak", "Gamzee Makara", "Eridan Ampora", "Feferi Peixes");
 alphaTrolls = new Array("Damara Megido", "Rufioh Nitram", "Mituna Captor", "Kankri Vantas", "Meulin Leijon", "Porrim Maryam", "Latula Pyrope", "Aranea Serket", "Horuss Zahhak", "Kurloz Makara", "Cronus Ampora", "Meenah Peixes");
 alphaGuardians = new Array("Alpha John Crocker", "Alpha Jade English", "Alpha Rose Lalonde", "Alpha Dave Strider");
 betaGuardians = new Array("Beta Jane Egbert", "Beta Jake Harley", "Beta Roxy Lalonde", "Beta Dirk Strider");
 carapacians = new Array("Aimless Renegade", "Black King", "Black Queen", "Clubs Deuce", "Courtyard Droll", "Diamonds Droog", "Draconian Dignitary", "Hegemonic Brute", "Jack Noir", "Ms. Paint", "Peregrine Mendicant", "Snowman", "Spades Slick", "Wayward Vagabond", "Windswept Questant", "White King");
 firstGuardians = new Array("Doc Scratch", "Becquerel", "God Cat");
 hiveswapTrolls = new Array("Zebede Tongva", "Tyzias Entykk", "Mallek Adalov", "Daraya Jonjet", "Barzum Soleil", "Baizli Soleil", "Nihkee Moolah", "Chahut Maenad", "Diemen Xicali", "Skylla Koriga", "Folykl Darane", "Kuprum Maxlol", "Charun Krojib", "Amisia Erdehn", "Polypa Goezee", "Tegiri Kalbur", "Tirona Kasund", "Lynera Skalbi", "?????? Elwurd", "Galekh Xigisi", "Vikare Ratite", "Boldir Lamati", "Cirava Hermod", "Tagora Gorjek", "Ardata Carmia", "Marvus Xoloto", "Fozzer Velyes", "Stelsa Sezyat", "Wanshi Adyata", "Bronya Ursama", "Chixie Roixmr", "Zebruh Codakk", "Azdaja Knelax", "Konyyl Okimaw", "Karako Pierot", "Marsti Houtek", "Lanque Bombyx", "Remele Namaaq");
 denizens = new Array("Abraxas", "Cetus", "Echidna", "Hemera", "Hephaestus", "Nix", "Typheus", "Yaldabaoth");
 quadrants = new Array("&hearts;", "&spades;", "&clubs;", "&diams;");
 var wantedCharacters = new Array();
 
if(document.getElementById("alpha_kids").checked){
	wantedCharacters = wantedCharacters.concat(alphaKids);
}
if(document.getElementById("beta_kids").checked){
	wantedCharacters = wantedCharacters.concat(betaKids);
 }
 if(document.getElementById("cherubs").checked){
	wantedCharacters = wantedCharacters.concat(cherubs);
}
if(document.getElementById("sprites").checked){
	wantedCharacters = wantedCharacters.concat(sprites);
 }
 if(document.getElementById("ancestors").checked){
	wantedCharacters = wantedCharacters.concat(ancestors);
}
if(document.getElementById("beta_trolls").checked){
	wantedCharacters = wantedCharacters.concat(betaTrolls);
 }
 if(document.getElementById("alpha_trolls").checked){
	wantedCharacters = wantedCharacters.concat(alphaTrolls);
}
if(document.getElementById("alpha_guardians").checked){
	wantedCharacters = wantedCharacters.concat(alphaGuardians);
 }
 if(document.getElementById("beta_guardians").checked){
	wantedCharacters = wantedCharacters.concat(betaGuardians);
}
if(document.getElementById("carapacians").checked){
	wantedCharacters = wantedCharacters.concat(carapacians);
 }
 if(document.getElementById("first_guardians").checked){
	wantedCharacters = wantedCharacters.concat(firstGuardians);
}
if(document.getElementById("hiveswap_trolls").checked){
	wantedCharacters = wantedCharacters.concat(hiveswapTrolls);
 }
if(document.getElementById("denizens").checked){
	wantedCharacters = wantedCharacters.concat(denizens);
 }
 
 if(document.getElementById("quadrants").checked){
	 var quad = Math.floor(Math.random()*quadrants.length);
	 if(quad == 2){
		 strRandomizer=wantedCharacters[Math.floor(Math.random()*wantedCharacters.length)] + " " + quadrants[quad] + " " + wantedCharacters[Math.floor(Math.random()*wantedCharacters.length)] + " " + quadrants[quad] + " " + wantedCharacters[Math.floor(Math.random()*wantedCharacters.length)];
	 }
	 else{
		strRandomizer=wantedCharacters[Math.floor(Math.random()*wantedCharacters.length)] + " " + quadrants[quad] + " " + wantedCharacters[Math.floor(Math.random()*wantedCharacters.length)];
	 }
 }
else{
 strRandomizer=wantedCharacters[Math.floor(Math.random()*wantedCharacters.length)] + "/" + wantedCharacters[Math.floor(Math.random()*wantedCharacters.length)];
}
document.getElementById("result").innerHTML=strRandomizer;
 
}
