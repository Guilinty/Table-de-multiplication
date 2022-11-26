"use strict";

function writeTableNumber(num){
	let numeros = document.getElementsByClassName("num");
	for(let numero of numeros){
		numero.textContent = num;
	}
}

function selectedTableNUmber(){
	let numSelect = document.getElementById("selectnum").value;
	return parseInt(numSelect);
}

function displayResultats(resultats){
	let resultat = document.getElementsByClassName("result");
	for(let i = 0; i < resultat.length; ++i){
		resultat[i].value = resultats[i];
		resultat[i].readOnly = true;
	}
}

function eraseResultat(){
	let resultat = document.getElementsByClassName("result");
	for(let i=0; i<resultat.length; ++i){
		resultat[i].value = "";
		resultat[i].readOnly = false;
	}
}

function displayMessage(msg){
	document.getElementById("resultmsg").textContent = msg;
}

function displayChecks(msg){
	let checkList = document.getElementsByClassName("check");
	for(let i = 0; i < checkList.length; ++i){
		checkList[i].textContent = msg[i];
	}
}

function eraseChecks(){
	let checkList = document.getElementsByClassName("check");
	for(let i = 0; i < checkList.length; ++i){
		checkList[i].textContent = "";
	}
}
/*
function answersValidities(){
	let champSaisie = document.getElementsByClassName("result");
	let objet = {};
	for(let i = 0; i < champSaisie.length; ++i){
		if(champSaisie[i].value === )
	}
	objet.msgs=
}*/