'use strict';

var informatyk = 3500;
var ksiegowy = 5000;
var handlowiec = 7500;
var analityk = 2500;

var sumaKasy;

function policzSumeKasy (skladowa1, skladowa2, skladowa3, skladowa4){
    var sumaKasy;
    sumaKasy = skladowa1 + skladowa2 + skladowa3 + skladowa4;
    
    return sumaKasy;
}

sumaKasy = policzSumeKasy(informatyk, ksiegowy, handlowiec, analityk);

console.log( );
