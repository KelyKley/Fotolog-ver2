const app = {
    item: {
        nombre: undefined,
        comentario: undefined
    },
    init: function() {
        app.item.nombre = $("#nombre");
        app.item.comentario = $("#comentario");
        app.todo();
        app.configuracionDeBtn();
    },
    configuracionDeBtn: function() {
        $("#guardar").click(app.guardar);
        $("#limpiar").click(app.limpiar_comentario);
        $("#eliminar").click(app.eliminar);
    },
    guardar: function() {
        localStorage.setItem(app.item.nombre.val(), app.item.comentario.val());
        $("#comentarios").append(`<div><h3>${app.item.nombre.val()}</h3>\
            <p>${app.item.comentario.val()}</p></div>`);
        app.limpiar();
    },
    limpiar: function() {
        $("#nombre").val("").focus();
        $("#comentario").val("");
    },
    limpiar_comentario: function() {
        $("#comentarios").remove();
    },
    todo: function() {
        for (let i = 0; i < localStorage.length; i++) {
            let nombre = localStorage.key(i);
            let comentario = localStorage.getItem(nombre);
            $("#comentarios").append(`<div><h3>${nombre}</h3>\
            <p>${comentario}</p></div>`);
        }
    },
    eliminar: function() {
        localStorage.clear();
        app.limpiar_comentario();
    }
}

$(document).ready(app.init);