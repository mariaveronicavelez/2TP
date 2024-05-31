document.getElementById("validationForm").addEventListener("submit", function(event) {
    // Evitar que el formulario se envíe automáticamente
    event.preventDefault();

    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var edad = parseInt(document.getElementById("edad").value);
    var altura = parseFloat(document.getElementById("altura").value);
    var correo = document.getElementById("correo").value.trim();
    var mensaje = document.getElementById("mensaje");

    // Inicializar una variable para controlar si todas las validaciones son correctas
    var todoCorrecto = true;

    // Validar el nombre y apellido
    if (!nombre || !apellido || nombre.length > 50 || apellido.length > 50) {
        todoCorrecto = false;
        mensaje.innerHTML = "El nombre y el apellido no deben tener mas de 50 caracteres.";
        mensaje.style.color = "red";
        return; 
    }

    // Validar la edad
    if (isNaN(edad) || edad < 0 || edad < 18) {
        todoCorrecto = false;
        mensaje.innerHTML = "La edad no es válida, debe ser mayor de 18 y no puede ser negativa.";
        mensaje.style.color = "red";
        return; 
    }

    // Validar la altura
    if (isNaN(altura) || altura < 0 || altura > 230) {
        todoCorrecto = false;
        mensaje.innerHTML = "La altura no es correcta, debe ser menor que 230 cm y no puede ser negativa.";
        mensaje.style.color = "red";
        return; 
    }

    // Validar el correo electrónico
    if (!correo || !correo.includes("@")) {
        todoCorrecto = false;
        mensaje.innerHTML = "El correo electrónico no es válido.";
        mensaje.style.color = "red";
        return; 
    }

    mensaje.innerHTML = "Todos los datos son válidos.";
    mensaje.style.color = "green";
});