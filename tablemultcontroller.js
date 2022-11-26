"use strict";


function newTable(){
	let num = selectedTableNUmber();
	writeTableNumber(num);
}

function onChangeTableNumber(event){
	newTable();
	eraseResultat();
	displayMessage("Rentrez les valeurs des multiplications");
	eraseChecks();
}

function displayResult(){
	changeTableNumber(selectedTableNUmber());
	displayResultats(tableValues());
	displayMessage("Apprenez bien ces valeurs");
}

function onClick(event){
	let target=event.target;
	if(target.id==="bresult"){
		displayResult();
	}
}

function onLoad(){
	document.getElementById("selectnum").addEventListener("change", onChangeTableNumber, false);
	document.getElementById("bresult").addEventListener("click", onClick, false);
}

function onUnload(){
	document.getElementById("selectnum").removeEventListener("change", onChangeTableNumber, false);
}

window.addEventListener("load", onLoad, false);
window.addEventListener("unload", onUnload, false);
