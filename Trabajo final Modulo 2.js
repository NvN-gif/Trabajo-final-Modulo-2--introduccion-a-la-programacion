// Ejercicio práctico
// A continuación te proponemos una actividad práctica. 

// Aquí tienes el enunciado del ejercicio:

// 1. Programa un ejemplo que, dada una variable de tipo cadena con la carta del 4 de corazones, compruebe si es de corazones y además es el número 4. En caso afirmativo, lo imprimimos en la consola. Probamos el mismo programa con el 3 de corazones, y con el rey de corazones. ¿Qué sucede?
var carta="4c";
if(carta[1]==="c"&&carta[0]==="4" ){
 console.log("Es cuatro de corazones");
}
var carta="3c";
if(carta[1]==="c" && carta[0]==="4" ){
 console.log("Es cuatro de corazones");
}
var carta="12c";
if(carta[1]==="c"&&carta[0]==="4" ){
 console.log("Es cuatro de corazones"); }

 //2. Utiliza un bucle para recorrer todos los años bisiestos anteriores a 2050, e imprímelos en la consola. 
 for (var i=0 ; i<2050; i=+i+1){
    if(i%4===0){
        console.log("El años "+i+" es bisiesto");
    }
}

//3. Utiliza un bucle para recorrer todas las cartas de la baraja, desde el 1 al 12 de cada palo. Imprime en pantalla solamente las cartas rojas que sea múltiplos de 3.

var baraja="dpct";
for (var i=0 ; i<baraja.length; i=+i+1){
    for (var x=1; x <= 12 ; x= x+1){
        if (baraja[i] === "d" && x %3 === 0) {
            console.log(x+baraja[i]+" es roja y multiplo de 3");
        }
        if (baraja[i] === "c" && x%3 === 0) {
            console.log(x+baraja[i]+" es roja y multiplo de 3");
        }
    }
        }
