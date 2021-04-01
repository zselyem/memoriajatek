var elso = document.getElementById("1");
var masodik = document.getElementById("2");
var kartyak = [1, 2, 3, 4, 5, 6, 7, 8, document.getElementById("1"), 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24];
var i = 4;

let currentId;
document.getElementById('azonosito').addEventListener('mouseenter', (e) => {
	console.log(e.target);
	currentId = e.target.getAttribute('id');
});


elso.onclick = function(){
	if(document.getElementById("1").src === "file:///C:/Users/KURWAANYAD/Desktop/sajat_projektek/memoriagame/BloodLust.png"){
		document.getElementById("1").src = "WaterShield.png";
	}
	else {
		document.getElementById("1").src = "BloodLust.png";
	}		
}
masodik.onclick = valtogat;
function valtogat(){
	if(document.getElementById(i).src === "file:///C:/Users/KURWAANYAD/Desktop/sajat_projektek/memoriagame/BloodLust.png"){
		document.getElementById(i).src = "WaterShield.png";
	}
	else {
		document.getElementById(i).src = "BloodLust.png";
	}		
}


var harmadik = [ document.getElementById("1"), document.getElementById("2"), document.getElementById("3"), document.getElementById("4"), 
				document.getElementById("5"), document.getElementById("6"), document.getElementById("7"), document.getElementById("8"), 
				document.getElementById("9"), document.getElementById("10"), document.getElementById("11"), document.getElementById("12"),
				document.getElementById("13"), document.getElementById("14"), document.getElementById("15"), document.getElementById("16"),
				document.getElementById("17"), document.getElementById("18"), document.getElementById("19"), document.getElementById("20"),
				document.getElementById("21"), document.getElementById("22"), document.getElementById("23"),document.getElementById("24"),];

harmadik[i].onclick = valtogat;



console.log(kartyak[8]);