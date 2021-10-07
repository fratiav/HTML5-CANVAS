function start(){
    var elemento = document.getElementById("lienzo");

    //Se le especifica que se dibujara en 2D
    lienzo= elemento.getContext("2d");

        // - - COLORES - - //

    //Color del contorno
    lienzo.strokeStyle = "green";
    //Color del relleno
    lienzo.fillStyle = "whitesmoke";
    //Trasparencia de todas las figuras del canvas
    lienzo.globalAlpha = 0.75;

        // - - DIBUJOS RECTANGULOS - - //

    //Rectangulo relleno
    lienzo.fillRect(110,110,100,100);
    //Rectangulo vacio
    lienzo.strokeRect(310,110,100,100);
    //Borra parte de un rectangulo
    lienzo.clearRect(120,120,80,80);

        // - - GRADIENTES - - //

    //Gradiente lineal
    var degradadoLineal = lienzo.createLinearGradient(0,300,800,300);
    degradadoLineal.addColorStop(0,"red");
    degradadoLineal.addColorStop(0.5,"orange"); //La posicion va de 0 a 1 para ir añadiendo colores (0, 0.1, 0.5.. 1)
    degradadoLineal.addColorStop(1,"green");
    lienzo.fillStyle = degradadoLineal;
    lienzo.fillRect(0,0,800,600); //Hay que dibujar un cuadrado para que aparezca el degradado

    //Gradiente radial
    var degradadoRadial = lienzo.createRadialGradient(600,300,100,600,300,30);
    degradadoRadial.addColorStop(0,"red");
    degradadoRadial.addColorStop(0.5,"orange"); //La posicion va de 0 a 1 para ir añadiendo colores (0, 0.1, 0.5.. 1)
    degradadoRadial.addColorStop(1,"green");
    lienzo.fillStyle = degradadoRadial;
    lienzo.fillRect(500,200,200,200); //Hay que dibujar un cuadrado para que aparezca el degradado

}

window.addEventListener("load",start,false);