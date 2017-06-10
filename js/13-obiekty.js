'use strict';


//metoda to funkcja wewnątrz obiektu 



var kaja = {
    imie: "Kaja",
    wzrost:165,
    przedstawOsobe: function() {console.log(this.imie)}
}

var krystian = {
    imie: "Krystian",
    wzrost:180,
    przedstawOsobe: function() {console.log(this.imie)}
}

kaja.przedstawOsobe();
krystian.przedstawOsobe();



