document.getElementById("numero").addEventListener("dblclick",triplicar);
document.getElementById("numero").addEventListener("mouseover",ratonEncima);
document.getElementById('numero').addEventListener('mouseout',ratonFuera);
function triplicar(){
	var numero = document.getElementById('numero').textContent;
	numero*=3;
	document.getElementById('numero').innerHTML=numero;
}

function ratonEncima(){
	document.getElementById("numero").style.color = "orange";
	document.getElementById("numero").style.background = "blue";
}

function ratonFuera(){
	document.getElementById("numero").style.color = "black";
	document.getElementById("numero").style.background = "white";
}