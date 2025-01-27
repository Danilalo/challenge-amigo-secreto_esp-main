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
        let lista = document.getElementById("listaAmigos"); // Selección por id de la lista de amigos se hace la asignación a la variable lista desde html
        lista.innerHTML = ""; //limpiamos la lista 
        for (let i = 0; i < amigos.length; i++) {
            let li = document.createElement("li"); // Crear elemento <li>
            li.textContent = amigos[i]; // Asignar el nombre del amigo como texto
            lista.appendChild(li); // Agregar el <li> a la lista
        }
        return; //retornamos
    

    }
    
}

function sortearAmigo(){
if(amigos.length<2){ //si la cantidad de amigos es menor a 2
    alert("Ingrese al menos 2 amigos"); //mostramos un alerta
    return; //retornamos
}
else
{
let numerorandom=Math.floor(Math.random() * amigos.length); //generamos un numero random
console.log("numoer:", numerorandom);
let amigoSecreto=amigos[numerorandom]; //seleccionamos un amigo secreto
}


}

function limpiarInput() { // se crea una función limpiarInput
    document.getElementById('amigo').value = ''; // se limpia el input
    return; // se retorna
}