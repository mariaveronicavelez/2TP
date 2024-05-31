function obtenerUsuariosYTareas() {
    fetch('https://jsonplaceholder.typicode.com/users')
    .then(res => res.json())
    .then((usuarios) => {
        fetch('https://jsonplaceholder.typicode.com/todos')
        .then(res => res.json())
        .then((tareas) => {
            mostrarUsuariosYtareas(usuarios, tareas);
        });
    });
}

function mostrarUsuariosYtareas(usuarios, tareas) {
    document.write("<div>TEST</div>");
    console.log(tareas);
    console.log(usuarios);
    
    usuarios.forEach(usuario => {
        document.write('ID: ' + usuario.id + '<br>');
        document.write('Nombre: ' + usuario.name + '<br>');
        document.write('Usuario: ' + usuario.username + '<br>');
        document.write('Correo: ' + usuario.email + '<br>');
        document.write('Sitio Web: ' + usuario.website + '<br>');
        document.write('<button onclick="VisualizarTareas(' + usuario.id + ')">Ver Tareas</button>');
        document.write('<div style="display:none;" id="tareas' + usuario.id + '">');
        
        tareas.forEach(tarea => {
            if (tarea.userId == usuario.id) {
                document.write('<div style="display:flex;">');
                var color = tarea.completed ? "green" : "red";
                document.write('<div style="display:block;color:' + color + ';">' + tarea.id + '. ' + tarea.title + '</div>');
                document.write('</div>');
            }
        });
        
        document.write('</div>');
        document.write('<hr>');
    });
}

function VisualizarTareas(id) {
    var elemento = document.getElementById('tareas' + id);
    if (elemento.style.display === "none") {
        elemento.style.display = "block";
    } else {
        elemento.style.display = "none";
    }
}

obtenerUsuariosYTareas();