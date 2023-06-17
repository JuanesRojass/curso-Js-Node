//LOS CALLBACKS SON FUNCIONES QUE SE EJECUTAN EVENTUALMENTE CUANDO EN LA FUNCION SE CUMPLE CON EL TIEMPO
//DE EJECUTAR

//LOS CALLBACKS SON FUNCIONES QUE SE MANDAN COMO ARGUMENTO DE OTRA FUNCION

//setTimeout( () => {
//    console.log("Hola Mundo");
//},3000); //En este caso, esta función se ejecutara a los 3 segudos, 3000ms == 3 segundos

const getUsuarioByID = (id, callback) => {
    const user = {
        id, // Esto es igual a id:id es decir la variable id es igual al id que se pasa como parametro en la funcion
        nombre: 'Fernando'
    }

    setTimeout( () =>{  
        callback(user); //Aqui se almacena los datos de id y nombre que se ven arriba, con el fin de poder ser llamados
    },1000);            //y controlados desde afuera
}

getUsuarioByID (10, (usuario) => {
    console.log(usuario.id);
    console.log(usuario.nombre.toUpperCase());
})




const getUsuarioByIDDos = (id, callback) =>{
    const userDos = {
        id,
        nombre: 'Juanes Rojas'
    }

    setTimeout(() =>{
        callback(userDos)
    },1000);
}

getUsuarioByIDDos(7, (usuarioDos) => {
    console.log(usuarioDos.id);
    console.log(usuarioDos.nombre.toUpperCase());
})


