const formulario = document.getElementById("formulario");

if (formulario) {

    formulario.addEventListener("submit", function(event) {

        event.preventDefault();

        alert("¡Mensaje enviado correctamente!");

        formulario.reset();

    });

}