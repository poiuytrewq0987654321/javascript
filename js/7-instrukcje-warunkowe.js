'use strict';



var wzrostMateusz = 175;
var wzrostOlgi = 175;

/* warunek if */

if (wzrostOlgi < wzrostMateusz) {
    console.log("Olga jest niższa od Mateusza");
}


if ( wzrostOlgi > wzrostMateusz) {
    console.log("Olga jest wyższa");
}
else{
    console.log("Olga jest niższa");
}



if ( wzrostOlgi > wzrostMateusz) {
    console.log("Olga jest wyższa");
}
else if (wzrostOlgi==wzrostMateusz){
    console.log("olga jest równa Mateuszowi");
}
else{
    console.log("Olga jest niższa");
}


var kolor = 'cyan';

switch(kolor){
    case 'czerwony':
        console.log('Kolor czerwony');
        break;
    case 'zielony':
        console.log('Kolor zielony');
        break;
    case 'niebieski':
        console.log('Kolor niebieski');
        break;
    default:
        console.log('Inny kolor');
}











