const btnDer = document.querySelector(".botonDer");
const btnIzq = document.querySelector(".botonIzq");
const contenido = document.querySelector(".subseccion");

btnDer.addEventListener("click", () => {
    contenido.scrollLeft += 220; //px
});

btnIzq.addEventListener("click", () => {
    contenido.scrollLeft -= 220; //px
});