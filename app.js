"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("jquery");
var _swal = require("sweetalert");
var swal = _swal;
console.log("Hola mundo");
$(document).ready(function () {
    console.log('Pagina lista y cargada!');
    $("h1").text("Hola desde TS");
    $("p").text("Hola parrafo desde TS");
});
$("#botAlerta").on('click', function () {
    swal("Good job!", "You clicked the button!", "success");
});
