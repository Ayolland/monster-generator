function switchMonster(){
	var monster_array = ["Snek", "Axedude", "Weregoat", "Scamp", "Gooball", "Wiz", "Skelebones"];
	var monsterElement = document.getElementById("monster");
	var oldMonster = monsterElement.classList[1];
	var newMonster = monster_array[Math.floor(Math.random()*monster_array.length)];
	monsterElement.className = ( "monster " + newMonster );
	var article = "a ";
	if (oldMonster === newMonster){ article = "another ";}
	document.getElementById("log").innerHTML = "It's "+ article + newMonster + "!";

}

document.getElementById('switchMonster').addEventListener("click", switchMonster);
switchMonster();