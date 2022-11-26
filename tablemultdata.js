"use strict";

let currentTableNumber = 0;

function tableNumber(){
	return currentTableNumber;
}

function tableValues(){
	let tab = [];
	for(let i = 1; i<=10; ++i){
		let val = i * tableNumber();
		tab.push(val);
	}
	return tab;
}

function changeTableNumber(number){
	currentTableNumber = number;
}

function valuesVerification(values){
	let tabBool = [];
	let tabCurrent = tableValues();
	for(let i = 0; i < tabCurrent.length; ++i){
		if(tabCurrent[i] === values[i]){
			tabBool.push(true);
		}
		else{
			tabBool.push(false);
		}
	}
	return tabBool;
}