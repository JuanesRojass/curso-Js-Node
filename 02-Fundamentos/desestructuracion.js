const deadpool = {
    nombre: 'Wade',
    apellido: 'Winston',
    poder: 'Regeneración',
    edad: 50,
    getNombre(){
        return `${this.nombre} ${this.apellido} ${this.poder}`
    }
}

console.log(deadpool.getNombre());

const Spiderman = {
    nombre: 'Peter',
    apellido: 'Parker',
    poder: 'Telaraña',
    edad: 26,
    getNombre(){
        console.log(`${this.nombre} ${this.apellido} ${this.poder} ${this.edad}`);
    }
}

//DESTRUCTURACION

function imprimirHeroeDos(heroe){
    console.log({nombre,apellido,poder,edad} = heroe);
}

imprimeHeroe(Spiderman);




//const nombre = deadpool.nombre;
//const apellido = deadpool.apellido;
//const poder = deadpool.poder;

//DESESTRUCTURACION

//PRIMER EJEMPLO
function imprimeHeroe( heroe ){
    const {nombre, apellido, poder, edad=20 } = heroe;
    console.log(nombre,apellido,poder, edad);
}

imprimeHeroe(deadpool);

function imprimeHeroeDos({nombre, apellido, poder, edad=20 }){
    console.log(nombre,apellido,poder,edad);
}
imprimeHeroeDos(deadpool);

//SEGUNDO EJEMPLO

const heroes = ['Deadpool', 'Superman', 'Batman'];

//const heroe1 = heroes[0];
//const heroe2 = heroes[1];
//const heroe3 = heroes[2];

//DESESTRUCTURACION

const [heroe1, heroe2, heroe3] = heroes; // Escoger todos los heroes del arreglo
//const [ , , heroe3] = heroes; >> Manera de escoger solo un heroe
console.log(heroe1,heroe2,heroe3);


const peliculas = ['Cj7', 'Shaolin Soccer', 'Messi'];

const [peli1, peli2, peli3] = peliculas;
console.log(peli1,peli2,peli3);


