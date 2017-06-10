'use strict';

function Osoba(imie,nazwisko){
    this.imie = imie;
    this.nazwisko = nazwisko;
    this.wyswietlInfo = function() {
        console.log("imię: "+this.imie+","+"Nazwisko:"+this.nazwisko);
    }
}

var krystian = new Osoba('Krystian','Dziopa');

krystian.wyswietlInfo();