function guardar() {
    var nombre = document.getElementById("nombre").value;
    var comentario = document.getElementById("comentario").value;
    localStorage.setItem(nombre, comentario);

    var contenedor = document.getElementById("comentarios");
    contenedor.innerHTML = "";

    for (var i = 0; i < localStorage.length; i++) {
        var nombre = localStorage.key(i);
        var comentario = localStorage.getItem(nombre);

        var div = document.createElement("DIV");
        div.setAttribute("class", "div");

        var cont_nombre = document.createElement("h3");
        var texto = document.createTextNode(nombre);
        cont_nombre.appendChild(texto);

        var cont_comentario = document.createElement("P");
        var texto_comentario = document.createTextNode(comentario);
        cont_comentario.appendChild(texto_comentario);

        div.appendChild(cont_nombre);
        div.appendChild(cont_comentario);

        contenedor.appendChild(div);

        document.getElementById("nombre").value = "";
        document.getElementById("comentario").value = "";
    }
}

guardar();

function limpiar() {
    document.getElementById("comentarios").innerHTML = "";
}

function eliminar() {
    localStorage.clear();
    guardar();
}