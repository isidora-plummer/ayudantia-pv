$(document).ready(function(){
    var fotovolley = $(".foto1");
    var div4 = $(".descripcion")
    var titulo = $(".destacado")

    fotovolley.mouseenter(function(){
        $(this).fadeTo("slow",0);
        $(this).fadeTo("slow",1);

    });

    div4.mouseenter(function(){
        $(this).css("color", "rgba(71, 165, 112)");

    });

    titulo.click(function(){
        $(this).append(" hola");


    });

});