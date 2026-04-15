function showScreen(id){

// seleccionar todas las pantallas
let screens = document.querySelectorAll(".screen");

// ocultar todas
screens.forEach(screen =>{
screen.classList.remove("active");
});

// mostrar la pantalla seleccionada
document.getElementById(id).classList.add("active");

}
