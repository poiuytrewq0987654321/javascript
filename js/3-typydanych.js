'use strict';

/* dodawanie liczb */
var wyplata = 5000;
var premia = 2500;
var calkowitaWyplata;

calkowitaWyplata = wyplata + premia;

console.log(calkowitaWyplata);

/* znak spacji w stringu znaków */
var zdanie = "ala ma \b kota";

console.log(zdanie);

/* dodawanie stringów */
var wyplataStr = "5000";
var premiaStr = "2500";
var calkowitaWyplataStr;

calkowitaWyplataStr = wyplataStr + "\n" + premiaStr;

console.log(calkowitaWyplataStr);


var imieStudenta = " Michał ";
/* pokazanie na ktorej pozycji znajduje sie litera c dla zmiennej imieStudenta */
console.log(imieStudenta.indexOf('c'));
console.log(imieStudenta);
/* usuniecie pustych znakow przed i po stringu */
console.log(imieStudenta.trim(' '));

/* typ danych: true or false */

var czyJestSmog;
czyJestSmog = false;

if(czyJestSmog) {
    console.log("jest SMOG");
} else{
    console.log("nie ma SMOGa :)");
}








