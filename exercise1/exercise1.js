//Ejercicio 1

//Llamando a la funcion


//Se usa mas tarde para preguntar si se desea realizar otra compra.
let repetirMenu = true;


//Se usa un do while para ejecutar el codigo antes de confirmar la condicion.
do {

//Se crea un array con los helados y sus precios.
const iceCreams = [
    
"Palito de helado de agua: $0.6 USD",
"Palito de helado de crema: $1 USD",
"Bombon helado marca heladix: $1.6 USD",
"Bombon helado marca heladovich: 1.7 USD",
"Bombon helado marca helardo: 1.8 USD",
"Potecito de helado con confites: $2.9 USD",
"Pote de 1/4 KG $2.9 USD"

];


let montoTotal = 0;
let vuelto = 0;

let money = parseFloat(prompt("Introduce la cantidad de dinero que tienes: "));


//Opcion 1

if(money >= 2.9){

//Se le pide al usuario que seleccione una de las opciones.

let eleccion = parseInt(prompt(`Seleccione el helado que desea comprar: 
    \n1. ${iceCreams[5]}
    \n2. ${iceCreams[6]} 
    \n3. Volver al menu 
    \n0. Salir`));


if(eleccion === 1 || eleccion === 2){ 

    montoTotal += 2.9;
    vuelto =  money - montoTotal;

 alert(`El total a pagar es $${montoTotal} USD, el vuelto es de $${vuelto} USD`);


}

else if (eleccion === 3){

  continue; // reinicia el menu

}

else if (eleccion === 0){


    alert("Bye");

}


} //fin del if

//Opcion 2


else if (money >= 1.8 && money < 2.9){


//Se le pide al usuario que seleccione una de las opciones.
let eleccion = parseInt(prompt(`Seleccione el helado que desea comprar: 
    \n1. ${iceCreams[2]} 
    \n2. ${iceCreams[3]} 
    \n3. ${iceCreams[4]} 
    \n4. Volver al menu \n0. Salir`));


if(eleccion === 1){ 

    montoTotal += 1.6;
    vuelto =  money - montoTotal;

 alert(`El total a pagar es $${montoTotal} USD, el vuelto es de $${vuelto.toFixed(2)} USD`);


}

else if (eleccion === 2){

    montoTotal += 1.7;
    vuelto =  money - montoTotal;

 alert(`El total a pagar es $${montoTotal} USD, el vuelto es de $${vuelto.toFixed(2)} USD`);



}

else if (eleccion === 3){


      montoTotal += 1.8;
    vuelto =  money - montoTotal;

 alert(`El total a pagar es $${montoTotal} USD, el vuelto es de $${vuelto.toFixed(2)} USD`);


}

else if (eleccion === 4){

     continue; // reinicia el menu



}

else if (eleccion === 0){

alert("Bye");

}



} // fin del else if

else if (money >= 1 && money < 1.8){

//Se le pide al usuario que seleccione una de las opciones.
let eleccion = parseInt(prompt(`Seleccione el helado que desea comprar: 
    \n1. ${iceCreams[0]} 
    \n2. ${iceCreams[1]} 
    \n3. Volver al menu \n0. Salir`));


if(eleccion === 1){ 

    montoTotal += 0.6;
    vuelto =  money - montoTotal;

 alert(`El total a pagar es $${montoTotal} USD, el vuelto es de $${vuelto.toFixed(2)} USD`);


}

else if (eleccion === 2){

    montoTotal += 1;
    vuelto =  money - montoTotal;

 alert(`El total a pagar es $${montoTotal} USD, el vuelto es de $${vuelto.toFixed(2)} USD`);



}

else if (eleccion === 3){

     continue; // reinicia el menu

}


else if (eleccion === 0){

alert("Bye");

}


} // Fin del else if


//Comprar de nuevo

const again = prompt("Desea comprar de nuevo? y/n");
if(again !== "y") repetirMenu = false;

}

while(repetirMenu);

alert("Bye");
