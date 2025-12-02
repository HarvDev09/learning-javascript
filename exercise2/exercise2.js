let free = false;

const fiesta = (hora) => {

let bienvenida = parseInt(prompt("Bienvenido al fiesta de conrad, por favor introduce tu edad: "));


if(bienvenida >= 18){

    if(hora >= 2 && hora < 7 && !free){

            free = true;
            alert("Felicidades, eres la primera persona en entrar despues de las 2 AM, eso significa que no tienes que pagar.");

            
    }

alert("Puedes entrar a la fiesta");


}

else {

alert("Lo siento, eres menor y no puedes entrar a la fiesta");

}

}

fiesta(2);

fiesta(5);