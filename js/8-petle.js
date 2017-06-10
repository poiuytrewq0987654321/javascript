'use strict';
/*
for ( var i=4; i>=0; i--){
    'use strict';
    console.log(i);
}

var i = 0;
while(i < 10) {
    console.log("pętla while[i=" +i+ "]");
    i++;
}*/


/*var it = 0;
while(it < 5) {
    console.log(it);
    it++;
}*/

/* pętla do...while */
/* instrukcja wykona się bezwarunkowo przynajmniej raz - nawet jeśli warunek nie jest spełniony */
/*var iter = 20;
do{
    console.log(iter);
    iter++;
}while (iter < 10);*/


/* przerywanie pętli w momencie osiągnięcia danego warunku mimo że pierwszy warunek jeszcze nie został spełniony */
/*
var a = 0;
while (a < 10) {
    console.log(++a);
    if (a==5){
        break;
    }
}
*/


/* post i preinkrementacja */

/*
for (var i=1; i<4;){
    console.log(++i);
}
console.log('------');
for (var i=1; i<4;) {
    console.log(i++);
}
*/


/* pętla z ominięciem jednego wyniku dzięki continue */
for (var b=0; b<6; ++b){
    if(b ==3){
        continue;
    } else{
        console.log(b);
    }
    console.log("---");
}