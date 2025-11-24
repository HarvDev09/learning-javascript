//Aprendiendo POO

class animal {

    constructor(especie,edad,color){

        this.especie = especie;
        this.edad = edad;
        this.color = color;
        this.informacion = `i'm ${this.especie}, i'm ${this.edad} years old and my color is ${this.color}. </br>`;

    }

    verInfo = ()=> {

        document.write(this.informacion);



    }
 
}

//Instanciando un objeto

let dog = new animal ("Dog",10,"brown");
let cat = new animal ("Cat",5,"white and black");
let lion = new animal ("Lion",15,"tawny yellow")


/*document.writeln(dog.informacion);
document.writeln(cat.informacion);
document.writeln(lion.informacion);*/

//Metodos

dog.verInfo();
cat.verInfo();
lion.verInfo();