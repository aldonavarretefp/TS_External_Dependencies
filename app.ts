import "jquery"


import * as _swal from 'sweetalert';
import { SweetAlert } from 'sweetalert/typings/core';
const swal: SweetAlert = _swal as any;
console.log("Hola mundo");

$(document).ready(function(){
    console.log('Pagina lista y cargada!');


    $("h1").text("Hola desde TS")
    $("p").text("Hola parrafo desde TS")
    
})


$("#botAlerta").on('click',()=>{
    swal("Good job!", "You clicked the button!", "success");
})
