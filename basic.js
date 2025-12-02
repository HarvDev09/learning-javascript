//Variables y concatenacion

/*let name = "harvey";
let weakness = "have ego";
let space = " ";

console.log(name.concat(space,weakness));

let frase = `hola soy "harv"`;

console.log(frase);

//ejercicios de operadores


let number = "30";
let number2 = 30;

console.log(number === number2);

let num = 12;
let num2 =24;
let num3 = 25;
let num4 = 92;
let num5 = 91;

let result = (num < num2 || num2 < num3) && (!num && num5 != num3);

console.log(result); // false

let op = (num5 > num2 && num4 < num3) || (!(num === num2) || num3 != num3);

console.log(op); //true

//condicionales


let tengoDinero = false;

if (tengoDinero == true){

console.log("Puedes viajar.");

}

else {

console.log("No puedes viajar.")


}*/


//fin del capitulo uno.

//capitulo dos

/*

// Arrays normales


let frutasArrays = ["Manzana","Pera","Uva","Naranja","Melocoton"];

for(let i = 0; i < frutasArrays.length; i++){

console.log(`${i + 1}. ${frutasArrays[i]}`);


}


//Arrays asociativos

let alumno1 = {

    nombre: "Harvey",
    edad: 20,
    pais: "Republica dominicana"


}

let alumno2 = {

    nombre: "Yulenny",
    edad: 19,
    pais: "Republica dominicana"


}



console.log(`hola ${alumno1.nombre}, eres de ${alumno1.pais}`);
console.log(`hola ${alumno2.nombre}, eres de ${alumno2.pais}`);

*/

//Bucles

/*

for(let i = 0; i <= 20; i++){

    
if(i === 12){

        continue;


}


console.log(i);




}

//Ejemplo de continue en un array

let frutasArrays = ["Manzana","Pera","Uva","Naranja","Melocoton"];

for(let i = 0; i < frutasArrays.length; i++){

    if(frutasArrays[i] === "Uva"){

        continue;

    }

console.log(`${i + 1}. ${frutasArrays[i]}`);


} */

/*

//For in y for of

let dbz = ["Goku","Vegeta","Krillin","Piccolo","Gohan"];


//guarda la posicion
for(i in dbz){

console.log(i);


}

//guarda el valor
for(i of dbz){

console.log(i);


} */

//label
/*
let usa = ["Detroit","New york","Washington"];
let canada = ["Vancouver","Quebec","Toronto",usa];


labelPrubea:
for(let country1 in canada){

    if(country1 == 3){

        for(let country2 of usa){

        console.log(country2);
        break labelPrubea;
        


}


} 

    else{

    console.log(canada[country1]);

}


}*/


//funciones

function sumar(n1,n2){

return n1 + n2;


}

let number = 50;
let number2 = 30;


const restar = (n1,n2)=> {

return n1 - n2;


}

console.log(restar (number,number2));
