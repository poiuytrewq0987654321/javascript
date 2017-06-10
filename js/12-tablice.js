'use strict';

var imiona = ['Monika', 'Krystian', 'Łukasz'];

imiona[3] = 'Tania';
imiona[2] = 'Ela';


/*dodanie elementu do tablicy na ostatniej pozycji
imiona.push('Geralt');*/

/*console.log(imiona);*/


/*usunięcie ostatniego elementu w tablicy
imiona.pop();
imiona.pop();*/

/*console.log(imiona);*/

/*dodanie elementu do tablicy na pierwszej pozycji
console.log(imiona.unshift('Robert'));
console.log(imiona);*/

/*usunięcie pierwszego elementu tablicy
console.log(imiona.shift());
console.log(imiona);*/


/*console.log(imiona.length);*/


/*
for (var i = 0; i < imiona.length ; i++){
     console.log('imię numer '+i+': ' + imiona[i] );
}

console.log('-----------');


imiona.forEach(function (element, i){
    console.log('Element nr ' + i + ' = ' + element)
})
*/

/*ssumowanie i wyswietlenie rekordow
console.log(imiona.join(" - "));*/


/*sortowanie
imiona.sort();
console.log(imiona);
*/

/*odwrotna kolejnosc rekordow
imiona.reverse();
console.log(imiona);*/


//łączenie tablic
var imionaMeskie = ['Robert', 'Mariusz', 'Andrzej'];
var zbiorImion = imionaMeskie.concat(imiona);

console.log(zbiorImion);


//numer indexu danego elementu tablicy
console.log(zbiorImion.indexOf('Mariusz'));


//sprawdzenie czy dany emelent jest tablica
console.log(Array.isArray(zbiorImion));


console.log(zbiorImion.slice(2, 5) );






















