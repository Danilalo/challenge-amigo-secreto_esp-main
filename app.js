// El principal objetivo de este desafío es fortalecer tus habilidades en lógica de programación. Aquí deberás desarrollar la lógica para resolver el problema.

let amigos = []; //creamos un array vacio para almacenar los amigos

function agregarAmigo() {
    
    let amigo=document.getElementById("amigo").value; //obtenemos el valor del input mediente el Id amigo
    console.log("es:", amigo);
    if(amigo==""){ //si el input esta vacio
        alert("Ingrese un amigo"); //mostramos un alerta
        return; //retornamos
    }else
    {
        amigos.push(amigo); //agregamos el amigo al array
        limpiarInput() //limpiamos el input
    }
    
}




function limpiarInput() { // se crea una función limpiarInput
    document.getElementById('amigo').value = ''; // se limpia el input
    return; // se retorna
}