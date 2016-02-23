function switchMonster(){
	var monster_array = ["Snek", "Axedude", "Weregoat"];
	var newMonster = monster_array[Math.floor(Math.random()*monster_array.length)];
	var monsterElement = document.getElementById("monster");
	monsterElement.className = ( "monster " + newMonster );
}

document.getElementById('switchMonster').addEventListener("click", switchMonster);