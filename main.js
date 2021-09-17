let boton = document.getElementById('icono'); //En esta variable se guarda ID de la etiqueta <a>.
let enlaces = document.getElementById('enlaces');//En esta variable se guarda ID de la etiqueta <div>(menu de navegacion).
let contador = 0;

boton.addEventListener("click", function(){
    if(contador == 0){
        enlaces.className = ("enlaces dos");
        contador = 1;
    }
    else{
        enlaces.classList.remove("dos");
        enlaces.className = ('enlaces uno');
        contador = 0;
    }
})